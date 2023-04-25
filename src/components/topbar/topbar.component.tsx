import { ThemeButton } from '../themeButtom/themeButton.component'
import styles from './topbar.module.scss'

export const TopBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>devfinder</p>
      </div>
      <div className={styles.buttonContainer}>
        <ThemeButton />
      </div>
    </header>
  )
}
