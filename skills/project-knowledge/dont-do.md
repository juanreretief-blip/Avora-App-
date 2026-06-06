# dont-do.md

## UI Patterns

**No fixed elements that drift or shift on scroll** — if a component is fixed (navbar, sidebar, FAB, toast), it must stay locked to its position at all times. Any unintended movement breaks trust and signals instability.

**No hamburger menus for primary navigation** — primary nav must always be visible. Hamburger menus hide core functionality, increase cognitive load, and reduce discoverability.

**No orphaned or unexplained empty space** — every gap must be intentional and purposeful. Unintentional whitespace reads as broken layout, not breathing room. Audit every screen at multiple viewport sizes.

**No layout shifts after load** — content must not jump, reflow, or resize once rendered. Late-loading images, fonts, or async data must have reserved space (skeletons, placeholders) to prevent cumulative layout shift.

**No tooltips as the sole source of critical information** — tooltips are invisible on mobile and inaccessible by default. Essential information must exist in the UI itself.

**No hover-only interactions** — any action or state revealed only on hover must also be accessible via tap/focus. Mobile users will never see hover states.

**No unlabelled icon buttons without accessible text** — icon-only buttons must include `aria-label` or visible text. "Everyone knows what a pencil means" is not a UX strategy.

**No modals that open on page load unprompted** — unsolicited modals interrupt the user before they have context. They are dismissed immediately and breed resentment.

**No infinite scroll without a footer or exit point** — users must be able to reach the footer. Infinite scroll that truly never ends traps users and makes content unshareble.

**No pagination that resets scroll position to the top** — navigating between pages must preserve context. Snapping back to the top on every page turn is disorienting.

---

## Code Patterns

**No `position: fixed` or `position: sticky` without explicit `z-index` management** — unmanaged stacking contexts cause elements to bleed through or disappear behind other layers unpredictably.

**No animations without `prefers-reduced-motion` handling** — all transitions and micro-animations must be wrapped in a reduced-motion media query or equivalent. Ignoring this causes accessibility failures and can trigger vestibular disorders.

**No `transition: all`** — this transitions every animatable property indiscriminately, causing performance degradation and unintended visual side effects. Always specify the exact property (e.g., `transition: opacity 200ms ease`).

**No layout calculations done in JavaScript when CSS can handle it** — JS-driven layout (e.g., manually setting heights via `offsetHeight`) causes reflows and jank. Use CSS Grid, Flexbox, or `calc()` instead.

**No synchronous operations on the main thread during animations** — heavy computation, synchronous API calls, or DOM thrashing during an animation will cause frame drops. Defer or offload.

**No magic number delays (e.g., `setTimeout(fn, 300)`) used to paper over timing bugs** — arbitrary delays are not synchronisation. They are deferred failures that break under load or slow devices.

**No unthrottled scroll or resize event listeners** — attach these with `{ passive: true }` and debounce or throttle the handler. Unthrottled listeners degrade scroll performance immediately.

**No layout-triggering CSS properties animated without compositing** — avoid animating `width`, `height`, `top`, `left`, `margin`, or `padding`. Animate `transform` and `opacity` only; these run on the compositor thread and do not cause reflows.

**No hardcoded pixel breakpoints scattered across component files** — breakpoints must be defined in a single source of truth (design tokens, a theme file, or CSS variables). Inconsistent breakpoints produce fragmented responsive behaviour.

---

## Content / Copy

**No placeholder text left in production** — "Lorem ipsum", "TBD", "Coming soon", and sample data must never reach a live environment. Audit all screens before release.

**No truncated text without an ellipsis and a way to access the full content** — cutting text mid-sentence with no disclosure or expand option misleads users and loses information.

**No error messages that say only "Something went wrong"** — every error must tell the user what happened and what they can do next. Vague errors are dead ends.

**No success states that leave the user wondering what comes next** — confirmation messages must include the next logical action or clearly indicate the user is done.

**No labels that describe the UI element instead of its purpose** — "Click the button below to submit" is not a label. Labels must describe the outcome: "Submit your application."

**No inconsistent terminology for the same concept across screens** — pick one word and use it everywhere. Mixing "account", "profile", and "user" for the same thing creates confusion and erodes confidence.

**No ALL CAPS body text or sentence-case headings mixed with title-case headings** — establish a capitalisation convention and apply it uniformly. Mixed conventions read as careless.

**No calls to action that start with "Please"** — CTAs must be direct and confident. "Please enter your email" hedges; "Enter your email" acts.

---

## Design

**No animations under 150ms or over 400ms for UI transitions** — below 150ms the animation is imperceptible and purposeless; above 400ms it feels sluggish. Standard micro-interactions should target 200–300ms with an ease-out curve.

**No easing curves set to `linear` for UI motion** — linear motion looks mechanical and unnatural. Use `ease-out` for elements entering the screen, `ease-in` for elements leaving, and `ease-in-out` for position changes.

**No interactive elements smaller than 44×44px** — this is the minimum touch target size per Apple HIG and WCAG. Smaller targets cause mis-taps and frustration, especially on mobile.

**No colour as the sole differentiator for state or meaning** — "red means error, green means success" fails for colour-blind users. Always pair colour with an icon, label, or pattern.

**No font sizes below 16px for body text on mobile** — browsers auto-zoom inputs below 16px on iOS, causing layout disruption. Small body text also fails readability standards.

**No more than two typefaces in a single product** — a primary typeface and an optional accent or mono typeface is the maximum. More than two creates visual noise without hierarchy benefit.

**No `box-shadow` or `border` used to fake depth without a consistent elevation system** — elevation must follow a defined scale (e.g., 0dp, 1dp, 4dp, 8dp, 16dp). Ad hoc shadows produce incoherent spatial hierarchy.

**No dark overlays or dimming effects without also trapping focus behind them** — if a modal or drawer dims the background, keyboard and screen-reader focus must be constrained to the foreground element. Background content must be inert.

**No skeleton loaders that look nothing like the content they precede** — skeleton shapes must approximate the real layout. A full-width grey bar standing in for a card grid is not a skeleton; it is a loading bar with extra steps.

**No visual feedback delays over 100ms for direct user input** — button presses, toggles, and taps must respond with immediate visual acknowledgement (state change, ripple, depression). If processing takes longer, show a loading indicator within 1 second.