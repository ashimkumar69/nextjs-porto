// react
import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import { themeDarkAction, themeLightAction } from "../reduxStore/actions/index";

// material
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

// import
import { useLoaded } from "../hooks/loaded";

function ThemeIconButton() {
  // redux
  const dispatch = useDispatch();

  // load component client site
  const loaded = useLoaded();

  // theme color
  const isThemeLight = useSelector((state) => state.theme.themeLight);

  const changeThemeHandler = () => {
    isThemeLight ? dispatch(themeDarkAction()) : dispatch(themeLightAction());
  };

  return (
    <React.Fragment>
      <IconButton
        edge="end"
        aria-label="change theme color"
        color="inherit"
        onClick={changeThemeHandler}
      >
        {loaded && isThemeLight ? <Brightness6Icon /> : <BrightnessHighIcon />}
      </IconButton>
    </React.Fragment>
  );
}

export default ThemeIconButton;
