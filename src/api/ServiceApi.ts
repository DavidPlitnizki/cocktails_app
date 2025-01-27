import apiClient from "./ClientApi";

export const fetchAlcoholicCocktails = () => {
    return apiClient.get('/filter.php?a=Alcoholic');
};

export const fetchCocktailsByName = (name: string) => {
    return apiClient.get(`/search.php?s=${name}`);
};
