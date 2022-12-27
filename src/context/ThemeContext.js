import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

const ThemeContext = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("Dark-Mode", !dark);
  };

  useEffect(() => {
    if (dark) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const localDarkMode = JSON.parse(localStorage.getItem("Dark-Mode"));
    setDark(localDarkMode);
  }, []);

  const theme = { handleDarkMode };

  return (
    <div>
      <themeContext.Provider value={theme}>{children}</themeContext.Provider>
    </div>
  );
};

export default ThemeContext;
