import React, { useEffect, useRef, useState } from "react";
import { SearchButton } from "./searchButton/searchButton.component";
import styles from "./searchBar.module.scss";
import iconSearch from "../../assets/icons/iconSearch.svg";
import { useRecoilState } from "recoil";
import { themeState } from "../../atoms/themeState";
import { getGitHubUserProfile } from "../../services/github/github.service";
import { LoadingSearchBarStatusEnum, SearchBarPropsInterface } from "./searchButton.interface";
import { Loading } from "../loading/loading.component";
export const SearchBar: React.FC<SearchBarPropsInterface> = ({
  setUserInfoData,
}) => {
  const [theme] = useRecoilState(themeState);
  const [username, setUsername] = useState("");
  const [noResults, setNoResults] = useState(false)
  const [loading, setLoading] = useState<{ status: LoadingSearchBarStatusEnum }>({ status: LoadingSearchBarStatusEnum.idle })
  const inputRef = useRef(null)
  const getUserGitHubInfoData = async () => {
    try {
      setLoading({ status: LoadingSearchBarStatusEnum.processing })
      if (noResults) setNoResults(false)

      const userInfoData = await getGitHubUserProfile(username);
      setUserInfoData(userInfoData);
    } catch (error) {
      setUserInfoData({
        avatar_url: null,
        bio: null,
        blog: null,
        company: null,
        followers: null,
        following: null,
        html_url: null,
        id: null,
        location: null,
        login: null,
        name: null,
        public_repos: null,
        twitter_username: null,
        created_at: null,
      })
      setNoResults(true)
    } finally {
      setLoading({ status: LoadingSearchBarStatusEnum.finished })
    }
  };

  const handleKeyBoardNavigation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && username.length > 0) {
      getUserGitHubInfoData()
      return
    }
  }
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
        onKeyDown={(e) => handleKeyBoardNavigation(e)}
      />
      {noResults ? <span className={styles.noResults}>No results</span> : null}
      <SearchButton getGitHubUserProfile={() => getUserGitHubInfoData()} loading={loading} />
    </div>
  );
};
