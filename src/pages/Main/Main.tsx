import { useEffect, useState } from "react";
import { Card } from "../../ui/Card";
import { List } from "../../ui/List";

type CocktailType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export const Main = () => {
  const [data, setData] = useState<CocktailType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );
      if (response.ok) {
        const data = await response.json();
        setData(data.drinks);
      }
    };
    getData();
  }, []);

  console.log("data: ", data);

  return (
    <main>
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
    </main>
  );
};
