import { ThemeButton } from "./components/themeButtom/themeButton.component";
import { RecoilRoot, useRecoilState } from "recoil";
import { useEffect } from "react";
import { themeState } from "./atoms/themeState";
import { Home } from "./pages/home/home.component";

function App() {
  const [theme] = useRecoilState(themeState);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.setAttribute("class", theme);
  }, []);

  return <Home />;
}

export default App;
