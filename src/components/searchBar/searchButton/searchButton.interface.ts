import { LoadingSearchBarStatusEnum } from "../searchButton.interface";

export interface SearchButtonPropsInterface {
  getGitHubUserProfile: () => void;
  loading: {
    status: LoadingSearchBarStatusEnum;
  };
}
