// react
import React, { Fragment } from "react";
// material
import { Box } from "@material-ui/core";

// import
import Footer from "../footer";

function AuthLayout(props) {
  return (
    <Fragment>
      <Box component="header">navbar</Box>

      <Box component="main">{props.children}</Box>

      <Box component="footer">
        <Footer />
      </Box>
    </Fragment>
  );
}

export default AuthLayout;
