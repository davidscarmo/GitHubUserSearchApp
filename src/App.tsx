import { ThemeButton } from "./components/themeButtom/themeButton.component";
import { RecoilRoot, useRecoilState } from "recoil";
import { useEffect } from "react";
import { themeState } from "./atoms/themeState";

function App() {
  const [theme] = useRecoilState(themeState);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.setAttribute("class", theme);
  }, []);

  return <ThemeButton />;
}

export default App;
