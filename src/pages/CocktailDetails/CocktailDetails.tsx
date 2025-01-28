import { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { Details } from "../../ui/Details/Details";
import { useFetch } from "../../hooks/useFetch";
import { getCocktailDetails } from "../../api/ServiceApi";
import { Loading } from "../../ui/Loading/Loading";
import { ErrorMsg } from "../../ui/ErrorMsg/ErrorMsg";

export const CocktailDetails = () => {
  const { id } = useParams();
  const memorizedFn = useCallback(() => getCocktailDetails(id ?? ""), [id]);
  const { data, errorMsg, isLoading, getData } = useFetch({
    requestFn: memorizedFn,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;

  return data[0] ? <Details details={data[0]} /> : null;
};
