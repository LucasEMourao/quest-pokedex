import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

function ButtonThemeContext() {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext)
  return (
    <ThemeSwitcher>
      <button onClick={toggleTheme}>
         {isDarkMode ? '🌙' : '💡'}
      </button>
    </ThemeSwitcher>
  )
}

export default ButtonThemeContext

const ThemeSwitcher = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;

  button {
    border: none;
    font-size: 35px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;
