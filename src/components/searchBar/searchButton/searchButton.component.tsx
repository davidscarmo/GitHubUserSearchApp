import React from "react";
import { SearchButtonPropsInterface } from "./searchButton.interface";
import styles from "./searchButton.module.scss";
import { Loading } from "../../loading/loading.component";
import { LoadingSearchBarStatusEnum } from "../searchButton.interface";
export const SearchButton: React.FC<SearchButtonPropsInterface> = ({
  getGitHubUserProfile,
  loading
}) => {
  return (
    <button className={styles.container} onClick={getGitHubUserProfile} disabled={loading.status === LoadingSearchBarStatusEnum.processing}>
      {loading.status !== LoadingSearchBarStatusEnum.processing ? 'Search' :
        <Loading />}
    </button>
  );
};
