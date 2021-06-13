// react
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

// next
import Head from "next/head";

// import
import "../styles/globals.scss";
import FrontendLayoutMain from "../components/layout/frontend-layout-main";

import { Provider } from "react-redux";
import { useStore } from "../reduxStore/store";
import ThemeWrapper from "../components/themeWrapper";

function MyApp({ Component, pageProps }) {
  // redux
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Portfolio - My</title>

        <meta
          name="description"
          content="Portfolio - My is a single page landing page template"
        />
        <meta name="keywords" content="nextjs, material-ui, portfolio" />
        <meta name="author" content="ASK" />

        {/* google font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        {/* fav icon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <ThemeWrapper>
        <FrontendLayoutMain>
          <Component {...pageProps} />
        </FrontendLayoutMain>
      </ThemeWrapper>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
