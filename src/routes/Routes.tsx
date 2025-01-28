import { CocktailDetails } from "../pages/CocktailDetails/CocktailDetails";
import { Main } from "../pages/Main/Main";
import { Routes, Route } from "react-router";
import { NewCocktail } from "../pages/NewCocktail/NewCocktail";
import { NotFound } from "../pages/NotFound/NotFound";
import { Search } from "../pages/Search/Search";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/details/:id" element={<CocktailDetails />} />
      <Route path="/new_cocktail" element={<NewCocktail />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
