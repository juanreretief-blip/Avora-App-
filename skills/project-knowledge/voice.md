```markdown
# Voice & Tone Guidelines

## Brand Voice Summary

Our voice is the consistent personality behind every word we write — from a button label to an error message. It doesn't change. Our tone adjusts.

- **Friendly but not casual** — We're warm and approachable, never sloppy or overly familiar.
- **Direct but not abrupt** — We get to the point without being cold or dismissive.
- **Colourful but not cluttered** — We use vivid, specific language without decorating sentences for the sake of it.
- **Welcoming but not performative** — We make people feel at home without hollow enthusiasm or exclamation-mark padding.
- **Confident but not arrogant** — We speak clearly and don't hedge everything, but we never punch down or show off.

---

## Tone Spectrum

The voice stays consistent. The tone shifts to match the moment.

| Context | Tone | Notes |
|---|---|---|
| Onboarding / first use | Warm, encouraging | Set expectations clearly. Make the next step obvious. |
| Core product / everyday UI | Clear, efficient | Minimal words. No hand-holding unless needed. |
| Errors | Honest, calm, helpful | Never blame the user. Always offer a path forward. |
| Empty states | Inviting, gently motivating | Treat empty as opportunity, not failure. |
| Success / completion | Brief, positive | Acknowledge the win without overdoing it. |
| Destructive actions | Serious, precise | No softening language. Be clear about consequences. |
| Marketing / promotional | Energetic, colourful | More personality allowed. Still direct. |

---

## Vocabulary

### Preferred Terms

- **Start** over "Initiate" or "Begin"
- **Remove** over "Delete" (where tone requires gentleness); use **Delete** where permanence needs to be clear
- **You** and **your** — always address the user directly
- **Let's** — acceptable sparingly for onboarding or empty states
- **Done** or **All set** over "Completed successfully"
- Short, concrete verbs: **Save**, **Send**, **Add**, **View**, **Edit**, **Cancel**

### Banned Terms

- **Please** — remove it; it adds length without warmth
- **Simply** / **Just** / **Easily** — condescending; implies the task is trivial
- **Utilise** — use **use**
- **Leverage** — use **use** or be specific
- **Click here** — describe what happens instead ("View your report")
- **Oops!** — overused and insincere in error states
- **Successfully** as a standalone adverb — "Saved successfully" → "Saved" or "Your changes are saved"
- Exclamation marks in errors or destructive-action flows
- Passive voice where active is possible ("Your file was deleted" → "We deleted your file" or "File deleted")

---

## UI Copy Patterns

### Buttons

Write in the imperative. Describe the outcome, not the action in isolation.

- ✅ **Save changes** / **Send message** / **Create project**
- ❌ **Submit** / **OK** / **Yes** / **Click here**

Destructive buttons must be unambiguous:
- ✅ **Delete account** / **Remove member**
- ❌ **Confirm** (confirm what?)

### Errors

Formula: **What happened + Why (if helpful) + What to do next.**

Never blame the user. Never use "Oops" or "Uh oh". Keep it calm.

- ✅ "We couldn't save your changes. Check your connection and try again."
- ✅ "That email address is already in use. Sign in instead?"
- ❌ "Oops! Something went wrong."
- ❌ "Error 403: Forbidden."

### Empty States

Treat empty as an invitation, not a dead end. Explain what belongs here and give a clear first action.

- ✅ "No projects yet. Create your first one to get started."
- ✅ "Your inbox is clear. Nice work."
- ❌ "Nothing to show here."
- ❌ "No data available."

### Loading States

Be specific where possible. Generic is acceptable for very short loads (under 1 second).

- ✅ "Loading your projects…" / "Saving…" / "Sending…"
- ❌ "Loading…" (acceptable only when context is already obvious)
- ❌ "Please wait while we process your request."

### Success States

Brief. Specific. No over-celebration.

- ✅ "Changes saved." / "Message sent." / "Account created."
- ✅ "You're in. Let's get started." (onboarding only)
- ❌ "Woohoo! You did it!"
- ❌ "Successfully completed."

---

## Capitalisation Rules

- **Product UI labels, buttons, and navigation items**: Title Case — "Create Project", "My Account", "Billing Settings"
- **Body copy and error messages**: Sentence case — "Your changes have been saved."
- **Section headings in product**: Title Case
- **Tooltips and helper text**: Sentence case
- **All-caps**: Never. Not for emphasis, not for labels.
- **Feature names**: Title Case when referring to the feature by name ("use Smart Search to find anything fast"); lowercase in descriptive use ("the search feature")

---

## Punctuation Rules

- **Full stops in UI copy**: Omit on standalone labels, buttons, and headings. Include in multi-sentence body copy and error messages.
- **Exclamation marks**: Maximum one per screen, and only in genuinely celebratory moments (onboarding completion, major milestones). Never in errors. Never in body copy.
- **Ellipses (…)**: Use only for loading states or truncated text. Not for trailing thoughts or to imply hesitation in copy.
- **Commas**: Use the Oxford comma in lists — "Save, export, and share your work."
- **Apostrophes**: Contractions are encouraged — "you're", "we'll", "it's" — they're friendlier than the full form.
- **Hyphens vs dashes**: Use an em dash (—) with no spaces for parenthetical asides. Use a hyphen for compound modifiers ("step-by-step guide").
- **Question marks in UI**: Use sparingly. Confirm dialogs may use them; most UI copy should not.

---

## Examples

### Scenario 1: Form validation error

| | Copy |
|---|---|
| ✅ Good | "That password is too short. Use at least 8 characters." |
| ❌ Bad | "Oops! Invalid password. Error: MIN_LENGTH_8." |

**Why it works:** The good version tells the user exactly what's wrong and how to fix it. No blame, no jargon, no fake friendliness.

---

### Scenario 2: Deleting something permanent

| | Copy |
|---|---|
| ✅ Good | "Delete this project? This can't be undone. All files and data will be permanently removed." |
| ❌ Bad | "Are you sure you want to proceed with deleting? This action may not be reversible." |

**Why it works:** The good version is direct, specific about consequences, and doesn't hedge. "May not be reversible" is evasive — if it's permanent, say so.

---

### Scenario 3: Empty state — no team members yet

| | Copy |
|---|---|
| ✅ Good | "No team members yet. Invite people to collaborate on your projects." [**Invite someone**] |
| ❌ Bad | "Nothing to display. No users have been added to this workspace." |

**Why it works:** The good version is human, explains the value of filling the empty state, and gives a clear action. The bad version is passive and offers nothing.

---

### Scenario 4: Onboarding — account just created

| | Copy |
|---|---|
| ✅ Good | "You're all set, [Name]. Your workspace is ready — let's build something." |
| ❌ Bad | "Congratulations! Your account has been successfully created! Welcome aboard!!!" |

**Why it works:** The good version is warm and personal without being frantic. Three exclamation marks and "successfully created" read as hollow and automated.
```