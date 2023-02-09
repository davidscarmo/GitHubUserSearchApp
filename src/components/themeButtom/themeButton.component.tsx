import styles from "./themeButton.module.scss";

import { useTheme } from "../../hooks/useTheme";
import darkIconTheme from "../../assets/icons/iconMoon.svg";
import lightIconTheme from "../../assets/icons/iconSun.svg";
export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  const formattedThemeName = nextTheme.toUpperCase();

  const iconThemeUrl = nextTheme === "dark" ? darkIconTheme : lightIconTheme;

  return (
    <>
      <button className={styles.container} onClick={() => toggleTheme()}>
        <span>{formattedThemeName}</span>
        <img src={iconThemeUrl} alt={`${theme} symbol`} />
      </button>
    </>
  );
};
