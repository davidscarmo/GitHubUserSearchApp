import React, { useState } from "react";
import { SearchButton } from "./searchButton/searchButton.component";
import styles from "./searchBar.module.scss";
import iconSearch from "../../assets/icons/iconSearch.svg";
import { useRecoilState } from "recoil";
import { themeState } from "../../atoms/themeState";
import { getGitHubUserProfile } from "../../services/github/github.service";
import { SearchBarPropsInterface } from "./searchButton.interface";
export const SearchBar: React.FC<SearchBarPropsInterface> = ({
  setUserInfoData,
}) => {
  const [theme] = useRecoilState(themeState);
  const [username, setUsername] = useState("");
  const [noResults, setNoResults] = useState(false)
  const getUserGitHubInfoData = async () => {
    try {
      if (noResults) setNoResults(false)

      const userInfoData = await getGitHubUserProfile(username);
      setUserInfoData(userInfoData);
    } catch (error) {
      setUserInfoData({});
      setNoResults(true)
    }
  };

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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {noResults ? <span className={styles.noResults}>No results</span> : null}
      <SearchButton getGitHubUserProfile={() => getUserGitHubInfoData()} />
    </div>
  );
};
