// react
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import {
  themeDarkAction,
  themeLightAction,
} from "../../../reduxStore/actions/index";

// material
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

// import
import AccountMenu from "./accountMenu";
import SearchMenu from "./searchMenu";
import SwipeableDrawerMenu from "./swipeableDrawerMenu/swipeableDrawerMenu";
import { useLoaded } from "../../../hooks/loaded";

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

const TopAppBarToolbar = withStyles(() => ({
  root: {
    justifyContent: "center",
  },
}))(Toolbar);

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar() {
  // redux
  const dispatch = useDispatch();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  // load component client site
  const loaded = useLoaded();

  // theme color
  const isThemeLight = useSelector((state) => state.theme.themeLight);
  const changeThemeHandler = () => {
    isThemeLight ? dispatch(themeDarkAction()) : dispatch(themeLightAction());
  };

  return (
    <React.Fragment>
      {/* top appbar */}

      <AppBar
        position="static"
        color="primary"
        id="home"
        className="back-to-top-anchor"
      >
        <TopAppBarToolbar>
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
        </TopAppBarToolbar>
      </AppBar>

      {/* bottom appbar */}
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <SwipeableDrawerMenu />

          <div className={classes.grow} />
          <SearchMenu />
          {auth && <AccountMenu />}
          <IconButton
            edge="end"
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
