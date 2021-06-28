// react
import React, { Fragment } from "react";
// material
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import
import AppBar from "./appBar/appBar";
import BottomAppBar from "./bottomAppBar/bottomAppBar";
function Navbar() {
  // navbar change in breakpoints
  const downLg = "(max-width:1279.95px)";
  const matches = useMediaQuery(downLg);
  let Navbar = matches ? BottomAppBar : AppBar;
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}

export default Navbar;
