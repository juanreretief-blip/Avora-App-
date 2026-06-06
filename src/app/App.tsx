import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronRight,
  Clock3,
  Flame,
  Heart,
  Home,
  Leaf,
  ListChecks,
  LogOut,
  Mail,
  Minus,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBasket,
  SlidersHorizontal,
  Star,
  UserRound,
  Utensils,
  WheatOff,
  X,
} from "lucide-react";
import bowlPhoto from "../imports/avora-photo-bowl.jpg";
import loginPhoto from "../imports/avora-photo-login.jpg";
import smoothiePhoto from "../imports/avora-photo-smoothie.jpg";
import toastPhoto from "../imports/avora-photo-toast.jpg";
import avoraIconLight from "../assets/logos/avora-icon-light-clean.svg";
import avoraLogoLight from "../assets/logos/avora-logo-light.svg";
import avoraLogoDark from "../assets/logos/avora-logo-dark.svg";
import avoraIconDark from "../assets/logos/avora-icon-dark-clean.svg";

type Screen =
  | "splash"
  | "auth"
  | "otp"
  | "create"
  | "forgot"
  | "onboarding"
  | "goals"
  | "diet"
  | "household"
  | "pantry"
  | "ready"
  | "home"
  | "search"
  | "recipe"
  | "cook"
  | "plan"
  | "grocery"
  | "saved"
  | "profile";

type Recipe = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  meal: string;
  time: number;
  kcal: number;
  protein: number;
  fiber: number;
  carbs: number;
  fat: number;
  healthScore: number;
  difficulty: "Easy" | "Medium";
  tags: string[];
  allergens: string[];
  verifiedBy: string;
  credential: string;
  source: string;
  ingredients: { name: string; qty: number; unit: string; aisle: string }[];
  steps: { title: string; body: string; focus: string }[];
  substitutions: string[];
};

const onboarding = [
  {
    kicker: "Verified meals",
    badge: "Verified-only library",
    title: "Know why a meal is good for you",
    body: "Every recipe shows nutrition, allergens, and a named reviewer before you cook.",
    image: bowlPhoto,
  },
  {
    kicker: "Real-life planning",
    badge: "Adapts to your kitchen",
    title: "Plan around your time and kitchen",
    body: "Choose meals by goal, ingredients, prep time, and servings without rebuilding the list yourself.",
    image: smoothiePhoto,
  },
  {
    kicker: "Cook with less friction",
    badge: "Step-by-step guidance",
    title: "One clear step at a time",
    body: "Cook Mode keeps instructions large, calm, and easy to follow when your hands are busy.",
    image: toastPhoto,
  },
];

const goals = ["Steady Energy", "Heart Health", "Blood Sugar", "Gut Health", "Muscle Support", "Weight Balance"];
const dietOptions = ["Omnivore", "Vegetarian", "Vegan", "Pescatarian"];
const allergenOptions = ["Gluten", "Dairy", "Nuts", "Eggs", "Shellfish", "Soy"];
const dietaryLimits = ["Low Sodium", "Low Sugar", "Low Carb"];
const pantryOptions = [
  "Avocado", "Baby Greens", "Lemon", "Chia Seeds", "Tahini", "Almond Milk",
  "Sourdough", "Cacao", "Eggs", "Olive Oil", "Garlic", "Onion",
  "Brown Rice", "Oats", "Banana", "Spinach", "Tomatoes", "Yogurt",
  "Chickpeas", "Quinoa",
];

const recipes: Recipe[] = [
  {
    id: "glow-bowl",
    title: "Avora Glow Bowl",
    subtitle: "Avocado, greens, lemon tahini, toasted seeds",
    image: bowlPhoto,
    meal: "Lunch",
    time: 16,
    kcal: 420,
    protein: 18,
    fiber: 12,
    carbs: 38,
    fat: 21,
    healthScore: 92,
    difficulty: "Easy",
    tags: ["High Fiber", "Vegan", "Heart Health"],
    allergens: ["Sesame"],
    verifiedBy: "Nandi Mokoena",
    credential: "RD(SA), Registered Dietitian",
    source: "Avora clinical recipe set",
    ingredients: [
      { name: "Avocado", qty: 0.5, unit: "", aisle: "Produce" },
      { name: "Baby Greens", qty: 2, unit: "cups", aisle: "Produce" },
      { name: "Cooked Quinoa", qty: 0.75, unit: "cup", aisle: "Pantry" },
      { name: "Tahini", qty: 1.5, unit: "tbsp", aisle: "Pantry" },
      { name: "Lemon", qty: 0.5, unit: "", aisle: "Produce" },
      { name: "Pumpkin Seeds", qty: 1, unit: "tbsp", aisle: "Pantry" },
    ],
    steps: [
      { title: "Mix the dressing", body: "Whisk tahini, lemon juice, two tablespoons of water, and a small pinch of salt until smooth.", focus: "Tahini and lemon" },
      { title: "Build the bowl", body: "Add greens and quinoa to a bowl. Slice the avocado and place it on top.", focus: "Greens, quinoa, avocado" },
      { title: "Finish and serve", body: "Spoon over the dressing and scatter pumpkin seeds across the bowl.", focus: "Dressing and seeds" },
    ],
    substitutions: ["Use brown rice instead of quinoa", "Swap pumpkin seeds for sunflower seeds"],
  },
  {
    id: "cacao-smoothie",
    title: "Cacao Green Smoothie",
    subtitle: "Spinach, cacao, banana, almond milk",
    image: smoothiePhoto,
    meal: "Breakfast",
    time: 7,
    kcal: 310,
    protein: 21,
    fiber: 8,
    carbs: 34,
    fat: 10,
    healthScore: 86,
    difficulty: "Easy",
    tags: ["Protein", "Quick", "Steady Energy"],
    allergens: ["Tree Nuts"],
    verifiedBy: "Mia Jacobs",
    credential: "Registered Nutritionist",
    source: "Avora breakfast review",
    ingredients: [
      { name: "Baby Spinach", qty: 1.5, unit: "cups", aisle: "Produce" },
      { name: "Banana", qty: 1, unit: "", aisle: "Produce" },
      { name: "Almond Milk", qty: 1, unit: "cup", aisle: "Chilled" },
      { name: "Cacao Powder", qty: 1, unit: "tbsp", aisle: "Pantry" },
      { name: "Chia Seeds", qty: 1, unit: "tbsp", aisle: "Pantry" },
    ],
    steps: [
      { title: "Load the blender", body: "Add almond milk first, then spinach, banana, cacao, and chia seeds.", focus: "Almond milk first" },
      { title: "Blend until smooth", body: "Blend for 45 to 60 seconds. Add a splash of water if the smoothie is too thick.", focus: "Smooth texture" },
      { title: "Serve cold", body: "Pour into a glass and drink within 20 minutes for the best texture.", focus: "Serve now" },
    ],
    substitutions: ["Use oat milk if you avoid nuts", "Add plain yogurt for a thicker smoothie"],
  },
  {
    id: "seed-toast",
    title: "Seeded Avo Toast",
    subtitle: "Sourdough, avocado, herbs, chilli oil",
    image: toastPhoto,
    meal: "Snack",
    time: 9,
    kcal: 360,
    protein: 13,
    fiber: 9,
    carbs: 36,
    fat: 18,
    healthScore: 81,
    difficulty: "Easy",
    tags: ["Quick", "Balanced", "High Fiber"],
    allergens: ["Gluten"],
    verifiedBy: "Nandi Mokoena",
    credential: "RD(SA), Registered Dietitian",
    source: "Avora quick meals set",
    ingredients: [
      { name: "Sourdough", qty: 2, unit: "slices", aisle: "Bakery" },
      { name: "Avocado", qty: 0.5, unit: "", aisle: "Produce" },
      { name: "Fresh Herbs", qty: 2, unit: "tbsp", aisle: "Produce" },
      { name: "Pumpkin Seeds", qty: 1, unit: "tbsp", aisle: "Pantry" },
      { name: "Chilli Oil", qty: 1, unit: "tsp", aisle: "Pantry" },
    ],
    steps: [
      { title: "Toast the bread", body: "Toast sourdough until crisp at the edges and warm in the centre.", focus: "Sourdough" },
      { title: "Mash the avocado", body: "Mash avocado with herbs and a squeeze of lemon. Keep the texture slightly chunky.", focus: "Avocado and herbs" },
      { title: "Top and finish", body: "Spread avocado on toast, add seeds, and finish with a small drizzle of chilli oil.", focus: "Seeds and chilli oil" },
    ],
    substitutions: ["Use gluten-free toast if needed", "Skip chilli oil for a milder plate"],
  },
];

const initialPlan = [
  { slot: "Breakfast", recipeId: "cacao-smoothie" },
  { slot: "Lunch", recipeId: "glow-bowl" },
  { slot: "Dinner", recipeId: "seed-toast" },
];

export default function App() {
  const [screen, setScreen] = useState<Screen>("auth");
  const [history, setHistory] = useState<Screen[]>([]);
  const [authContact, setAuthContact] = useState("");
  const [onboardingIndex, setOnboardingIndex] = useState(0);
  const [activeRecipeId, setActiveRecipeId] = useState(recipes[0].id);
  const [servings, setServings] = useState(2);
  const [savedIds, setSavedIds] = useState<string[]>(["glow-bowl"]);
  const [recentIds, setRecentIds] = useState<string[]>(["seed-toast", "cacao-smoothie"]);
  const [plan, setPlan] = useState(initialPlan);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [cookStep, setCookStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [diet, setDiet] = useState("Omnivore");
  const [allergens, setAllergens] = useState<string[]>([]);
  const [household, setHousehold] = useState(2);
  const [budget, setBudget] = useState("Balanced");
  const [timeLimit, setTimeLimit] = useState(20);
  const [pantry, setPantry] = useState<string[]>(["Avocado", "Lemon", "Tahini"]);
  const [userName, setUserName] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (screen !== "splash") return;
    const timer = window.setTimeout(() => setScreen("auth"), 900);
    return () => window.clearTimeout(timer);
  }, [screen]);

  const activeRecipe = useMemo(
    () => recipes.find((recipe) => recipe.id === activeRecipeId) ?? recipes[0],
    [activeRecipeId],
  );

  const groceryItems = useMemo(() => {
    const map = new Map<string, { name: string; qty: number; unit: string; aisle: string; sources: string[] }>();
    plan.forEach((item) => {
      const recipe = recipes.find((candidate) => candidate.id === item.recipeId);
      recipe?.ingredients.forEach((ingredient) => {
        const key = `${ingredient.name}-${ingredient.unit}`;
        const existing = map.get(key);
        if (existing) {
          existing.qty += ingredient.qty * household;
          existing.sources.push(recipe.title);
        } else {
          map.set(key, {
            name: ingredient.name,
            qty: ingredient.qty * household,
            unit: ingredient.unit,
            aisle: ingredient.aisle,
            sources: [recipe.title],
          });
        }
      });
    });
    return Array.from(map.values()).sort((a, b) => a.aisle.localeCompare(b.aisle));
  }, [household, plan]);

  const go = (next: Screen) => {
    setHistory((current) => [...current, screen]);
    setScreen(next);
  };

  const goTab = (next: Screen) => {
    setHistory([]);
    setScreen(next);
  };

  const back = () => {
    const previous = history[history.length - 1];
    if (!previous) {
      setScreen("home");
      return;
    }
    setHistory((current) => current.slice(0, -1));
    setScreen(previous);
  };

  const openRecipe = (id: string) => {
    setActiveRecipeId(id);
    setRecentIds((current) => [id, ...current.filter((item) => item !== id)].slice(0, 4));
    go("recipe");
  };

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  };

  const ensureSaved = (id: string) => {
    setSavedIds((current) => (current.includes(id) ? current : [id, ...current]));
  };

  const toggleSaved = (id: string) => {
    setSavedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]));
  };

  const addToPlan = (slot: string) => {
    setPlan((current) => {
      const withoutSlot = current.filter((item) => item.slot !== slot);
      return [...withoutSlot, { slot, recipeId: activeRecipe.id }].sort((a, b) =>
        ["Breakfast", "Lunch", "Dinner", "Snack"].indexOf(a.slot) - ["Breakfast", "Lunch", "Dinner", "Snack"].indexOf(b.slot),
      );
    });
    showToast(`Added to ${slot}`);
  };

  const goSearch = (query = "") => {
    setSearchQuery(query);
    goTab("search");
  };

  return (
    <main className="avora-app-root" aria-label="Avora interactive app prototype">
      <div className="app-viewport">
        {screen === "splash" && <SplashScreen />}
        {screen === "auth" && <AuthScreen onSendCode={(contact) => { setAuthContact(contact); go("otp"); }} onSocial={() => go("onboarding")} />}
        {screen === "otp" && <OTPScreen contact={authContact} onBack={back} onVerify={() => go("onboarding")} />}
        {screen === "create" && <CreateAccountScreen onBack={back} onContinue={(name) => { setUserName(name); go("onboarding"); }} />}
        {screen === "forgot" && <ForgotScreen onBack={back} />}
        {screen === "onboarding" && (
          <OnboardingScreen
            current={onboardingIndex}
            onBack={() => (onboardingIndex === 0 ? back() : setOnboardingIndex((v) => v - 1))}
            onSkip={() => go("goals")}
            onNext={() => {
              if (onboardingIndex < onboarding.length - 1) { setOnboardingIndex((v) => v + 1); return; }
              go("goals");
            }}
          />
        )}
        {screen === "goals" && <GoalsScreen selected={selectedGoals} onToggle={(goal) => toggle(goal, selectedGoals, setSelectedGoals)} onBack={back} onNext={() => go("diet")} />}
        {screen === "diet" && <DietScreen diet={diet} allergens={allergens} onDiet={setDiet} onAllergen={(item) => toggle(item, allergens, setAllergens)} onBack={back} onNext={() => go("household")} />}
        {screen === "household" && <HouseholdScreen household={household} budget={budget} timeLimit={timeLimit} onHousehold={setHousehold} onBudget={setBudget} onTime={setTimeLimit} onBack={back} onNext={() => go("pantry")} />}
        {screen === "pantry" && <PantryScreen pantry={pantry} onToggle={(item) => toggle(item, pantry, setPantry)} onBack={back} onNext={() => go("ready")} />}
        {screen === "ready" && <ReadyScreen onContinue={() => goTab("home")} onBack={back} />}
        {screen === "home" && <HomeScreen userName={userName} plan={plan} pantry={pantry} selectedGoals={selectedGoals} onRecipe={openRecipe} onSearch={() => goSearch()} onUseWhatIHave={() => goSearch(pantry[0] ?? "")} onPlan={() => goTab("plan")} onGrocery={() => go("grocery")} onSaved={() => goTab("saved")} onProfile={() => goTab("profile")} />}
        {screen === "search" && <SearchScreen defaultQuery={searchQuery} onRecipe={openRecipe} onHome={() => goTab("home")} onSaved={() => goTab("saved")} onPlan={() => goTab("plan")} onProfile={() => goTab("profile")} />}
        {screen === "recipe" && (
          <RecipeScreen
            recipe={activeRecipe}
            servings={servings}
            saved={savedIds.includes(activeRecipe.id)}
            onBack={back}
            onSave={() => toggleSaved(activeRecipe.id)}
            onMinus={() => setServings((v) => Math.max(1, v - 1))}
            onPlus={() => setServings((v) => Math.min(8, v + 1))}
            onCook={() => { setCookStep(0); go("cook"); }}
            onPlan={(slot) => addToPlan(slot)}
          />
        )}
        {screen === "cook" && (
          <CookModeScreen
            recipe={activeRecipe}
            step={cookStep}
            onBack={back}
            onPrevious={() => setCookStep((v) => Math.max(0, v - 1))}
            onNext={() => setCookStep((v) => v + 1)}
            onFinish={() => { ensureSaved(activeRecipe.id); goTab("home"); }}
          />
        )}
        {screen === "plan" && <PlanScreen plan={plan} onRecipe={openRecipe} onHome={() => goTab("home")} onSearch={() => goTab("search")} onSaved={() => goTab("saved")} onGrocery={() => go("grocery")} onProfile={() => goTab("profile")} onReplace={(slot) => addToPlan(slot)} />}
        {screen === "grocery" && <GroceryScreen items={groceryItems} checked={checkedItems} household={household} onToggle={(item) => toggle(item, checkedItems, setCheckedItems)} onClearChecked={() => setCheckedItems([])} onBack={back} onPlan={() => goTab("plan")} />}
        {screen === "saved" && <SavedScreen savedIds={savedIds} recentIds={recentIds} onRecipe={openRecipe} onSave={toggleSaved} onHome={() => goTab("home")} onSearch={() => goTab("search")} onPlan={() => goTab("plan")} onProfile={() => goTab("profile")} />}
        {screen === "profile" && (
          <ProfileScreen
            userName={userName}
            goals={selectedGoals}
            diet={diet}
            allergens={allergens}
            household={household}
            budget={budget}
            timeLimit={timeLimit}
            onHome={() => goTab("home")}
            onSearch={() => goTab("search")}
            onSaved={() => goTab("saved")}
            onPlan={() => goTab("plan")}
            onEditGoals={() => go("goals")}
            onEditDiet={() => go("diet")}
            onEditHousehold={() => go("household")}
            onEditPantry={() => go("pantry")}
            onSignOut={() => { setHistory([]); setScreen("auth"); }}
          />
        )}
      </div>
      {toast && <Toast message={toast} />}
    </main>
  );
}

function toggle<T>(item: T, current: T[], setter: (value: T[]) => void) {
  setter(current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
}

function SplashScreen() {
  return (
    <div className="screen splash-screen">
      <img className="splash-logo" src={avoraLogoLight} alt="Avora" />
    </div>
  );
}

function AuthScreen({ onSendCode, onSocial }: { onSendCode: (contact: string) => void; onSocial: () => void }) {
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    setSending(true);
    window.setTimeout(() => { setSending(false); onSendCode(contact); }, 900);
  };

  return (
    <div className="screen auth-screen">
      <div className="auth-hero auth-hero-rounded">
        <img src={loginPhoto} alt="Fresh whole food meal" />
        <img className="auth-logo-overlay" src={avoraIconDark} alt="Avora" style={{ width: 140, height: 140 }} />
      </div>
      <div className="auth-panel">
        <div className="auth-top">
          <h2>Welcome to Avora</h2>
          <p>Personalised meals, verified nutrition, and less time figuring out what to cook.</p>
        </div>
        <div className="auth-bottom">
          <PhoneField value={contact} onChange={setContact} />
          <button className="primary-action" style={{ marginTop: 25 }} onClick={handleSend} disabled={contact.trim().length < 6 || sending}>
            {sending ? "Sending…" : "Send Code"}
            {!sending && <ChevronRight size={18} />}
          </button>
          <AuthDivider />
          <div className="social-row">
            <button className="social-button-compact" onClick={onSocial} aria-label="Continue with Google"><GoogleLogo /></button>
            <button className="social-button-compact" onClick={onSocial} aria-label="Continue with Facebook"><FacebookLogo /></button>
            <button className="social-button-compact" onClick={onSocial} aria-label="Continue with Apple"><AppleLogo /></button>
          </div>
          <p className="auth-terms">Social login skips OTP for the demo. By continuing you agree to our <span>Terms</span> and <span>Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  );
}

function PhoneField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="phone-field">
      <span className="phone-prefix"><Phone size={16} /> +27</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d\s]/g, ""))}
        type="tel"
        inputMode="numeric"
        placeholder="82 000 0000"
        aria-label="Phone number"
        className="phone-input"
      />
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#141413" />
    </svg>
  );
}

function maskContact(contact: string) {
  if (contact.includes("@")) {
    const [local, domain] = contact.split("@");
    return `${local.slice(0, 2)}***@${domain}`;
  }
  return contact.replace(/^(\+?\d{2,3}\s?\d{2})[\s\d]+/, "$1 *** ****");
}

function OTPScreen({ contact, onBack, onVerify }: { contact: string; onBack: () => void; onVerify: () => void }) {
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [resent, setResent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isEmail = contact.includes("@");

  useEffect(() => {
    if (countdown <= 0) return;
    const t = window.setTimeout(() => setCountdown((v) => v - 1), 1000);
    return () => window.clearTimeout(t);
  }, [countdown]);

  useEffect(() => {
    if (code.length === 6) onVerify();
  }, [code]);

  const handleResend = () => {
    setCode("");
    setCountdown(30);
    setResent(true);
    window.setTimeout(() => setResent(false), 3000);
    inputRef.current?.focus();
  };

  const displayContact = contact.trim() ? maskContact(contact) : "your number";

  return (
    <div className="screen padded-screen flex-screen">
      <TopBar title="" onBack={onBack} />
      <div className="section-intro">
        <span className="eyebrow">Verification</span>
        <h2>Check your {isEmail ? "inbox" : "phone"}</h2>
        <p>Enter the 6-digit code sent to <strong>{displayContact}</strong>.</p>
      </div>
      <div className="otp-slots-wrap" onClick={() => inputRef.current?.focus()}>
        <div className="otp-slots">
          {[0, 1, 2].map((i) => {
            const char = code[i];
            const isActive = i === code.length;
            return (
              <div key={i} className={`otp-slot${isActive ? " active" : ""}${char ? " filled" : ""}`}>
                {char ?? (isActive ? <span className="otp-caret" /> : null)}
              </div>
            );
          })}
          <span className="otp-separator">·</span>
          {[3, 4, 5].map((i) => {
            const char = code[i];
            const isActive = i === code.length;
            return (
              <div key={i} className={`otp-slot${isActive ? " active" : ""}${char ? " filled" : ""}`}>
                {char ?? (isActive ? <span className="otp-caret" /> : null)}
              </div>
            );
          })}
        </div>
        <input
          ref={inputRef}
          className="otp-hidden-input"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          type="text"
          inputMode="numeric"
          maxLength={6}
          aria-label="One-time code"
          autoFocus
        />
      </div>
      {resent && <p className="otp-feedback otp-feedback--ok">New code sent to {displayContact}.</p>}
      <p className="otp-feedback otp-feedback--hint">Wrong code? Request a new one below — codes expire after 10 minutes.</p>
      <button className="otp-resend" onClick={handleResend} disabled={countdown > 0}>
        {countdown > 0 ? `Resend in ${countdown}s` : "Didn't get a code? Resend"}
      </button>
      <button className="primary-action docked-action" onClick={onVerify} disabled={code.length < 6}>
        Verify &amp; Continue
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

function AuthDivider() {
  return (
    <div className="auth-divider">
      <span>or</span>
    </div>
  );
}

function CreateAccountScreen({ onBack, onContinue }: { onBack: () => void; onContinue: (name: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="screen padded-screen flex-screen">
      <TopBar title="Create Account" onBack={onBack} />
      <div className="section-intro">
        <span className="eyebrow">Start here</span>
        <h2>Your meal plan needs a home</h2>
        <p>Use any details for the prototype. The flow will continue into onboarding.</p>
      </div>
      <TextField icon={<UserRound size={18} />} value={name} onChange={setName} label="Name" placeholder="Your name" />
      <TextField icon={<Mail size={18} />} value={email} onChange={setEmail} label="Email address" type="email" placeholder="you@example.com" />
      <button className="primary-action docked-action" onClick={() => onContinue(name)} disabled={name.trim().length < 2}>Create Account</button>
    </div>
  );
}

function ForgotScreen({ onBack }: { onBack: () => void }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("janre@avora.app");

  return (
    <div className="screen padded-screen">
      <TopBar title="Reset Password" onBack={onBack} />
      <div className="section-intro">
        <span className="eyebrow">Account help</span>
        <h2>Get back into Avora</h2>
        <p>Enter your email and Avora will show the next step.</p>
      </div>
      <TextField icon={<Mail size={18} />} value={email} onChange={setEmail} label="Email address" type="email" />
      {sent && <SuccessCard title="Reset link ready" body="Check your inbox, then return to sign in." />}
      <button className="primary-action" onClick={() => setSent(true)}>{sent ? "Send Again" : "Send Reset Link"}</button>
    </div>
  );
}

function OnboardingScreen({ current, onBack, onNext, onSkip }: { current: number; onBack: () => void; onNext: () => void; onSkip: () => void }) {
  const [confirmExit, setConfirmExit] = useState(false);
  const item = onboarding[current];

  const handleBack = () => {
    if (current === 0) { setConfirmExit(true); } else { onBack(); }
  };

  if (confirmExit) {
    return (
      <div className="screen padded-screen flex-screen confirm-screen">
        <div className="confirm-content">
          <h2>Leave onboarding?</h2>
          <p>You can always come back to the intro from the login screen.</p>
        </div>
        <div className="confirm-actions">
          <button className="secondary-action" onClick={() => setConfirmExit(false)}>Stay</button>
          <button className="primary-action" onClick={onBack}>Leave</button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen padded-screen onboarding-screen">
      <header className="onboarding-top">
        <button onClick={handleBack} aria-label="Previous screen"><ArrowLeft size={18} /></button>
        <Dots current={current} total={onboarding.length} />
        <button className="onboarding-skip" onClick={onSkip}>Skip</button>
      </header>
      <div className="onboarding-visual">
        <img src={item.image} alt="" />
        <div className="floating-metric"><BadgeCheck size={16} /> {item.badge}</div>
      </div>
      <div className="onboarding-copy">
        <span className="eyebrow">{item.kicker}</span>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <button className="primary-action" onClick={onNext}>
        {current === onboarding.length - 1 ? "Set Up Avora" : "Next"}
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

function GoalsScreen({ selected, onToggle, onBack, onNext }: { selected: string[]; onToggle: (goal: string) => void; onBack: () => void; onNext: () => void }) {
  return (
    <SetupShell title="Health Goals" stepIndex={0} stepTotal={4} heading="What should Avora focus on?" body="Select all that apply — your choices shape every meal suggestion." onBack={onBack} onNext={onNext} nextDisabled={selected.length === 0}>
      <ChipGrid items={goals} selected={selected} onToggle={onToggle} />
      {selected.length === 0 && <p className="setup-hint">Select at least one goal to continue.</p>}
    </SetupShell>
  );
}

function DietScreen({ diet, allergens, onDiet, onAllergen, onBack, onNext }: { diet: string; allergens: string[]; onDiet: (diet: string) => void; onAllergen: (item: string) => void; onBack: () => void; onNext: () => void }) {
  return (
    <SetupShell title="Diet Needs" stepIndex={1} stepTotal={4} heading="What should Avora avoid?" body="Your choices stay visible on recipe cards and filter out mismatched meals." onBack={onBack} onNext={onNext}>
      <h3 className="minor-heading">Diet Type <span className="minor-hint">choose one</span></h3>
      <ChipGrid items={dietOptions} selected={[diet]} onToggle={(item) => onDiet(item)} radio />
      <h3 className="minor-heading">Allergens <span className="minor-hint">select all that apply</span></h3>
      <ChipGrid items={allergenOptions} selected={allergens} onToggle={onAllergen} />
      <h3 className="minor-heading">Dietary Limits <span className="minor-hint">select all that apply</span></h3>
      <ChipGrid items={dietaryLimits} selected={allergens} onToggle={onAllergen} />
    </SetupShell>
  );
}

const budgetDescriptions: Record<string, string> = {
  Budget: "Affordable staples, minimal waste",
  Balanced: "Quality ingredients without overspending",
  Flexible: "Best ingredients regardless of cost",
};

function HouseholdScreen({ household, budget, timeLimit, onHousehold, onBudget, onTime, onBack, onNext }: { household: number; budget: string; timeLimit: number; onHousehold: (value: number) => void; onBudget: (value: string) => void; onTime: (value: number) => void; onBack: () => void; onNext: () => void }) {
  return (
    <SetupShell title="Planning" stepIndex={2} stepTotal={4} heading="Make meals fit real life" body="Avora will scale recipes and keep recommendations practical." onBack={onBack} onNext={onNext}>
      <ControlCard title="Household Size" body="Sets default serving size across all recipes." stacked>
        <Stepper value={household} onMinus={() => onHousehold(Math.max(1, household - 1))} onPlus={() => onHousehold(Math.min(8, household + 1))} label="household size" />
      </ControlCard>
      <ControlCard title="Grocery Budget" body={budgetDescriptions[budget]} stacked>
        <div className="segmented-grid three">
          {["Budget", "Balanced", "Flexible"].map((item) => (
            <button key={item} className={budget === item ? "selected" : ""} onClick={() => onBudget(item)}>{item}</button>
          ))}
        </div>
      </ControlCard>
      <ControlCard title="Cooking Time" body="Max time you want to spend cooking on a busy day." stacked>
        <strong className="time-readout">{timeLimit} min</strong>
        <input className="range-input" type="range" min="10" max="45" step="5" value={timeLimit} onChange={(event) => onTime(Number(event.target.value))} aria-label="Cooking time limit" />
        <div className="range-labels"><span>10 min</span><span>45 min</span></div>
      </ControlCard>
    </SetupShell>
  );
}

function PantryScreen({ pantry, onToggle, onBack, onNext }: { pantry: string[]; onToggle: (item: string) => void; onBack: () => void; onNext: () => void }) {
  return (
    <SetupShell title="Kitchen" stepIndex={3} stepTotal={4} heading="What is already at home?" body="This powers the ingredient search and keeps suggestions realistic." onBack={onBack} onNext={onNext} nextLabel="Create My Plan">
      <ChipGrid items={pantryOptions} selected={pantry} onToggle={onToggle} />
      <div className="setup-note"><ShieldCheck size={18} /> Prototype note: these choices are saved in local app state for the demo session.</div>
    </SetupShell>
  );
}

function AnimatedCheck() {
  return (
    <div className="ready-check">
      <svg viewBox="0 0 52 52" aria-hidden="true">
        <circle className="check-circle" cx="26" cy="26" r="23" />
        <path className="check-path" d="M14 27 l8 8 l16 -16" />
      </svg>
    </div>
  );
}

function ReadyScreen({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  return (
    <div className="screen ready-screen">
      <TopBar title="" onBack={onBack} />
      <div className="ready-content">
        <AnimatedCheck />
        <span className="eyebrow">Plan ready</span>
        <h2>Your Avora plan is ready</h2>
        <p>Meals are matched to your goals, time, and household size. You can adjust anything later from Profile.</p>
      </div>
      <button className="primary-action" onClick={onContinue}>See My Day <ChevronRight size={18} /></button>
    </div>
  );
}

function getGreeting(name: string) {
  const hour = new Date().getHours();
  const time = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  return name ? `${time}, ${name}` : time;
}

function HomeScreen({ userName, plan, pantry, selectedGoals, onRecipe, onSearch, onUseWhatIHave, onPlan, onGrocery, onSaved, onProfile }: { userName: string; plan: typeof initialPlan; pantry: string[]; selectedGoals: string[]; onRecipe: (id: string) => void; onSearch: () => void; onUseWhatIHave: () => void; onPlan: () => void; onGrocery: () => void; onSaved: () => void; onProfile: () => void }) {
  const plannedCount = plan.length;
  const score = Math.min(100, Math.round((plannedCount / 3) * 100));
  const scoreLabel = score === 100 ? "All meals planned" : score > 0 ? `${plannedCount} of 3 meals planned` : "No meals planned yet";
  const recommended = selectedGoals.length > 0
    ? recipes.filter((r) => r.tags.some((t) => selectedGoals.includes(t)))
    : recipes;
  const recipesToShow = recommended.length > 0 ? recommended : recipes;

  return (
    <AppScreen active="home" onHome={() => undefined} onSearch={onSearch} onSaved={onSaved} onPlan={onPlan} onProfile={onProfile}>
      <header className="home-header">
        <div>
          <span className="eyebrow">{getGreeting(userName)}</span>
          <h2>Your Avora Plan</h2>
        </div>
        <button className="avatar-button" onClick={onProfile} aria-label="Open profile"><UserRound size={18} /></button>
      </header>
      <button className="search-pill home-search" onClick={onSearch}><Search size={18} /> Search meals, ingredients, goals</button>
      <section className="daily-card">
        <div>
          <span className="eyebrow">Today</span>
          <h3>{score}% planned</h3>
          <p>{scoreLabel}</p>
        </div>
        <div
          className="ring-meter"
          aria-label={`Daily plan score ${score} percent`}
          style={{
            background: `radial-gradient(circle, #141413 55%, transparent 56%), conic-gradient(#a3bc82 0 ${score}%, rgba(250, 249, 245, 0.16) ${score}% 100%)`,
          }}
        >
          <span>{score}</span>
        </div>
      </section>
      <div className="quick-grid">
        <button onClick={onUseWhatIHave}><Leaf size={18} /> My Pantry{pantry.length > 0 ? ` (${pantry.length})` : ""}</button>
        <button onClick={onPlan}><ShoppingBasket size={18} /> My Plan</button>
        <button onClick={onGrocery}><ListChecks size={18} /> Groceries</button>
        <button onClick={onSaved}><Heart size={18} /> Saved</button>
      </div>
      <SectionHeading title="Recommended for You" action="View Plan" onAction={onPlan} />
      <RecipeStack recipesToShow={recipesToShow} onRecipe={onRecipe} />
      <TrustStrip />
    </AppScreen>
  );
}

function SearchScreen({ defaultQuery = "", onRecipe, onHome, onSaved, onPlan, onProfile }: { defaultQuery?: string; onRecipe: (id: string) => void; onHome: () => void; onSaved: () => void; onPlan: () => void; onProfile: () => void }) {
  const [query, setQuery] = useState(defaultQuery);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Quick", "High Fiber", "Protein", "Vegan", "Heart Health"];
  const visibleRecipes = recipes.filter((recipe) => {
    const text = `${recipe.title} ${recipe.subtitle} ${recipe.tags.join(" ")} ${recipe.meal}`.toLowerCase();
    const queryMatch = query.trim() === "" || text.includes(query.toLowerCase());
    const filterMatch = activeFilter === "All" || recipe.tags.includes(activeFilter);
    return queryMatch && filterMatch;
  });

  return (
    <AppScreen active="search" onHome={onHome} onSearch={() => undefined} onSaved={onSaved} onPlan={onPlan} onProfile={onProfile}>
      <TopTitle icon={<Search size={18} />} title="Search" />
      <label className="search-field">
        <Search size={18} />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try avocado, quick, protein" aria-label="Search meals, ingredients, and goals" />
      </label>
      <div className="filter-row">
        {filters.map((filter) => (
          <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>
            {filter === "All" ? <SlidersHorizontal size={14} /> : null}
            {filter}
          </button>
        ))}
      </div>
      <SectionHeading title={visibleRecipes.length ? "Matched Meals" : "No Matches Yet"} meta={`${visibleRecipes.length} meals`} />
      {visibleRecipes.length ? <RecipeStack recipesToShow={visibleRecipes} onRecipe={onRecipe} /> : <EmptyState title="No meals match that search" body="Try a shorter word, clear filters, or search by an ingredient you already have." action="Show All Meals" onAction={() => { setQuery(""); setActiveFilter("All"); }} />}
    </AppScreen>
  );
}

const mealSlots = ["Breakfast", "Lunch", "Dinner", "Snack"];

function RecipeScreen({ recipe, servings, saved, onBack, onSave, onMinus, onPlus, onCook, onPlan }: { recipe: Recipe; servings: number; saved: boolean; onBack: () => void; onSave: () => void; onMinus: () => void; onPlus: () => void; onCook: () => void; onPlan: (slot: string) => void }) {
  const [targetSlot, setTargetSlot] = useState(recipe.meal);

  return (
    <div className="screen recipe-screen">
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} />
        <div className="hero-actions">
          <button className="hero-btn" onClick={onBack} aria-label="Back"><ArrowLeft size={18} /></button>
          <button className={`hero-btn${saved ? " active" : ""}`} onClick={onSave} aria-label={saved ? "Remove saved recipe" : "Save recipe"}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
        </div>
      </div>
      <div className="recipe-panel">
        <VerifiedLine recipe={recipe} />
        <h2>{recipe.title}</h2>
        <p>{recipe.subtitle}</p>
        <div className="metric-row">
          <Metric label="Time" value={`${recipe.time}m`} />
          <Metric label="Energy" value={`${recipe.kcal}`} />
          <Metric label="Protein" value={`${recipe.protein}g`} />
          <Metric label="Fiber" value={`${recipe.fiber}g`} />
        </div>
        <div className="tag-row">
          {recipe.tags.map((tag) => <span key={tag}>{tag}</span>)}
          {recipe.allergens.map((tag) => <span className="warning-tag" key={tag}><AlertTriangle size={12} /> {tag}</span>)}
        </div>
        <section className="control-card serving-control">
          <div>
            <h3>Servings</h3>
            <p>Ingredients and grocery quantities update for this recipe</p>
          </div>
          <Stepper value={servings} onMinus={onMinus} onPlus={onPlus} label="servings" />
        </section>
        <section className="detail-section">
          <h3>Ingredients</h3>
          <div className="ingredient-list">
            {recipe.ingredients.map((item) => (
              <span key={item.name}><Check size={14} /> {formatQty(item.qty * servings)} {item.unit} {item.name}</span>
            ))}
          </div>
        </section>
        <section className="detail-section">
          <h3>Method Preview</h3>
          {recipe.steps.map((step, index) => (
            <article className="method-row" key={step.title}>
              <strong>{index + 1}</strong>
              <div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </section>
        <section className="detail-section">
          <h3>Substitutions</h3>
          <ul className="plain-list">
            {recipe.substitutions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="detail-section">
          <h3>Add to Meal Plan</h3>
          <div className="slot-picker">
            {mealSlots.map((slot) => (
              <button key={slot} className={targetSlot === slot ? "selected" : ""} onClick={() => setTargetSlot(slot)}>{slot}</button>
            ))}
          </div>
        </section>
        <div className="action-pair">
          <button className="secondary-action" onClick={() => onPlan(targetSlot)}>Add to {targetSlot}</button>
          <button className="primary-action" onClick={onCook}>Start Cook Mode</button>
        </div>
      </div>
    </div>
  );
}

function CookModeScreen({ recipe, step, onBack, onPrevious, onNext, onFinish }: { recipe: Recipe; step: number; onBack: () => void; onPrevious: () => void; onNext: () => void; onFinish: () => void }) {
  const [showCompletion, setShowCompletion] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const current = recipe.steps[step];
  const isLast = step === recipe.steps.length - 1;

  const handleNext = () => {
    if (isLast) { setShowCompletion(true); window.setTimeout(onFinish, 2000); }
    else { onNext(); }
  };

  if (showCompletion) {
    return (
      <div className="screen cook-screen cook-done">
        <Confetti />
        <div className="finish-icon-wrap">
          <AnimatedCheck />
        </div>
        <h2>Nicely done!</h2>
        <p>{recipe.title} has been saved to your meals.</p>
      </div>
    );
  }

  if (confirmExit) {
    return (
      <div className="screen padded-screen flex-screen confirm-screen">
        <div className="confirm-content">
          <h2>Leave cook mode?</h2>
          <p>Step {step + 1} of {recipe.steps.length} — your progress won't be saved.</p>
        </div>
        <div className="confirm-actions">
          <button className="secondary-action" onClick={() => setConfirmExit(false)}>Keep Cooking</button>
          <button className="primary-action" onClick={onBack}>Leave</button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen cook-screen">
      <header className="cook-top">
        <button onClick={() => setConfirmExit(true)} aria-label="Leave cook mode"><X size={18} /></button>
        <span>{step + 1} of {recipe.steps.length}</span>
      </header>
      <div className="cook-progress"><span style={{ width: `${((step + 1) / recipe.steps.length) * 100}%` }} /></div>
      <div className="cook-card">
        <span className="eyebrow">Cook Mode</span>
        <h2>{current.title}</h2>
        <p>{current.body}</p>
        <div className="focus-ingredient"><Utensils size={18} /> Use now: {current.focus}</div>
      </div>
      <div className="cook-actions">
        <button className="secondary-action" onClick={onPrevious} disabled={step === 0}>Previous</button>
        <button className="primary-action" onClick={handleNext}>{isLast ? "Finish Cooking" : "Next Step"}</button>
      </div>
    </div>
  );
}

function PlanScreen({ plan, onRecipe, onHome, onSearch, onSaved, onGrocery, onProfile, onReplace }: { plan: typeof initialPlan; onRecipe: (id: string) => void; onHome: () => void; onSearch: () => void; onSaved: () => void; onGrocery: () => void; onProfile: () => void; onReplace: (slot: string) => void }) {
  return (
    <AppScreen active="plan" onHome={onHome} onSearch={onSearch} onSaved={onSaved} onPlan={() => undefined} onProfile={onProfile}>
      <TopTitle icon={<ShoppingBasket size={18} />} title="Meal Plan" />
      <div className="section-intro compact">
        <span className="eyebrow">Today</span>
        <h2>Three meals, one clear list</h2>
      </div>
      <div className="timeline">
        {["Breakfast", "Lunch", "Dinner"].map((slot) => {
          const item = plan.find((candidate) => candidate.slot === slot);
          const recipe = recipes.find((candidate) => candidate.id === item?.recipeId);
          return (
            <article key={slot}>
              <time>{slot}</time>
              {recipe ? (
                <button onClick={() => onRecipe(recipe.id)}>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.time} min · {recipe.kcal} cal · verified</p>
                </button>
              ) : (
                <button className="empty-slot" onClick={() => onReplace(slot)}>
                  <h3>Add a meal</h3>
                  <p>Tap to add your last viewed recipe here.</p>
                </button>
              )}
            </article>
          );
        })}
        {plan.find((p) => p.slot === "Snack") && (() => {
          const item = plan.find((p) => p.slot === "Snack")!;
          const recipe = recipes.find((r) => r.id === item.recipeId);
          return recipe ? (
            <article key="Snack">
              <time>Snack</time>
              <button onClick={() => onRecipe(recipe.id)}>
                <h3>{recipe.title}</h3>
                <p>{recipe.time} min · {recipe.kcal} cal · verified</p>
              </button>
            </article>
          ) : null;
        })()}
      </div>
      <button className="grocery-card" onClick={onGrocery} aria-label="Open grocery list">
        <div>
          <span className="eyebrow">Grocery list</span>
          <h3>Ready to shop</h3>
          <p>Ingredients are grouped by aisle and combined across meals.</p>
        </div>
        <ListChecks size={20} />
      </button>
    </AppScreen>
  );
}

function GroceryScreen({ items, checked, household, onToggle, onClearChecked, onBack, onPlan }: { items: ReturnType<typeof Array<never>> | { name: string; qty: number; unit: string; aisle: string; sources: string[] }[]; checked: string[]; household: number; onToggle: (item: string) => void; onClearChecked: () => void; onBack: () => void; onPlan: () => void }) {
  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    acc[item.aisle] = [...(acc[item.aisle] ?? []), item];
    return acc;
  }, {});

  return (
    <div className="screen padded-screen flex-screen">
      <TopBar title="Grocery List" onBack={onBack} />
      <div className="section-intro compact">
        <span className="eyebrow">Sorted by aisle · scaled for {household} {household === 1 ? "person" : "people"}</span>
        <h2>Everything for today, ready to shop</h2>
      </div>
      {items.length ? (
        <div className="grocery-list">
          {Object.entries(grouped).map(([aisle, aisleItems]) => (
            <section key={aisle}>
              <h3>{aisle}</h3>
              {aisleItems.map((item) => {
                const id = `${item.name}-${item.unit}`;
                return (
                  <label key={id} className={checked.includes(id) ? "checked" : ""}>
                    <input type="checkbox" checked={checked.includes(id)} onChange={() => onToggle(id)} />
                    <span>{formatQty(item.qty)} {item.unit} {item.name}</span>
                    <small>{Array.from(new Set(item.sources)).join(", ")}</small>
                  </label>
                );
              })}
            </section>
          ))}
        </div>
      ) : (
        <EmptyState title="No grocery list yet" body="Add meals to your plan and Avora will build the list." action="Open Meal Plan" onAction={onPlan} />
      )}
      <div className="grocery-footer">
        {checked.length > 0 && <button className="secondary-action" onClick={onClearChecked}>Clear {checked.length} checked</button>}
        <button className="primary-action docked-action" onClick={onPlan}>Back To Plan</button>
      </div>
    </div>
  );
}

function SavedScreen({ savedIds, recentIds, onRecipe, onSave, onHome, onSearch, onPlan, onProfile }: { savedIds: string[]; recentIds: string[]; onRecipe: (id: string) => void; onSave: (id: string) => void; onHome: () => void; onSearch: () => void; onPlan: () => void; onProfile: () => void }) {
  const saved = recipes.filter((recipe) => savedIds.includes(recipe.id));
  const recent = recentIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean) as Recipe[];

  return (
    <AppScreen active="saved" onHome={onHome} onSearch={onSearch} onSaved={() => undefined} onPlan={onPlan} onProfile={onProfile}>
      <TopTitle icon={<Heart size={18} />} title="Saved" />
      <SectionHeading title="Saved Meals" meta={`${saved.length} meals`} />
      {saved.length ? <RecipeStack recipesToShow={saved} savedIds={savedIds} onRecipe={onRecipe} onSave={onSave} /> : <EmptyState title="No saved meals yet" body="Save recipes you want to cook again." action="Find Meals" onAction={onSearch} />}
      <SectionHeading title="Recently Viewed" />
      <RecipeStack recipesToShow={recent} savedIds={savedIds} onRecipe={onRecipe} onSave={onSave} />
    </AppScreen>
  );
}

function ProfileScreen({ userName, goals, diet, allergens, household, budget, timeLimit, onHome, onSearch, onSaved, onPlan, onEditGoals, onEditDiet, onEditHousehold, onEditPantry, onSignOut }: { userName: string; goals: string[]; diet: string; allergens: string[]; household: number; budget: string; timeLimit: number; onHome: () => void; onSearch: () => void; onSaved: () => void; onPlan: () => void; onEditGoals: () => void; onEditDiet: () => void; onEditHousehold: () => void; onEditPantry: () => void; onSignOut: () => void }) {
  const displayName = userName || "Your";
  return (
    <AppScreen active="profile" onHome={onHome} onSearch={onSearch} onSaved={onSaved} onPlan={onPlan} onProfile={() => undefined}>
      <TopTitle icon={<UserRound size={18} />} title="You" />
      <div className="profile-hero">
        <img src={bowlPhoto} alt="Fresh whole food ingredients" />
        <div>
          <span className="eyebrow">Your profile</span>
          <h2>{displayName}{displayName === "Your" ? "" : "'s"} Avora Plan</h2>
          <p>Your preferences shape search, recipe cards, and grocery quantities.</p>
        </div>
      </div>
      <div className="settings-list">
        <PreferenceRow label="Goals" value={goals.join(", ")} onEdit={onEditGoals} />
        <PreferenceRow label="Diet" value={diet} onEdit={onEditDiet} />
        <PreferenceRow label="Avoid" value={allergens.length ? allergens.join(", ") : "None"} onEdit={onEditDiet} />
        <PreferenceRow label="Household" value={`${household} people`} onEdit={onEditHousehold} />
        <PreferenceRow label="Budget" value={budget} onEdit={onEditHousehold} />
        <PreferenceRow label="Busy-day meals" value={`${timeLimit} min or less`} onEdit={onEditHousehold} />
        <PreferenceRow label="Pantry items" value="" onEdit={onEditPantry} />
      </div>
      <section className="insight-card">
        <ShieldCheck size={19} />
        <div>
          <h3>Privacy Notice</h3>
          <p>This prototype stores preferences only in local state during the demo session.</p>
        </div>
      </section>
      <button className="secondary-action" style={{ marginTop: 16 }} onClick={onSignOut}>
        <LogOut size={16} />
        Sign Out
      </button>
    </AppScreen>
  );
}

function AppScreen({ children, active, onHome, onSearch, onSaved, onPlan, onProfile }: { children: React.ReactNode; active: "home" | "search" | "saved" | "plan" | "profile"; onHome: () => void; onSearch: () => void; onSaved: () => void; onPlan: () => void; onProfile: () => void }) {
  return (
    <div className="screen-shell">
      <div className="screen padded-screen with-nav">
        {children}
      </div>
      <BottomNav active={active} onHome={onHome} onSearch={onSearch} onSaved={onSaved} onPlan={onPlan} onProfile={onProfile} />
    </div>
  );
}

function SetupShell({ title, stepIndex, stepTotal, heading, body, children, onBack, onNext, nextLabel = "Continue", nextDisabled = false }: { title: string; stepIndex: number; stepTotal: number; heading: string; body: string; children: React.ReactNode; onBack: () => void; onNext: () => void; nextLabel?: string; nextDisabled?: boolean }) {
  return (
    <div className="screen padded-screen setup-screen">
      <TopBar title={title} onBack={onBack} rightNode={<Dots current={stepIndex} total={stepTotal} />} />
      <div className="section-intro">
        <span className="eyebrow">Setup</span>
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      {children}
      <button className="primary-action docked-action" onClick={onNext} disabled={nextDisabled}>{nextLabel}</button>
    </div>
  );
}

function TextField({ icon, value, onChange, label, type = "text", placeholder }: { icon: React.ReactNode; value: string; onChange: (value: string) => void; label: string; type?: string; placeholder?: string }) {
  return (
    <label className="field">
      {icon}
      <input value={value} onChange={(event) => onChange(event.target.value)} type={type} aria-label={label} placeholder={placeholder ?? label} />
    </label>
  );
}

function ChipGrid({ items, selected, onToggle, radio = false }: { items: string[]; selected: string[]; onToggle: (item: string) => void; radio?: boolean }) {
  return (
    <div className="chip-grid">
      {items.map((item) => {
        const active = selected.includes(item);
        return (
          <button key={item} className={active ? "selected" : ""} onClick={() => onToggle(item)} aria-pressed={active} role={radio ? "radio" : "checkbox"}>
            {active ? <Check size={15} /> : null}
            {item}
          </button>
        );
      })}
    </div>
  );
}

function RecipeStack({ recipesToShow, onRecipe, savedIds, onSave }: { recipesToShow: Recipe[]; onRecipe: (id: string) => void; savedIds?: string[]; onSave?: (id: string) => void }) {
  return (
    <div className="recipe-stack">
      {recipesToShow.map((recipe) => {
        const isSaved = savedIds?.includes(recipe.id);
        return (
          <div className="recipe-card" key={recipe.id}>
            <button className="recipe-card-body" onClick={() => onRecipe(recipe.id)}>
              <span className="recipe-card-media">
                <img src={recipe.image} alt="" />
              </span>
              <div>
                <div className="card-line"><BadgeCheck size={13} /> Verified · {recipe.meal}{isSaved && savedIds ? <span className="card-saved-badge">Saved</span> : null}</div>
                <h4>{recipe.title}</h4>
                <p>{recipe.subtitle}</p>
                <span><Clock3 size={13} /> {recipe.time} min</span>
                <span><Flame size={13} /> {recipe.kcal} cal</span>
                <span><Leaf size={13} /> {recipe.fiber}g fiber</span>
              </div>
            </button>
            {onSave && (
              <button className={`card-save-btn${isSaved ? " active" : ""}`} onClick={() => onSave(recipe.id)} aria-label={isSaved ? "Remove from saved" : "Save recipe"}>
                <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function TopBar({ title, onBack, rightNode }: { title: string; onBack: () => void; rightNode?: React.ReactNode }) {
  return (
    <header className="top-bar">
      <button onClick={onBack} aria-label="Back"><ArrowLeft size={18} /></button>
      <span>{title}</span>
      <span className="top-bar-right" aria-hidden={!rightNode}>{rightNode}</span>
    </header>
  );
}

function TopTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <header className="top-title">
      <span>{icon}</span>
      <h1>{title}</h1>
    </header>
  );
}

function BottomNav({ active, onHome, onSearch, onSaved, onPlan, onProfile }: { active: "home" | "search" | "saved" | "plan" | "profile"; onHome: () => void; onSearch: () => void; onSaved: () => void; onPlan: () => void; onProfile: () => void }) {
  const items = [
    { id: "home", label: "Home", icon: Home, action: onHome },
    { id: "search", label: "Search", icon: Search, action: onSearch },
    { id: "saved", label: "Saved", icon: Heart, action: onSaved },
    { id: "plan", label: "Plan", icon: ShoppingBasket, action: onPlan },
    { id: "profile", label: "You", icon: UserRound, action: onProfile },
  ] as const;

  return (
    <nav className={`bottom-nav bottom-nav-${active}`} aria-label="Primary navigation">
      {items.map(({ id, label, icon: Icon, action }) => (
        <button key={id} className={active === id ? "active" : ""} onClick={action} aria-current={active === id ? "page" : undefined}>
          <Icon size={18} />
          {label}
        </button>
      ))}
    </nav>
  );
}

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
    </div>
  );
}

function SectionHeading({ title, action, meta, onAction }: { title: string; action?: string; meta?: string; onAction?: () => void }) {
  return (
    <div className="section-heading">
      <h3>{title}</h3>
      {action && onAction ? <button onClick={onAction}>{action}</button> : <span>{meta}</span>}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Stepper({ value, onMinus, onPlus, label }: { value: number; onMinus: () => void; onPlus: () => void; label: string }) {
  return (
    <div className="stepper" aria-label={label}>
      <button onClick={onMinus} aria-label={`Decrease ${label}`}><Minus size={16} /></button>
      <strong>{value}</strong>
      <button onClick={onPlus} aria-label={`Increase ${label}`}><Plus size={16} /></button>
    </div>
  );
}

function ControlCard({ title, body, children, stacked = false }: { title: string; body: string; children: React.ReactNode; stacked?: boolean }) {
  return (
    <section className={`control-card${stacked ? " stacked" : ""}`}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      {children}
    </section>
  );
}

function EmptyState({ title, body, action, onAction }: { title: string; body: string; action: string; onAction: () => void }) {
  return (
    <section className="empty-state">
      <BookOpenCheck size={24} />
      <h3>{title}</h3>
      <p>{body}</p>
      <button className="secondary-action" onClick={onAction}>{action}</button>
    </section>
  );
}

function SuccessCard({ title, body }: { title: string; body: string }) {
  return (
    <section className="success-card">
      <BadgeCheck size={18} />
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </section>
  );
}

function InlineAlert({ text }: { text: string }) {
  return (
    <div className="inline-alert">
      <AlertTriangle size={16} />
      {text}
    </div>
  );
}

function VerifiedLine({ recipe }: { recipe: Recipe }) {
  return (
    <div className="verified-line">
      <BadgeCheck size={16} />
      Verified by {recipe.verifiedBy}, {recipe.credential}
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip">
      <ShieldCheck size={18} />
      <div>
        <h3>Why these meals?</h3>
        <p>Avora shows nutrition, reviewer credentials, and allergen flags before you choose a recipe.</p>
      </div>
    </section>
  );
}

function HeroImage({ image, rounded }: { image: string; rounded?: boolean }) {
  return (
    <div className={`auth-hero${rounded ? " auth-hero-rounded" : ""}`}>
      <img src={image} alt="Fresh whole food meal" />
    </div>
  );
}

function Dots({ current, total }: { current: number; total: number }) {
  return (
    <div className="dots" aria-label={`Step ${current + 1} of ${total}`}>
      {Array.from({ length: total }, (_, index) => <span key={index} className={index === current ? "active" : ""} />)}
    </div>
  );
}

function PreferenceRow({ label, value, onEdit }: { label: string; value: string; onEdit?: () => void }) {
  return (
    <article>
      <span>{label}</span>
      <div className="preference-right">
        <strong>{value || "None set"}</strong>
        {onEdit && <button className="edit-link" onClick={onEdit}>Edit</button>}
      </div>
    </article>
  );
}

function Toast({ message }: { message: string }) {
  return (
    <div className="toast" role="alert" aria-live="polite">
      <Check size={15} />
      {message}
    </div>
  );
}

function AppLogo() {
  return (
    <div className="app-logo">
      <span><img src={avoraIconLight} alt="" /></span>
      Avora
    </div>
  );
}

function formatQty(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}
