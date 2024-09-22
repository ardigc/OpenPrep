import { TupperInfo } from '@/types/types';

// Sample object with dummy tupper data
const tupperInfo: TupperInfo = {
  '1234': {
    recipe: 'Grilled chicken with quinoa and vegetables',
    kcal: 4500,
    proteins: 35,
    fats: 15,
    carbs: 400,
    freezing_date: '2024-09-20',
  },
  '5678': {
    recipe: 'Tuna salad with whole-wheat pasta and avocado',
    kcal: 520,
    proteins: 30,
    fats: 25,
    carbs: 50,
    freezing_date: '2024-09-21',
  },
  '9101': {
    recipe: 'Spinach omelette with roasted potatoes',
    kcal: 380,
    proteins: 18,
    fats: 10,
    carbs: 45,
    freezing_date: '2024-09-19',
  },
  '1121': {
    recipe: 'Baked salmon with brown rice and broccoli',
    kcal: 600,
    proteins: 40,
    fats: 20,
    carbs: 55,
    freezing_date: '2024-09-22',
  },
};

export const getTupperInfo = async (tupperID: string) => {
  const tupper = tupperInfo[tupperID];
  return tupper;
};
