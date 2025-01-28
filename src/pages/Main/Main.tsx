import { useEffect, useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchAlcoholicCocktails } from "../../api/ServiceApi";
import { Card } from "../../ui/Card/Card";
import { List } from "../../ui/List/List";
import { Loading } from "../../ui/Loading/Loading";
import { ErrorMsg } from "../../ui/ErrorMsg/ErrorMsg";
import { NoData } from "../../ui/NoData/NoData";
import useLocalStorage from "../../hooks/useLocalStorage";
import fallbackImgSrc from "../../assets/fallback.png";

export const Main = () => {
  const { storedValue } = useLocalStorage();
  const { data, errorMsg, isLoading, getData } = useFetch({
    requestFn: fetchAlcoholicCocktails,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  const mergedData = useMemo(
    () => [...data, ...storedValue],
    [data, storedValue]
  );

  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;
  if (!mergedData.length) return <NoData />;

  return (
    <main>
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
    </main>
  );
};
