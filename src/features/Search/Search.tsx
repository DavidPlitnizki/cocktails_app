import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchContext } from "../../context/SearchContext";
import { routesLinks } from "../../config";
import styles from "./Search.module.css";

export const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { setSearchValue } = useSearchContext();
  const { pathname } = useLocation();
  const timer = useRef(0);

  const debounceSearch = (val: string) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSearchValue(val);
      if (pathname !== routesLinks.search && val.length)
        navigate(routesLinks.search);
    }, 500);
  };

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceSearch(e.target.value);
  };

  const onKeyDownHandle = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      const val = event.currentTarget.getAttribute("value") ?? "";
      debounceSearch(val);
    }
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Cocktails..."
      onChange={onChangeHandle}
      onKeyDown={onKeyDownHandle}
      value={value}
    />
  );
};
