import styles from "./userSocialMediaAndLocation.module.scss";
import locationIcon from "../../../assets/icons/iconLocation.svg";
import companyIcon from "../../../assets/icons/iconCompany.svg";
import webSiteIcon from "../../../assets/icons/iconWebsite.svg";
import twitterIcon from "../../../assets/icons/iconTwitter.svg";

const userSocialMediaAndLocationData = [
  {
    image: locationIcon,
    description: "São Paulo - SP",
  },
  {
    image: webSiteIcon,
    description: "São Paulo - SP",
  },
  {
    image: twitterIcon,
    description: "",
  },
  {
    image: companyIcon,
    description: "@github",
  },
];
export const UserSocialMediaAndLocation = () => {
  return (
    <div className={styles.container}>
      {userSocialMediaAndLocationData.map((socialMediaAndLocation) => {
        const description = socialMediaAndLocation.description
          ? socialMediaAndLocation.description
          : "Not Available";

        return (
          <div className={styles.linkContainer}>
            <div className={styles.imageContainer}>
              <img
                src={socialMediaAndLocation.image}
                className={styles.image}
                alt=""
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
