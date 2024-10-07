import { useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialState = {
    dark: false,
  };

  // ThemeReducer
  const themeReducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
      return {
        ...state,
        dark: state.dark ? false : true,
      };
    }
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
