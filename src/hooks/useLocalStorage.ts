import { useCallback, useState } from "react";
import { CombinedCocktailType, newCockTailInputs } from "../types";
import { toast } from "react-toastify";

interface storeCocktail {
    cocktail: newCockTailInputs,
    successFn?: () => void,
    failedFn?: () => void
}

const KEY_STORED = 'drinks';

function useLocalStorage(initialValue = []) {
  const [storedValue, setStoredValue] = useState<Partial<CombinedCocktailType>[]>(() => {
    try {
      const item = localStorage.getItem(KEY_STORED);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      toast('Error reading from localStorage', {
        className:'error'}
    )
    console.error(error);
      return initialValue;
    }
  });

  const getFilteredCocktailsByName = useCallback((filter: string) => {
    return storedValue.filter(cocktail => cocktail.strDrink === filter);
  }, [storedValue]);

  const storeCocktail = ({cocktail, successFn, failedFn }: storeCocktail) => {
    try {
      setStoredValue(prev => [...prev, cocktail]);
      localStorage.setItem(KEY_STORED, JSON.stringify([...storedValue, cocktail]));
      toast('Success writing to localStorage', {
        className:'success'})
        successFn?.();
    } catch (error) {
        toast('Error writing to localStorage', {
            className:'error'}
        )
        failedFn?.();
        console.error(error);
    }
  };

  return {storedValue, storeCocktail, getFilteredCocktailsByName} as const;
}

export default useLocalStorage;