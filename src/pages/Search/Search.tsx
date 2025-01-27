import { Card } from "../../ui/Card/Card";
import { List } from "../../ui/List/List";
import { useCallback, useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { fetchCocktailsByName } from "../../api/ServiceApi";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../ui/Loading/Loading";
import { ErrorMsg } from "../../ui/ErrorMsg/ErrorMsg";

export const Search = () => {
  const { searchValue } = useSearchContext();
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

  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;

  return (
    <List>
      {data?.map((item) => (
        <Card
          key={item.idDrink}
          id={item.idDrink}
          title={item.strDrink}
          imgSrc={item.strDrinkThumb}
        />
      ))}
    </List>
  );
};
