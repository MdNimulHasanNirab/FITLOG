const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

// Get Today's Plan
export function getPlan() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(PLAN_KEY)) || [];
  } catch {
    return [];
  }
}

// Save Today's Plan
export function savePlan(plan) {
  if (typeof window === "undefined") return;

  localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
}

// Get Saved Workouts
export function getSaved() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
  } catch {
    return [];
  }
}

// Save Saved Workouts
export function saveSaved(saved) {
  if (typeof window === "undefined") return;

  localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
}