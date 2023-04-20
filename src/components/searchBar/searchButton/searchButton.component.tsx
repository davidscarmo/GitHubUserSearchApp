import React from "react";
import { SearchButtonPropsInterface } from "./searchButton.interface";
import styles from "./searchButton.module.scss";
export const SearchButton: React.FC<SearchButtonPropsInterface> = ({
  getGitHubUserProfile,
}) => {
  return (
    <button className={styles.container} onClick={getGitHubUserProfile}>
      Search
    </button>
  );
};
