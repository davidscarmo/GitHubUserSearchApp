import { UserInfoDataInterface } from './../../pages/home/home.interface'
export interface SearchBarPropsInterface {
  setUserInfoData: React.Dispatch<React.SetStateAction<UserInfoDataInterface>>
}

export enum LoadingSearchBarStatusEnum {
  idle = 'IDLE',
  processing = 'PROCESSING',
  finished = 'FINISHED',
}
