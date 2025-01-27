import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Details } from "../../ui/Details/Details";

export const CocktailDetails = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getCocktailDetails = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setDetails(data.drinks);
      }
    };
    getCocktailDetails();
  }, [id]);
  if (!details?.[0]) return null;

  return <Details details={details[0]} />;
};
