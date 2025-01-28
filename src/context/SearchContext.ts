import { createContext, useContext } from "react";

interface SearchContextValue {
    searchValue: string;
    setSearchValue: (value: string) => void;
  }

export const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};