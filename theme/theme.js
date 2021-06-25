// material
import { createMuiTheme } from "@material-ui/core/styles";

export const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fd4766",
    },
    secondary: {
      main: "#2A272A",
    },
  },
  typography: {
    fontFamily: "Raleway, Open Sans, sans-serif",
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 576,
  //     md: 768,
  //     lg: 992,
  //     xl: 1200,
  //   },
  // },
});

export const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fd4766",
    },
    secondary: {
      main: "#2A272A",
    },
  },
  typography: {
    fontFamily: "Raleway, Open Sans, sans-serif",
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 576,
  //     md: 768,
  //     lg: 992,
  //     xl: 1200,
  //   },
  // },
});
