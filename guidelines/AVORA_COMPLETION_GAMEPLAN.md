# Avora Completion Gameplan

## Product Direction

Avora should become a verified healthy-eating app that helps users answer one question quickly: "What should I eat today that fits my goals, time, budget, and ingredients?"

The app should feel calm, practical, and trustworthy. It should not feel like a calorie tracker, influencer recipe feed, medical product, or generic wellness dashboard.

## Current State

The app already has a strong visual prototype with these screens:

- Splash
- Auth
- Onboarding
- Taste setup
- Home
- Search
- Recipe detail
- Meal plan
- Grocery list
- Profile

The core issue is that several screens are still shallow. Users can move through the prototype, but the product does not yet provide enough app-like structure, state, trust signals, or task completion paths.

## North Star Flow

1. User opens Avora.
2. User signs in or creates an account.
3. User sets dietary needs, goals, household size, budget, and available cooking time.
4. Avora shows a personalized Home screen with recommended verified meals.
5. User searches or filters meals by ingredient, goal, allergen, meal type, prep time, or budget.
6. User opens a recipe and sees verification, nutrition, ingredients, allergens, method, substitutions, and serving controls.
7. User adds the recipe to a plan.
8. Avora creates a grocery list grouped by aisle.
9. User cooks with a dedicated Cook Mode.
10. User can save, revisit, adjust preferences, and keep using the app without getting stuck.

## Required Screens

### Auth And Account

- Welcome / sign in
- Create account
- Forgot password
- Email validation and helpful error states
- Account-created success state that routes to onboarding

### Onboarding And Setup

- Goal selection: steady energy, heart health, blood sugar control, muscle gain, gut health, weight management
- Dietary pattern: omnivore, vegetarian, vegan, pescatarian
- Exclusions and allergens: gluten, dairy, nuts, eggs, shellfish, low-FODMAP, low-sodium
- Household size and servings default
- Budget level
- Cooking time preference
- Ingredients at home / pantry starter
- Confirmation screen: "Your plan is ready"

### Home

- Greeting and primary next action
- Today's recommended meal
- Nutrition snapshot with plain language
- Recently viewed / saved meals
- Quick actions: Search, Use What I Have, Build Plan, Grocery List
- Trust cue: verified recipes only

### Search And Discovery

- Search input
- Filter panel
- Ingredient-based search
- Empty search state with suggested actions
- Recipe results with image, time, calories, protein, dietary flags, allergen flags, and verified badge

### Recipe Detail

- Verified badge with reviewer name and credential
- Macro and key nutrient summary
- Serving stepper with recalculated ingredients
- Ingredients with exact quantities
- Allergen flags
- Dietary flags
- Prep and cook times
- Substitutions
- Step-by-step method
- Add to plan
- Save recipe
- Start Cook Mode

### Cook Mode

- One step per screen
- Large readable instruction text
- Progress indicator
- Back and next controls
- Ingredient reminder for the current step
- Finish state with Save, Add to Recents, or Plan another meal

### Meal Plan

- Today and week views
- Add, replace, or remove meal
- Meal slots: breakfast, lunch, dinner, snack
- Clear empty states
- Generate grocery list

### Grocery List

- Group by aisle
- Check off items
- Combine duplicate ingredients
- Show recipe source for each item
- Adjust servings
- Empty state that routes back to planning

### Saved And History

- Saved meals
- Recent meals
- Collections
- Empty state with "Find meals"

### Profile And Preferences

- User details
- Dietary needs
- Allergens
- Goals
- Budget
- Household size
- Privacy and data notice
- Sign out

## Core Data Model

Start with local mock data, then wire storage later.

- User profile
- Preferences
- Recipes
- Nutrition profile
- Verification details
- Ingredients
- Recipe steps
- Meal plan entries
- Grocery items
- Saved recipes
- Recent recipes

## Design Priorities

- Use Avora's warm neutral background and sage accents.
- Use near-black for one primary action per screen.
- Keep primary navigation visible.
- Use lucide icons for actions.
- Keep touch targets at least 44px.
- Use plain language.
- Show verification at card and detail level.
- Reserve space for images and dynamic content.
- Avoid hover-only behavior.
- Respect reduced-motion preferences.

## Phase Plan

### Phase 1: Make The Prototype Feel Complete

- Add missing screens and states.
- Expand bottom navigation to Home, Search, Saved, Plan, You.
- Add stateful route handling so back buttons return to the previous screen.
- Add complete recipe detail content.
- Add Cook Mode.
- Add useful empty states.
- Add validation and success/error states for auth.

### Phase 2: Make The Product Trustworthy

- Add verified badges and reviewer credentials.
- Add nutrition profiles and allergen flags to all recipe cards.
- Add recipe source and review methodology text.
- Replace vague health claims with factual nutrition language.
- Add privacy/data notice for saved preferences and history.

### Phase 3: Make It Useful In Real Life

- Add ingredient-based search.
- Add serving scaling across recipe and grocery list.
- Add weekly meal plan.
- Add grocery list consolidation.
- Add saved collections and recents.
- Add preference editing from Profile.

### Phase 4: Polish And Validate

- Audit every screen at mobile widths.
- Check that no screen traps the user.
- Verify all buttons have actions.
- Test keyboard/focus behavior.
- Test reduced motion.
- Run a 10-person usability test around the core flow.
- Iterate on confusing labels, scary CTAs, and dead ends.

## First Implementation Sprint

1. Refactor `App.tsx` into screen components and shared UI components.
2. Create central mock data for recipes, nutrition, verification, ingredients, steps, and plans.
3. Add bottom nav with five tabs.
4. Build full Recipe Detail and Cook Mode.
5. Add Saved/History.
6. Add richer Search filters and empty states.
7. Add Profile preference editing.
8. Build, run on emulator, and capture screenshots for Home, Search, Recipe, Cook Mode, Plan, Grocery, Saved, and Profile.

## Success Criteria

- A first-time user can complete the full journey without guessing where to go next.
- Every screen has a clear primary action.
- Every empty, error, and success state gives a next step.
- Every recipe shows verification, nutrition, ingredients, method, and allergens.
- Users can search, save, plan, shop, cook, and return home.
- The app feels like Avora: calm, verified, practical, and warm.
