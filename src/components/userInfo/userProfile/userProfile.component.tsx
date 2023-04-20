import styles from "./userProfile.module.scss";

import octocatImage from "../../../assets/images/octocat.svg";
import { UserProfileProps } from "./userProfile.interface";
export const UserProfile: React.FC<UserProfileProps> = ({ avatarURL, description, joined, name, username }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short'  }).replace('.', ' ');
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const year = date.getFullYear();
    return `${day} ${capitalizedMonth} ${year}`;
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.userProfileInfoContainer}>
        <div className={styles.imageContainer}>
          <img src={avatarURL} alt="" />
        </div>
        <div className={styles.profileInfoContainer}>
          <div className={styles.infoContainer}>
            <h1>{name ? name : '---'}</h1>
            <a>{username ? `@${username}` : '---'}</a>
          </div>
          <div className={styles.joinedContainer}>
            <p>{joined ? `Joined ${formatDate(joined)}` : null}</p>
          </div>
        </div>
      </div>
      <div className={styles.bioContainer}>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};
