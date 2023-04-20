import axios from "axios";
import { GitHubProfileRequestResponseInterface } from "./github.interface";

export const getGitHubUserProfile = async (
  username: string
): Promise<GitHubProfileRequestResponseInterface> => {
  const { data } = await axios.get("https://api.github.com/users/" + username);
  return data;
};
