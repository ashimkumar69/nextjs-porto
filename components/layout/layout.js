// react
import React from "react";

function Layout(props) {
  const { children, router } = props;

  if (router.pathname.startsWith("/dashboard")) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return <React.Fragment>{children}</React.Fragment>;
}

export default Layout;
