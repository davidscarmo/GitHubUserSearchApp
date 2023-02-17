import React from "react";
import { UserGitStats } from "./userGitStats/userGitStats.component";
import styles from "./userInfo.module.scss";
import { UserProfile } from "./userProfile/userProfile.component";
export const UserInfo = () => {
  return (
    <div className={styles.container}>
      <UserProfile />
      <div className={styles.userGitStatsContainer}>
        <UserGitStats />
      </div>
    </div>
  );
};
