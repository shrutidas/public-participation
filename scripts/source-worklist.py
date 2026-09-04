#!/usr/bin/env python3
"""
Build the source-audit worklist: one row per unique source URL.

research-repository.csv has one row per citation (558 of them, 353 unique URLs),
which is the right grain for checking a claim but the wrong grain for fetching a
page. This collapses it to one row per URL and adds the blank verdict columns an
auditor fills in.

Run export-research.mjs first, then:

    python3 scripts/source-worklist.py > research/source-audit-worklist.csv
"""
import csv, sys, collections
from urllib.parse import urlparse

SRC = 'research-repository.csv'
OUT = [
    'URL', 'Domain', 'Labels Used', 'Citations', 'Cases', 'Record Types',
    'Verbatim Quotes', 'Deep Links',
    'HTTP Status', 'Page Exists', 'Claim Supported', 'Verdict', 'Notes',
]

def main():
    by = collections.OrderedDict()
    for r in csv.DictReader(open(SRC)):
        u = (r['URL'] or '').strip()
        if not u:
            continue
        d = by.setdefault(u, {
            'labels': [], 'cases': [], 'types': [], 'quotes': 0, 'deep': [], 'n': 0,
        })
        d['n'] += 1
        for key, col in (('labels', 'Resource Title'), ('cases', 'Case'), ('types', 'Record Type')):
            v = (r[col] or '').strip()
            if v and v not in d[key]:
                d[key].append(v)
        if (r['Verbatim Quote'] or '').strip():
            d['quotes'] += 1
        if r['Deep Link'] and r['Deep Link'] not in d['deep']:
            d['deep'].append(r['Deep Link'])

    w = csv.writer(sys.stdout)
    w.writerow(OUT)
    for u, d in sorted(by.items(), key=lambda kv: (-kv[1]['n'], kv[0])):
        w.writerow([
            u,
            urlparse(u).netloc.replace('www.', ''),
            ' | '.join(d['labels']),
            d['n'],
            ' | '.join(d['cases']),
            ' | '.join(d['types']),
            d['quotes'],
            ' | '.join(d['deep']),
            '', '', '', '', '',
        ])
    print(f'{len(by)} unique URLs, {sum(x["n"] for x in by.values())} citations',
          file=sys.stderr)

main()
