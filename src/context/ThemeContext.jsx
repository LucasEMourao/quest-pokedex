import { createContext, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const LightTheme = {
  background: "#fff",
  color: "#000",
};

const DarkTheme = {
  background: "#000",
  color: "#fff",
  borderColor: "#fff",
};

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
