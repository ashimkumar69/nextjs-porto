// react
import React, { Fragment } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import {
  themeDarkAction,
  themeLightAction,
} from "../../../reduxStore/actions/index";

// nextjs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// material
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Grid from "@material-ui/core/Grid";

// import
import clsx from "clsx";
import { useLoaded } from "../../../hooks/loaded";
import AppMenu from "./menu";

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

function Nav(props) {
  // redux
  const dispatch = useDispatch();

  // nextjs
  const router = useRouter();

  // load component cliend site
  const loaded = useLoaded();

  // theme color
  const isThemeLight = useSelector((state) => state.theme.themeLight);
  const changeThemeHandler = () => {
    isThemeLight ? dispatch(themeDarkAction()) : dispatch(themeLightAction());
  };

  return (
    <Fragment>
      <AppBar position="fixed" component="div">
        <Container maxWidth="lg">
          <Toolbar variant="dense" disableGutters>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
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
              </Grid>
              <Grid item>
                <AppMenu />
              </Grid>
              <Grid item>
                <Box>
                  <Button color="inherit" onClick={() => router.push("/login")}>
                    Login
                  </Button>

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
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="home" className={clsx("back-to-top-anchor")} />
    </Fragment>
  );
}

export default Nav;
