// react
import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// material
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

// import
import { themeLight, themeDark } from "../src/theme";

function ThemeWrapper(props) {
  const isThemeLight = useSelector((state) => state.theme.themeLight);
  const theme = isThemeLight ? themeLight : themeDark;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
