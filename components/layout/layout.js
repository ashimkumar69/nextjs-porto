// react
import React from "react";

// import
import FrontendLayoutMain from "./frontend/layoutMain";

function Layout(props) {
  const { Component, children, router } = props;
  const Layout = Component.Layout ? Component.Layout : FrontendLayoutMain;

  if (router.pathname.startsWith("/dashboard")) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return <Layout>{children}</Layout>;
}

export default Layout;
