-- Participant notes on the map. Run once in the Supabase SQL editor; running
-- it again is safe. Then set the facilitator passcode (see README).
--
-- What the public (publishable) key can do:
--   read every note except who wrote it (author_key is never readable),
--   add a note (only the text columns; the database sets the rest),
--   delete its own note, through delete_own_note() with the device's token.
-- Hiding notes and clearing a case go through functions that check the
-- facilitator passcode, which is stored hashed in a schema the API cannot see.
-- Nothing is ever removed: a deleted or hidden note is flagged, so every
-- browser learns about the change on its next sync.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.notes (
  id           uuid primary key,
  case_slug    text not null check (char_length(case_slug) between 1 and 100),
  anchor       text not null check (anchor ~ '^(e|m|i|pr)/\d+(/out|/cl/\d+(/c?ev/\d+)?)?$'),
  anchor_label text not null default '' check (char_length(anchor_label) <= 300),
  content_rev  text not null default '' check (char_length(content_rev) <= 40),
  author_name  text not null default '' check (char_length(author_name) <= 60),
  author_key   text not null,
  body         text not null check (char_length(body) <= 1000 and btrim(body) <> ''),
  hidden       boolean not null default false,
  deleted      boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists notes_updated_at on public.notes (updated_at);
create index if not exists notes_author_recent on public.notes (author_key, created_at);

-- On insert the database, not the browser, sets the flags and the times, and
-- stores only a hash of the author's token. Five notes in ten seconds from one
-- device is the most anyone types by hand.
create or replace function public.notes_before_insert() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if char_length(new.author_key) < 16 then
    raise exception 'Missing author token' using errcode = '22023';
  end if;
  new.author_key := encode(extensions.digest(new.author_key, 'sha256'), 'hex');
  new.hidden := false;
  new.deleted := false;
  new.created_at := now();
  new.updated_at := now();
  if (select count(*) from public.notes n
      where n.author_key = new.author_key
        and n.created_at > now() - interval '10 seconds') >= 5 then
    raise exception 'Too many notes at once' using errcode = 'P0001';
  end if;
  return new;
end $$;

-- Every change moves updated_at, which is what browsers sync on.
create or replace function public.notes_touch() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists notes_before_insert on public.notes;
create trigger notes_before_insert before insert on public.notes
  for each row execute function public.notes_before_insert();
drop trigger if exists notes_touch on public.notes;
create trigger notes_touch before update on public.notes
  for each row execute function public.notes_touch();

-- Access for the public key.
alter table public.notes enable row level security;
revoke all on public.notes from public, anon, authenticated;
grant select (id, case_slug, anchor, anchor_label, content_rev, author_name, body,
              hidden, deleted, created_at, updated_at)
  on public.notes to anon, authenticated;
grant insert (id, case_slug, anchor, anchor_label, content_rev, author_name, author_key, body)
  on public.notes to anon, authenticated;

drop policy if exists notes_read on public.notes;
create policy notes_read on public.notes for select to anon, authenticated using (true);
drop policy if exists notes_add on public.notes;
create policy notes_add on public.notes for insert to anon, authenticated with check (true);

-- The facilitator passcode, hashed, out of the API's reach.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
create table if not exists private.facilitator (
  id        int primary key default 1 check (id = 1),
  pass_hash text not null
);
alter table private.facilitator enable row level security;

create or replace function public.facilitator_ok(p_pass text) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from private.facilitator f
    where f.pass_hash = extensions.crypt(coalesce(p_pass, ''), f.pass_hash)
  );
$$;

-- Hide or restore up to 500 notes.
create or replace function public.facilitator_set_hidden(p_ids uuid[], p_hidden boolean, p_pass text)
returns integer
language plpgsql security definer set search_path = '' as $$
declare n integer;
begin
  if not public.facilitator_ok(p_pass) then
    raise exception 'Wrong passcode' using errcode = '28000';
  end if;
  if coalesce(array_length(p_ids, 1), 0) > 500 then
    raise exception 'Too many notes in one request' using errcode = '22023';
  end if;
  update public.notes set hidden = p_hidden
    where id = any(p_ids) and hidden is distinct from p_hidden;
  get diagnostics n = row_count;
  return n;
end $$;

-- Hide every note on one case, to start a new round.
create or replace function public.facilitator_clear(p_case text, p_pass text)
returns integer
language plpgsql security definer set search_path = '' as $$
declare n integer;
begin
  if not public.facilitator_ok(p_pass) then
    raise exception 'Wrong passcode' using errcode = '28000';
  end if;
  update public.notes set hidden = true
    where case_slug = p_case and not hidden and not deleted;
  get diagnostics n = row_count;
  return n;
end $$;

-- A device deletes its own note by proving it holds the token it posted with.
create or replace function public.delete_own_note(p_id uuid, p_token text)
returns boolean
language plpgsql security definer set search_path = '' as $$
declare n integer;
begin
  update public.notes set deleted = true
    where id = p_id and not deleted
      and author_key = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex');
  get diagnostics n = row_count;
  return n > 0;
end $$;

revoke execute on function public.notes_before_insert() from public, anon, authenticated;
revoke execute on function public.notes_touch() from public, anon, authenticated;
revoke execute on function public.facilitator_ok(text) from public, anon, authenticated;
revoke execute on function public.facilitator_set_hidden(uuid[], boolean, text) from public, anon, authenticated;
revoke execute on function public.facilitator_clear(text, text) from public, anon, authenticated;
revoke execute on function public.delete_own_note(uuid, text) from public, anon, authenticated;
grant execute on function public.facilitator_ok(text) to anon, authenticated;
grant execute on function public.facilitator_set_hidden(uuid[], boolean, text) to anon, authenticated;
grant execute on function public.facilitator_clear(text, text) to anon, authenticated;
grant execute on function public.delete_own_note(uuid, text) to anon, authenticated;
