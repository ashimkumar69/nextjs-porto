// react
import React, { Fragment } from "react";

// material
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import
import AppBar from "./appBar/appBar";
import BottomAppBar from "./bottomAppBar/bottomAppBar";

function Navbar(props) {
  // navbar change in breakpoints
  const downLg = useMediaQuery("(max-width:1279.95px)");
  // let Navbar = downLg ? <BottomAppBar {...props} /> : <AppBar {...props} />;
  if (downLg) {
    return (
      <Fragment>
        <BottomAppBar {...props} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <AppBar {...props} />
      </Fragment>
    );
  }
}

export default Navbar;
