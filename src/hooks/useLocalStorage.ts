import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { CockTailDetailsType, CocktailType,  } from "../types";


type StoreCocktailType = {
    cocktail: CockTailDetailsType,
    successFn?: () => void,
    failedFn?: () => void
}

const KEY_STORED = 'drinks';

function useLocalStorage(initialValue = []) {
  const [storedValue, setStoredValue] = useState<(CockTailDetailsType | CocktailType)[]>(() => {
    try {
      const item = localStorage.getItem(KEY_STORED);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      toast('Error reading from localStorage', {
        type: "error"}
    )
    console.error(error);
      return initialValue;
    }
  });

  const getFilteredCocktailsById = useCallback((id: string) => {
    return storedValue.filter(cocktail => cocktail.idDrink === id);
  }, [storedValue]);

  const getFilteredCocktailsByName = useCallback((filter: string) => {
    return storedValue.filter(cocktail => cocktail.strDrink?.includes(filter));
  }, [storedValue]);

  const storeCocktail = ({cocktail, successFn, failedFn }: StoreCocktailType) => {
    try {
      setStoredValue(prev => [...prev, cocktail]);
      localStorage.setItem(KEY_STORED, JSON.stringify([...storedValue, cocktail]));
      toast('Success writing to localStorage', {
        type: "success"})
        successFn?.();
    } catch (error) {
        toast('Error writing to localStorage', {
          type: "error"}
        )
        failedFn?.();
        console.error(error);
    }
  };

  return {storedValue, storeCocktail, getFilteredCocktailsByName, getFilteredCocktailsById} as const;
}

export default useLocalStorage;