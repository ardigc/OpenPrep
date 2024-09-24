export interface NutritionalInfo {
  recipe: string;
  kcal?: number;
  proteins?: number; // in grams
  fats?: number; // in grams
  carbs?: number; // in grams
  freezing_date?: string; // date format (YYYY-MM-DD)
}

export interface Tupper {
  name: string;
  info: NutritionalInfo;
}