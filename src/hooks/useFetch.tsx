import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { CocktailType } from "../types";
import { AxiosResponse } from "axios";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestFn: () => Promise<AxiosResponse<any, any>>;
}

export const useFetch = ({ requestFn }: IProps) => {
  const [data, setData] = useState<CocktailType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const response = await requestFn();
      if (response.status === 200) {
        if ("drinks" in response.data && Array.isArray(response.data.drinks)) {
          setData(response.data.drinks);
        } else if ("drinks" in response.data) {
          setData([]);
        } else {
          throw new Error(response.data.drinks);
        }
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : typeof error === "string"
          ? error
          : "";
      setErrorMsg(msg);
      toast(msg);
    } finally {
      setIsLoading(false);
    }
  }, [requestFn]);

  return { data, errorMsg, isLoading, getData } as const;
};
