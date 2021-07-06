// react
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// material
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// import
import AccountMenu from "./accountMenu";
import SearchMenu from "./searchMenu";
import SwipeableDrawerMenu from "./swipeableDrawerMenu/swipeableDrawerMenu";
import ThemeIconButton from "../../themeIconButton";

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
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  return (
    <React.Fragment>
      {/* top appbar */}

      <AppBar
        position="static"
        color="primary"
        id="home"
        className="back-to-top-anchor"
        component="div"
      >
        <TopAppBarToolbar>
          <Link href="/">
            <LogoButton component="a" disableRipple>
              <Image
                src="/images/logo/footer-logo-01.png"
                alt="logo"
                width={160}
                height={30}
              />
            </LogoButton>
          </Link>
        </TopAppBarToolbar>
      </AppBar>

      {/* bottom appbar */}
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appBar}
        component="div"
      >
        <Toolbar>
          <SwipeableDrawerMenu />

          <div className={classes.grow} />
          <SearchMenu />
          {auth && <AccountMenu />}

          <ThemeIconButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
