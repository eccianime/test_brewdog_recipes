export type Beer = {
  id: number;
  name: string;
  description: string;
  image_url?: string | null;
};

type ValueUnit = {
  value: number;
  unit: string;
};

type Ingredient = {
  name: string;
  amount: ValueUnit;
};

type HopIngredient = Ingredient & {
  add: string;
  attribute: string;
};

type BeerMethod = {
  mash_temp: [
    {
      temp: ValueUnit;
      duration: number | null;
    }
  ];
  fermentation: {
    temp: ValueUnit;
  };
  twist: null | string;
};

export type BeerDetails = Beer & {
  tagline: string;
  first_brewed: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: ValueUnit;
  boil_volume: ValueUnit;
  method: BeerMethod;
  ingredients: {
    malt: Ingredient[];
    hops: HopIngredient[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};
