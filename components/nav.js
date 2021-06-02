// react
import React, { Fragment } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// material
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, Container, IconButton } from "@material-ui/core";
import { Brightness4, Brightness7 } from "@material-ui/icons";

// import
import { THEME_DARK, THEME_LIGHT } from "../reduxStore/types/index";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function Nav() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const isThemeLight = useSelector((state) => state.theme.themeLight);
  const changeThemeHandler = () => {
    isThemeLight
      ? dispatch({ type: THEME_DARK })
      : dispatch({ type: THEME_LIGHT });
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My Portfolio
            </Typography>
            <Button variant="text" color="inherit">
              Login
            </Button>

            <IconButton color="inherit" onClick={changeThemeHandler}>
              {isThemeLight ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}

export default Nav;
