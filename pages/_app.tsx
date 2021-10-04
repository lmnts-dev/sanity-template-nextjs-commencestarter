import "../styles/index.css";
import Layout from "../components/Layout";
import { CMNC_Footer } from "../components/core/Footer";
import App, { AppContext, AppProps } from "next/app";
import { Queries } from "../constants/Queries";
import { getClient } from "../utils/sanity";
import { CMNC_ScrollDirection, CMNC_SiteConfig } from "../constants/Types";
import { CMNC_Navigation } from "../components/core/Navigation";
import React, { useEffect, useState } from "react";
import { Context } from "../components/core/Context";
import { GlobalStyle } from "../constants/styles/Global";

//@ts-ignore
import TagManager from "react-gtm-module";
import { Settings } from "../constants/site/Settings";

type CMNC_App = AppProps & {
  footerData: CMNC_Footer;
  navData: CMNC_Navigation;
  siteConfig: CMNC_SiteConfig;
};

const tagManagerArgs = {
  gtmId: Settings.gtmId,
};

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

function MyApp({
  Component,
  pageProps,
  footerData,
  navData,
  siteConfig,
}: CMNC_App) {
  const [scrollDirection, setScrollDirection] =
    useState<CMNC_ScrollDirection>("top");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  /**
   *
   * @name handleScroll
   *
   */
  const handleScroll = () => {
    checkScrollDirection();
    setScrollPosition(window.pageYOffset);
  };

  /**
   *
   * @name checkScrollDirectiion
   * @description: This is our function to log last scroll direction.
   *
   */
  const checkScrollDirection = () => {
    if (window.pageYOffset < 100) {
      if (scrollDirection != "top") {
        setScrollDirection("top");
      }
    } else {
      if (scrollPosition > window.pageYOffset) {
        if (scrollDirection != "up") {
          setScrollDirection("up");
        }
      } else if (scrollPosition < window.pageYOffset) {
        if (scrollDirection != "down") {
          setScrollDirection("down");
        }
      }
    }
  };

  /**
   *
   * @name overlayNavToggle
   * @description: Toggle overlay nav state.
   *
   */

  const overlayNavToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <GlobalStyle />
      <Context.Provider
        value={{
          overlayNavActive: navActive,
          scrollDirection: scrollDirection,
          scrollPosition: scrollPosition,
        }}
      >
        <Layout
          footerData={footerData}
          navData={navData}
          siteConfig={siteConfig}
          overlayNavToggle={overlayNavToggle}
        >
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const footerData = await getClient().fetch(Queries.Footer());
  const navData = await getClient().fetch(Queries.Navigation());
  const siteConfig = await getClient().fetch(Queries.SiteConfig());

  return {
    ...appProps,
    footerData: footerData,
    navData: navData,
    siteConfig: siteConfig,
  };
};

export default MyApp;
