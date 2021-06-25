// react
import React from "react";

// import
import FrontendLayoutMain from "./frontendLayoutMain";

function Layout(props) {
  const { Component, children } = props;
  const Layout = Component.Layout ? Component.Layout : FrontendLayoutMain;
  return <Layout>{children}</Layout>;
}

export default Layout;
