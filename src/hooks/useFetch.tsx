/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { CocktailType } from "../types";

interface IProps {
  requestFn: () => Promise<AxiosResponse<any, any>>;
}

export const useFetch = ({ requestFn }: IProps) => {
  const [data, setData] = useState<CocktailType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validationResponse = (response: AxiosResponse<any, any>) => {
    if (typeof response.data === "object" && response.data !== null) {
      if ("drinks" in response.data) {
        if (Array.isArray(response.data.drinks)) {
          setData(response.data.drinks);
        } else {
          setData([]);
        }
      } else {
        setData([]);
      }
    } else if (response.data === "") {
      setData([]);
    } else {
      throw new Error("Unexpected response");
    }
  };

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const response = await requestFn();
      if (response.status === 200) {
        validationResponse(response);
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
