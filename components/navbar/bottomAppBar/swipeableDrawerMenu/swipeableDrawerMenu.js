import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

// import
import NavList from "./navList";

const useStyles = makeStyles((theme) => ({
  navListWrapper: {
    width: theme.spacing(32),
  },
}));

function SwipeableDrawerMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={state}
          onClose={() => toggleDrawer(false)}
          onOpen={() => {}}
        >
          <Box className={classes.navListWrapper}>
            <NavList toggledrawer={toggleDrawer} {...props} />
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
export default SwipeableDrawerMenu;
