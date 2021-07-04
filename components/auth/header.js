// react
import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";

// store
import {
  themeDarkAction,
  themeLightAction,
} from "../../reduxStore/actions/index";
// nextjs
import Image from "next/image";
import Link from "next/link";
// material
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

// import
import { useLoaded } from "../../hooks/loaded";

const LogoButton = withStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  text: {
    padding: 0,
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function header(props) {
  const classes = useStyles();
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
      <AppBar position="static" component="div" elevation={0}>
        <Toolbar>
          <Box className={classes.root}>
            <Link href="/">
              <LogoButton component="a" disableRipple>
                <Image
                  src="/images/logo/logo-01.png"
                  alt="logo"
                  width={160}
                  height={30}
                />
              </LogoButton>
            </Link>
          </Box>
          <IconButton
            aria-label="change theme color"
            color="inherit"
            onClick={changeThemeHandler}
          >
            {loaded && isThemeLight ? (
              <Brightness6Icon />
            ) : (
              <BrightnessHighIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default header;
