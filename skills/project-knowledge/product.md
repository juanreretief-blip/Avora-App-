# NourishBase — Product Knowledge File

---

## Product Name

**NourishBase**

*(Assumed working title — flag for branding review)*

---

## One-Line Description

A verified healthy-eating recipe app that consolidates nutritionally complete, expert-reviewed meal information into a single, trustworthy source.

---

## Problem Statement

People who want to eat healthily are forced to cobble together information from multiple sources — blogs, YouTube, Pinterest, fitness forums — none of which are nutritionally verified, consistently formatted, or comprehensive. This fragmentation leads to:

- Wasted time cross-referencing incomplete recipes
- Uncertainty about whether a meal is genuinely nutritious or just marketed as "healthy"
- No single source that combines ingredients, macros, preparation method, and dietary flags in one place

**NourishBase solves this by being the one app a health-conscious eater needs** — curated, verified, and built around complete nutritional information rather than aesthetics or virality.

---

## Target Users

### Primary Persona — The Proactive Health Eater
- Age 25–45, working professional or parent
- Already motivated to eat well but lacks time to research
- Frustrated by recipes that claim to be healthy with no evidence
- Wants quick answers: *"What can I make tonight that's actually good for me?"*

### Secondary Persona — The Dietary Condition Manager
- Managing a specific condition such as type 2 diabetes, high cholesterol, IBS, or hypertension
- Needs meals that meet strict nutritional criteria, not just "low calorie"
- Currently relies on GP pamphlets or outdated diet books
- Values clinical credibility over influencer appeal

### Tertiary Persona — The Fitness-Focused User
- Gym-goer or endurance athlete tracking macros (protein, carbs, fats)
- Wants meal plans aligned to performance goals, not just weight loss
- Already uses a fitness tracker; expects NourishBase to complement it

> **Assumption flagged:** User research is needed to confirm whether the dietary-condition persona requires a healthcare professional integration (e.g. dietitian sign-off on content) or whether general verified nutrition data is sufficient for this group.

---

## Core Features

### 1. Verified Recipe Library
- All recipes reviewed and approved by registered dietitians or nutritionists before publication
- Each recipe displays a **Verified by [credential]** badge with reviewer name and qualification
- Recipes sourced from qualified contributors only — no user-generated content without expert review

### 2. Complete Nutritional Profiles
Every recipe includes, at minimum:
- Macronutrients: calories, protein, carbohydrates (total and sugars), fats (total and saturated), fibre
- Key micronutrients relevant to the meal (e.g. iron, calcium, vitamin C)
- Glycaemic index or load where applicable
- Serving size clearly defined

### 3. Dietary Filter System
Users can filter the entire library by:
- Diet type: vegan, vegetarian, pescatarian, omnivore
- Exclusions: gluten-free, dairy-free, nut-free, low-FODMAP, low-sodium
- Health goal: weight management, muscle gain, heart health, gut health, blood sugar control

### 4. Consolidated Information View
Each recipe page contains — in one place — ingredients, quantities, preparation steps, nutritional data, dietary flags, estimated prep and cook time, and ingredient substitution notes. No redirects, no external links required.

### 5. Search and Discovery
- Search by ingredient, meal type, health goal, or cuisine
- "What's in my fridge?" ingredient-based search
- Daily or weekly meal suggestions based on user-set dietary preferences

### 6. Saved Meals and Collections
- Users can bookmark recipes and organise them into personal collections (e.g. "Quick Lunches", "High Protein Dinners")
- Collections can be shared with other users

> **Assumption flagged:** Meal planning and shopping list generation are logical extensions of the above but have not been confirmed as in-scope for the initial release. These should be treated as Phase 2 features unless confirmed otherwise.

---

## What This Product Is NOT

- **Not a general recipe app.** Recipes are not included based on popularity, aesthetics, or virality — only nutritional quality and verification status.
- **Not a calorie-counting or tracking app.** NourishBase does not ask users to log meals or monitor intake over time. It informs; it does not audit.
- **Not a medical or clinical tool.** NourishBase does not diagnose conditions, prescribe diets, or replace advice from a registered healthcare professional.
- **Not a social or influencer platform.** There are no follower counts, likes, or creator monetisation features. Credibility comes from qualifications, not popularity.
- **Not a delivery or e-commerce platform.** NourishBase does not sell ingredients or partner with food delivery services (unless confirmed as a future revenue stream).
- **Not a user-generated content platform.** Members of the public cannot publish recipes directly to the main library without expert review and approval.

---

## Key Terminology

**Verified Recipe**
A recipe that has been reviewed by a named, credentialled nutrition professional and approved as genuinely health-supportive based on its full nutritional profile — not merely because it contains vegetables or avoids processed ingredients.

**Nutritional Profile**
The complete set of macro and micronutrient data attached to a recipe, calculated per defined serving size. Profiles must be generated from a validated food composition database (e.g. USDA FoodData Central or South African Food Composition Tables, depending on market).

**Dietary Flag**
A label applied to a recipe indicating it meets or excludes specific dietary criteria (e.g. "gluten-free", "low-sodium", "high-fibre"). Flags are applied systematically, not editorially.

**Health Goal**
A user-selectable intention that filters content — such as "heart health" or "blood sugar control" — mapped to specific nutritional thresholds defined by the internal dietitian team.

**Contributor**
A qualified nutrition professional (registered dietitian, registered nutritionist, or equivalent credentialled expert) who submits recipes for publication. Contributors are verified by credentials before onboarding.

**Complete Information**
The NourishBase standard requiring that every recipe page contains all information a user needs to understand, prepare, and evaluate a meal — with no requirement to consult an external source.

> **Assumption flagged:** "Best verified health food meals" in the original brief implies a quality ranking or editorial selection process. It has been interpreted here as meaning verified-only content rather than a ranked or rated system. If a rating or editorial "best of" mechanism is intended, this needs to be defined and added as a feature.