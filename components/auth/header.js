// react
import React from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";
// material
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// import
import ThemeIconButton from "../themeIconButton";

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
          <ThemeIconButton />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default header;
