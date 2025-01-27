import { useEffect, useState } from "react";
import { Card } from "../../ui/Card/Card";
import { List } from "../../ui/List/List";
import { fetchAlcoholicCocktails } from "../../api/ServiceApi";
import { toast } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";

type CocktailType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export const Main = () => {
  const [data, setData] = useState<CocktailType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAlcoholicCocktails();
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
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
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
    </ErrorBoundary>
  );
};
