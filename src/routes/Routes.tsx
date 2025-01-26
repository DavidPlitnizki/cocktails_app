import { CocktailDetails } from "../pages/CocktailDetails";
import { Main } from "../pages/Main";
import { Routes, Route } from "react-router";
import { NewCocktail } from "../pages/NewCocktail";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/details/:id" element={<CocktailDetails />} />
      <Route path="/new_cocktail" element={<NewCocktail />} />
    </Routes>
  );
};
