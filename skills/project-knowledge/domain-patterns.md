# Domain Patterns: Health Food & Meal Planning

## Industry / Domain

This project operates in the **health food and meal planning** space. The core product is a recipe and meal discovery platform where users browse, cook, and revisit verified healthy meals. The primary user actions are:

- Discovering new meals that meet their health goals
- Following step-by-step cooking instructions during meal preparation
- Returning to previously viewed or saved meals

Users range from health-conscious beginners to experienced home cooks. Many are motivated by specific goals (weight management, clean eating, dietary restrictions) and are investing real effort into changing their habits — the product must reward that effort, not create friction.

---

## Trust Signals Required

Verification and credibility are non-negotiable in this space. Users are making decisions about what they put in their bodies.

- **Verified meal badge** — every meal must display a clear, consistent indicator that it has been reviewed and approved (nutritional accuracy, ingredient safety, recipe reliability)
- **Nutritional transparency** — display macros and key nutrients prominently; do not bury this information
- **Source attribution** — credit recipe origins, nutritionists, or review methodology where applicable
- **Accurate ingredient lists** — no vague quantities; every ingredient must be specific and measurable
- **Allergen flagging** — clearly surface common allergens (gluten, dairy, nuts, etc.) before the user commits to a recipe
- **User ratings or cook confirmations** — social proof from people who have actually made the meal reinforces credibility

---

## Common UX Patterns in This Space

**Recipe cards** with a hero image, prep/cook time, difficulty level, and a verified badge visible before the user taps in.

**Step-by-step cooking mode** — a dedicated, distraction-free view that shows one step at a time with large text, a progress indicator, and easy forward/back navigation. Screen should stay active (prevent sleep timeout).

**Saved / history section** — a clearly labelled area where previously viewed or saved meals are stored, sorted by recency with thumbnail images for quick recognition.

**Filters and tags** — prominent filtering by dietary preference (vegan, keto, dairy-free, etc.), meal type (breakfast, lunch, dinner, snack), prep time, and calorie range.

**Ingredient scaling** — allow users to adjust serving sizes with automatic recalculation of ingredient quantities.

**Favourites or collections** — let users organise saved meals into named groups (e.g. "Quick lunches", "Sunday meal prep").

---

## Anti-Patterns to Avoid

- **Burying verification status** — the verified indicator must never be hidden in a detail page or behind a tooltip; it must be visible on the card level
- **Long scrolling recipe pages with no step mode** — forcing users to scroll up and down a single page while cooking is a known frustration; always offer a dedicated cook mode
- **Vague instructions** — "cook until done" or "add seasoning to taste" without guidance is a trust failure; instructions must be precise
- **No history or recents** — if a user has to search for a meal they cooked last week from scratch, the product has failed a core need
- **Health claims without substance** — avoid marketing language like "superfood" or "detox" that is not backed by the verified content; this erodes trust
- **Cluttered cooking view** — during active cooking, ads, banners, or navigation chrome must not compete with the recipe steps
- **Inconsistent verified badge** — if some meals show a badge and others do not with no explanation, users cannot trust the system

---

## Regulatory / Compliance Considerations

- **Nutritional information accuracy** — if calorie counts or macros are displayed, they must be reliable; misleading nutritional data can constitute a consumer protection violation in many jurisdictions
- **Allergen disclosure** — in South Africa, the Foodstuffs, Cosmetics and Disinfectants Act requires allergen labelling on food products; while this platform is digital, the same spirit of disclosure applies and is best practice
- **Health claims** — the Consumer Protection Act (South Africa) prohibits false or misleading representations; avoid unsubstantiated health benefit claims in recipe descriptions or marketing copy
- **POPIA compliance** — if the platform stores user history, saved meals, or preferences, it is processing personal data; a privacy notice, consent mechanism, and data retention policy are required under the Protection of Personal Information Act
- **Accessibility** — cooking instructions and nutritional information must be accessible to users with visual impairments; ensure sufficient colour contrast, scalable text, and screen reader compatibility

---

## Competitor UX Norms

Understanding the established conventions users arrive with:

- **Yummly** — strong personalisation based on dietary preferences; recipe cards with high-quality photography; guided cooking mode
- **BBC Good Food** — clean, editorial aesthetic; trusted brand signals; detailed method steps with timing callouts
- **MyFitnessPal recipe section** — macro-first presentation; tight integration between meal logging and nutrition tracking
- **Noom / Lifesum** — colour-coded food scoring systems that make healthiness legible at a glance
- **Prepd / Mealime** — meal planning focused; shopping list generation from saved meals; minimal-friction repeat cooking

**Norm to meet:** users expect high-quality food photography, reliable nutritional data, and a frictionless path from discovery to cooking instructions. History and saves are table stakes.

---

## Emotional Context

Users in this space are often in a state of **motivated effort** — they are trying to eat better and are investing time and attention to do so. This creates both opportunity and fragility:

- They feel **pride and accomplishment** when they successfully cook a healthy meal; the product should reinforce this (e.g. completion states, encouraging microcopy)
- They feel **frustration quickly** if instructions are unclear or a recipe fails; one bad experience can break the habit
- They may feel **overwhelmed** by too many choices or too much information at once; progressive disclosure and smart defaults reduce this
- They often return to meals that **worked for them** — familiarity and comfort are genuine motivators, not just laziness; make revisiting easy and non-judgmental
- Avoid tone that is **preachy or guilt-inducing** about food choices; the platform should feel supportive, not prescriptive
- The **cooking moment** is a focused, slightly pressured experience; the UI must feel calm, clear, and reliable when the user is standing at the stove