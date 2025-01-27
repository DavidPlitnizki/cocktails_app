import { toast } from "react-toastify";
import { Card } from "../../ui/Card/Card";
import { List } from "../../ui/List/List";
import { useEffect, useState } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { fetchCocktailsByName } from "../../api/ServiceApi";

type CocktailType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export const Search = () => {
  const [data, setData] = useState<CocktailType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const { searchValue } = useSearchContext();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCocktailsByName(searchValue);
        console.log(response);
        if (response.status === 200) {
          if ("drinks" in response.data) {
            if (Array.isArray(response.data.drinks)) {
              setData(response.data.drinks);
            } else {
              throw new Error(response.data.drinks);
            }
          }
        }
      } catch (error) {
        const msg =
          error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : "";
        setIsError(msg);
        toast(msg);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchValue]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;

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
