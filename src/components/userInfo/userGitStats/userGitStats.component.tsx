import React from "react";
import styles from "./userGitStats.module.scss";
const gitStatsData = [
  { title: "Repos", content: "8" },
  { title: "Followers", content: "3938" },
  { title: "Following", content: "9" },
];
export const UserGitStats = () => {
  return (
    <div className={styles.container}>
      {gitStatsData.map((gitStatsData) => {
        return (
          <div className={styles.statContainer}>
            <h2>{gitStatsData.title}</h2>
            <p>{gitStatsData.content}</p>
          </div>
        );
      })}
    </div>
  );
};
