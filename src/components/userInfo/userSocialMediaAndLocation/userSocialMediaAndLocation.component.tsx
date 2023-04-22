import styles from "./userSocialMediaAndLocation.module.scss";
import locationIcon from "../../../assets/icons/iconLocation.svg";
import companyIcon from "../../../assets/icons/iconCompany.svg";
import webSiteIcon from "../../../assets/icons/iconWebsite.svg";
import twitterIcon from "../../../assets/icons/iconTwitter.svg";
import { UserSocialMediaPropsInterface } from "./userSocialMediaAndLocation.interface";


export const UserSocialMediaAndLocation: React.FC<UserSocialMediaPropsInterface> = ({ companyName, location, twitterUsername, website }) => {
  const userSocialMediaAndLocationData = [
    {
      id: 'location',
      image: locationIcon,
      description: location,
    },
    {
      id: 'website',
      image: webSiteIcon,
      description: website,
    },
    {
      id: 'twitter',
      image: twitterIcon,
      description: twitterUsername,
    },
    {
      id: 'companyName',
      image: companyIcon,
      description: companyName
    },
  ];
  return (
    <div className={styles.container}>
      {userSocialMediaAndLocationData.map((socialMediaAndLocation) => {
        const description = socialMediaAndLocation.description
          ? socialMediaAndLocation.description
          : "Not Available";

        return (
          <div className={styles.linkContainer} key={socialMediaAndLocation.id}>
            <div className={styles.imageContainer}>
              <img
                src={socialMediaAndLocation.image}
                className={styles.image}
                alt=" "
              />
            </div>
            <div className={styles.linkContent}>
              <a>{description}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
