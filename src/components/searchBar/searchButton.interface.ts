import { UserInfoDataInterface } from "./../../pages/home/home.interface";
export interface SearchBarPropsInterface {
  setUserInfoData: React.Dispatch<React.SetStateAction<UserInfoDataInterface | {}>>;
}
