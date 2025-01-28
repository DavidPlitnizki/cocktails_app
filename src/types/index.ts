export type CocktailType = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
  };

  export type newCockTailInputs = {
    strCategory: string;
    strInstructions: string;
    strIngredient1: string;
  };

  export type CombinedCocktailType = CocktailType & newCockTailInputs;