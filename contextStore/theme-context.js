import { createContext, useState } from "react";

const ThemeContext = createContext({
  themeMode: null,
  changeThemeMode: function () {},
});

export default ThemeContext;

export function ThemeContextProvider(props) {
  const [activeThemeMode, setActiveThemeMode] = useState(false);

  function changeThemeMode() {
    setActiveThemeMode((preState) => !preState);
  }

  const context = {
    themeMode: activeThemeMode,
    changeThemeMode: changeThemeMode,
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}
