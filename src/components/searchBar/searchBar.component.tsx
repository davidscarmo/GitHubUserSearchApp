import React from "react";
import { SearchButton } from "./searchButton/searchButton.component";
import styles from "./searchBar.module.scss";
import iconSearch from "../../assets/icons/iconSearch.svg";
import { useRecoilState } from "recoil";
import { themeState } from "../../atoms/themeState";
export const SearchBar = () => {
  const [theme] = useRecoilState(themeState);

  return (
    <div
      className={styles.container}
      style={
        theme === "light"
          ? {
              boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
            }
          : {}
      }
    >
      <div className={styles.imageContainer}>
        <img src={iconSearch} alt=" " />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Search GitHub username…"
      />
      <span className={styles.noResults}>No results</span>
      <SearchButton />
    </div>
  );
};
