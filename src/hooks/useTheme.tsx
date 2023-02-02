import { useRecoilState } from "recoil";
import { themeState } from "../atoms/themeState";

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    localStorage.setItem("theme", nextTheme);

    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.setAttribute("class", nextTheme);
  };

  return { theme, toggleTheme };
};
