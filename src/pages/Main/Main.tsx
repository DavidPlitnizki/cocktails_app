import { useEffect } from "react";
import { Card } from "../../ui/Card/Card";
import { List } from "../../ui/List/List";
import { useFetch } from "../../hooks/useFetch";
import { fetchAlcoholicCocktails } from "../../api/ServiceApi";
import { Loading } from "../../ui/Loading/Loading";
import { ErrorMsg } from "../../ui/ErrorMsg/ErrorMsg";
import fallbackImgSrc from "../../assets/fallback.png";

export const Main = () => {
  const { data, errorMsg, isLoading, getData } = useFetch({
    requestFn: fetchAlcoholicCocktails,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;

  return (
    <main>
      <List>
        {data?.map((item) => (
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
