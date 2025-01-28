import { Card } from "../../ui/Card/Card";
import { List } from "../../ui/List/List";
import { useCallback, useEffect, useMemo } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { fetchCocktailsByName } from "../../api/ServiceApi";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../ui/Loading/Loading";
import { ErrorMsg } from "../../ui/ErrorMsg/ErrorMsg";
import fallbackImgSrc from "../../assets/fallback.png";
import useLocalStorage from "../../hooks/useLocalStorage";
import { NoData } from "../../ui/NoData/NoData";

export const Search = () => {
  const { searchValue } = useSearchContext();
  const { getFilteredCocktailsByName } = useLocalStorage();
  const filetedCOcktails = useMemo(
    () => getFilteredCocktailsByName(searchValue),
    [getFilteredCocktailsByName, searchValue]
  );
  const memorizedFn = useCallback(
    () => fetchCocktailsByName(searchValue),
    [searchValue]
  );
  const { data, errorMsg, isLoading, getData } = useFetch({
    requestFn: memorizedFn,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  const mergedData = useMemo(
    () => [...data, ...filetedCOcktails],
    [data, filetedCOcktails]
  );

  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;
  if (!mergedData.length) return <NoData />;

  return (
    <List>
      {mergedData?.map((item) => (
        <Card
          key={item.idDrink}
          id={item.idDrink}
          title={item.strDrink}
          imgSrc={item.strDrinkThumb ?? fallbackImgSrc}
        />
      ))}
    </List>
  );
};
