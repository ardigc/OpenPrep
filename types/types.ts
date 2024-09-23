// Define the type for a Tupper
export interface Tupper {
  name: string;
  recipe: string;
  kcal: number;
  proteins: number; // in grams
  fats: number; // in grams
  carbs: number; // in grams
  freezing_date: string; // date format (YYYY-MM-DD)
}

// Define the type for the TupperInfo object
export interface TupperInfo {
  [key: string]: Tupper; // The key is a 4-digit number, the value is a Tupper object
}
