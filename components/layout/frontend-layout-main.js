// react
import React, { Fragment } from "react";
// material
import { Box } from "@material-ui/core";

// import
import Nav from "../nav";
import Footer from "../footer";

function FrontendLayoutMain(props) {
  return (
    <Fragment>
      <Box component="header">
        <Nav />
      </Box>

      <Box component="main">{props.children}</Box>

      <Box component="footer">
        <Footer />
      </Box>
    </Fragment>
  );
}

export default FrontendLayoutMain;
