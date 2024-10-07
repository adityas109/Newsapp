import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../providers/theme/ThemeContext";

const ThemeButton = () => {
  const { dispatch, dark } = useContext(ThemeContext);

  const handleThemeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <button
      className={
        dark ? "btn btn-sm btn-dark" : "btn btn-sm btn-warning text-light"
      }
      id="themeBtn"
      onClick={handleThemeChange}
    >
      {dark ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeButton;
