import { SearchBar } from "../../components/searchBar/searchBar.component";
import { TopBar } from "../../components/topbar/topbar.component";
import { UserInfo } from "../../components/userInfo/userInfo.component";
import styles from "./home.module.scss";
export const Home = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <SearchBar />
      <UserInfo />
    </div>
  );
};
