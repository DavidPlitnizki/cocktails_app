import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { Details } from "../../ui/Details/Details";
import { useFetch } from "../../hooks/useFetch";
import { getCocktailDetails } from "../../api/ServiceApi";
import { Loading } from "../../ui/Loading/Loading";
import { ErrorMsg } from "../../ui/ErrorMsg/ErrorMsg";
import useLocalStorage from "../../hooks/useLocalStorage";
import { NoData } from "../../ui/NoData/NoData";

export const CocktailDetails = () => {
  const { id = "" } = useParams();
  const { getFilteredCocktailsById } = useLocalStorage();
  const memorizedGetCocktailsFn = useCallback(
    () => getCocktailDetails(id),
    [id]
  );
  const localStoredCocktails = getFilteredCocktailsById(id);
  const { data, errorMsg, isLoading, getData } = useFetch({
    requestFn: memorizedGetCocktailsFn,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  const mergedData = useMemo(
    () => [...data, ...localStoredCocktails],
    [data, localStoredCocktails]
  );

  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;
  if (!mergedData.length) return <NoData />;

  return mergedData[0] ? <Details details={mergedData[0]} /> : null;
};
