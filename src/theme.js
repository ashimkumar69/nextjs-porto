// material
import { createMuiTheme } from "@material-ui/core/styles";

export const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fd4766",
    },
    secondary: {
      main: "#7644ff",
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

export const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fd4766",
    },
    secondary: {
      main: "#7644ff",
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});
