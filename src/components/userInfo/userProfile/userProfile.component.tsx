import styles from "./userProfile.module.scss";

import octocatImage from "../../../assets/images/octocat.svg";
export const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={octocatImage} alt="" />
      </div>
      <div className={styles.profileInfoContainer}>
        <div className={styles.infoContainer}>
          <h1>The Octocat</h1>
          <a>@octocat</a>
        </div>
        <div className={styles.joinedContainer}>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
    </div>
  );
};
