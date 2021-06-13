import { initialThemeFromLocalStorage } from "./theme";

const initialStateDefault = {
  theme: {
    themeLight: initialThemeFromLocalStorage,
  },
};

export default initialStateDefault;
