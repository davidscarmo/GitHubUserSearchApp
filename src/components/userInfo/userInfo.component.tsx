import React from "react";
import { UserGitStats } from "./userGitStats/userGitStats.component";
import styles from "./userInfo.module.scss";
import { UserProfile } from "./userProfile/userProfile.component";
import { UserSocialMediaAndLocation } from "./userSocialMediaAndLocation/userSocialMediaAndLocation.component";
import { UserInfoPropsInterface } from "./userInfo.interface";
export const UserInfo: React.FC<UserInfoPropsInterface> = ({ userInfoProps }) => {

  const { avatar_url, bio, name, login, followers, following, public_repos, twitter_username, created_at, company, blog, location } = userInfoProps;
  return (
    <div className={styles.container}>
      <UserProfile avatarURL={avatar_url} description={bio} name={name} username={login} joined={created_at} />
      <div className={styles.userGitStatsContainer}>
        <UserGitStats followers={followers} following={following} repos={public_repos} />
      </div>
      <UserSocialMediaAndLocation location={location} twitterUsername={twitter_username} companyName={company} website={blog}
      />
    </div>
  );
};
