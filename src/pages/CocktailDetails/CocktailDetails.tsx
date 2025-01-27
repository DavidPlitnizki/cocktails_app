import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        setDetails(data);
      }
    };
    getCocktailDetails();
  }, [id]);
  console.log(id);
  console.log(details);
  return <div>CocktailDetail: {id}</div>;
};
