// react
import React, { Fragment } from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";

// material
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import
import AppMenu from "./menu";
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

function Nav() {
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
                  <Link href="/login">
                    <Button component="a" color="inherit">
                      Login
                    </Button>
                  </Link>
                  <ThemeIconButton />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="home" className="back-to-top-anchor" />
    </Fragment>
  );
}

export default Nav;
