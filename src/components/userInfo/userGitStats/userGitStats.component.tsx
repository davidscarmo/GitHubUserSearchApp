import React from 'react'
import styles from './userGitStats.module.scss'
import { UserGitStatsPropsInterface } from './userGitStats.interface'

export const UserGitStats: React.FC<UserGitStatsPropsInterface> = ({
  followers,
  following,
  repos,
}) => {
  const gitStatsData = [
    { title: 'Repos', content: repos ?? '---' },
    { title: 'Followers', content: followers ?? '---' },
    { title: 'Following', content: following ?? '---' },
  ]
  return (
    <div className={styles.container}>
      {gitStatsData.map((gitStatsData) => {
        return (
          <div className={styles.statContainer}>
            <h2>{gitStatsData.title}</h2>
            <p>{gitStatsData.content}</p>
          </div>
        )
      })}
    </div>
  )
}
