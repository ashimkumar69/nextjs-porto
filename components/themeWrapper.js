// react
import React from "react";

// redux
import { useSelector } from "react-redux";

// material
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

// import
import { themeLight, themeDark } from "../theme/theme";

function ThemeWrapper(props) {
  const isThemeLight = useSelector((state) => state.theme.themeLight);
  let theme = isThemeLight ? themeLight : themeDark;
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
