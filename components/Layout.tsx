import React from "react";
import { CMNC_SiteConfig } from "../constants/Types";
import { CMNC_Footer, Footer } from "./core/Footer";
import { InnerGrid } from "./core/InnerGrid";
import { CMNC_Navigation, Navigation } from "./core/Navigation";

type CMNC_Layout = {
  children: any;
  footerData: CMNC_Footer;
  navData: CMNC_Navigation;
  siteConfig: CMNC_SiteConfig;
  overlayNavToggle: () => void;
};

export const Layout = (props: CMNC_Layout) => {
  let { children, footerData, navData, siteConfig, overlayNavToggle } = props;

  return (
    <>
      <Navigation
        navData={navData}
        siteConfig={siteConfig}
        overlayNavToggle={overlayNavToggle}
      />
      <main>
        <InnerGrid>{children}</InnerGrid>
      </main>
      <Footer footerData={footerData} siteConfig={siteConfig} />
    </>
  );
};

export default Layout;
