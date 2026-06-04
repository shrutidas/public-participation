export const CAT = {
  red: {
    label: 'Policy',
    badge: 'br',
    title: 'Public Policy, Government Decision, or Government Recommendation',
    questions: 'Who made the policy, how was it communicated to the public, what was in the policy, what evidence was it based on?'
  },
  orange: {
    label: 'Events',
    badge: 'bo',
    title: 'Events Unfolding, Corporate Decisions',
    questions: null
  },
  green: {
    label: 'Knowledge',
    badge: 'bg',
    title: 'Knowledge Landscape',
    questions: 'Who knew what, and what exactly was known? What was being published in the press?'
  },
  blue: {
    label: 'Public Opinion',
    badge: 'bb',
    title: 'Public Opinion, Public Response, or Backlash',
    questions: 'What did people think? Who thought what? Did people take actions?'
  },
  purple: {
    label: 'Public Participation',
    badge: 'bp',
    title: 'Actual Events of Public Input',
    questions: 'What was the nature of the event? Who participated? What was the goal, and what if any was the policy impact? Were there any citizen assemblies?'
  }
};

export const KEY_ORDER = ['red', 'orange', 'green', 'blue', 'purple'];
