import { useEffect, useState } from 'react'
import { SearchBar } from '../../components/searchBar/searchBar.component'
import { TopBar } from '../../components/topbar/topbar.component'
import { UserInfo } from '../../components/userInfo/userInfo.component'
import { UserInfoDataInterface } from './home.interface'
import styles from './home.module.scss'
export const Home = () => {
  const [userInfoData, setUserInfoData] = useState<UserInfoDataInterface>(
    {} as UserInfoDataInterface
  )

  return (
    <div className={styles.container}>
      <TopBar />
      <SearchBar setUserInfoData={setUserInfoData} />
      <UserInfo userInfoProps={userInfoData} />
    </div>
  )
}
