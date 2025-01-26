import { CocktailDetails } from "../pages/CocktailDetails";
import { Main } from "../pages/Main";
import { Routes, Route } from "react-router";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path=":id" element={<CocktailDetails />} />
    </Routes>
  );
};
