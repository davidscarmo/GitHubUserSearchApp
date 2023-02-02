import React from "react";
import { useTheme } from "../../hooks/useTheme";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={() => toggleTheme()}>{theme} </button>
    </div>
  );
};
