/**
 *
 * @author Alisha Garric
 * @description The website navigation
 *
 */

// Core
import React, { useContext, useEffect } from "react";

// Context
import Link from "next/link";

// Constants

// Styles
import {
  NavigationStyle,
  NavigationOverlayStyle,
  NavigationClassName,
  OverlayNavigationClassName,
} from "./styles.scss";

// Components
import { Icon } from "../../Icon";
import { InnerGrid } from "../InnerGrid";
import { Context } from "../Context";
import {
  CMNC_Cta,
  CMNC_InternalLink,
  CMNC_LabeledLinks,
  CMNC_SiteConfig,
} from "../../../constants/Types";
import { Cta, Ctas } from "../../Cta";
import { generatePath } from "../../../utils/generatePath";
import { CursorLinkActivatorClass } from "../Cursor/styles.scss";
import { SocialMedia } from "../../SocialMedia";
import { navPosition } from "../../../utils/navPosition";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_Navigation = {
  mainNavigationLinks?: (CMNC_InternalLink | CMNC_LabeledLinks)[];
  cta: CMNC_Cta;
};

export type CMNC_Navigation_Section = {
  navData: CMNC_Navigation;
  siteConfig: CMNC_SiteConfig;
  overlayNavToggle: () => void;
};

export const Navigation = (props: CMNC_Navigation_Section) => {
  let { navData, siteConfig, overlayNavToggle } = props;
  let { socialMedia } = siteConfig;
  let { cta, mainNavigationLinks } = navData;
  let { overlayNavActive, scrollDirection } = useContext(Context);

  useEffect(() => {
    if (overlayNavActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [overlayNavActive]);

  return (
    <>
      <NavigationStyle
        className={`${NavigationClassName} ${navPosition(scrollDirection)}`}
      >
        <InnerGrid addClass={`${NavigationClassName}__inner`}>
          <div className={`${NavigationClassName}__branding`}>
            <Link href={`/`}>
              <a
                className={`${NavigationClassName}__branding__link`}
                aria-label="Go To Home"
              >
                <Icon name="logo" addClass="logo" />
              </a>
            </Link>
          </div>

          {!overlayNavActive &&
            mainNavigationLinks &&
            mainNavigationLinks.length > 0 && (
              <ul className={`${NavigationClassName}__main-links`}>
                {mainNavigationLinks.map((navLink, idx) => {
                  if (navLink._type == "internalLink") {
                    navLink = navLink as CMNC_InternalLink;
                    return (
                      <li
                        key={idx}
                        className={`${NavigationClassName}__main-links__item`}
                      >
                        <Link href={generatePath(navLink.internalLink)}>
                          <a
                            className={`${NavigationClassName}__main-links__item__label`}
                          >
                            {navLink.label}
                          </a>
                        </Link>
                      </li>
                    );
                  } else {
                    navLink = navLink as CMNC_LabeledLinks;

                    return (
                      <li
                        key={idx}
                        className={`${NavigationClassName}__main-links__item`}
                      >
                        <button
                          className={`${NavigationClassName}__main-links__item__label`}
                        >
                          {navLink.label}
                        </button>
                        <Ctas
                          ctas={navLink.links}
                          addUlClass={`${NavigationClassName}__nested-links`}
                          addLiClass={`${NavigationClassName}__nested-links__item`}
                        />
                      </li>
                    );
                  }
                })}

                {cta && (
                  <li
                    className={`${NavigationClassName}__main-links__item`}
                    key={-1}
                  >
                    <Cta
                      cta={cta}
                      addClass={`${NavigationClassName}__main-links__item__label __is-cta`}
                    />
                  </li>
                )}
              </ul>
            )}

          <div className={`${NavigationClassName}__nav-tools`}>
            <button
              onClick={overlayNavToggle}
              aria-label="Toggle Overlay Navigation"
              className={`${NavigationClassName}__nav-tools__ham ${CursorLinkActivatorClass}`}
            >
              {overlayNavActive ? (
                <Icon name="exit" />
              ) : (
                <Icon name="hamburger" />
              )}
            </button>
          </div>
        </InnerGrid>
      </NavigationStyle>

      <NavigationOverlayStyle
        className={`${OverlayNavigationClassName} ${sectionSpacing({
          top: "none",
        })} ${overlayNavActive ? "__overlay-visible" : ""}`}
      >
        <InnerGrid addClass={`${OverlayNavigationClassName}__inner`}>
          {mainNavigationLinks && mainNavigationLinks.length > 0 && (
            <ul className={`${OverlayNavigationClassName}__main-links`}>
              {mainNavigationLinks.map((navLink, idx) => {
                if (navLink._type == "internalLink") {
                  navLink = navLink as CMNC_InternalLink;
                  return (
                    <li
                      key={idx}
                      className={`${OverlayNavigationClassName}__main-links__item`}
                      onClick={overlayNavToggle}
                    >
                      <Link href={generatePath(navLink.internalLink)}>
                        <a
                          className={`${OverlayNavigationClassName}__main-links__item__link`}
                        >
                          {navLink.label}
                        </a>
                      </Link>
                    </li>
                  );
                } else {
                  navLink = navLink as CMNC_LabeledLinks;

                  return (
                    <li
                      key={idx}
                      className={`${OverlayNavigationClassName}__main-links__item`}
                    >
                      {navLink.label}
                      <Ctas
                        ctas={navLink.links}
                        onClick={overlayNavToggle}
                        addClass={`${OverlayNavigationClassName}__main-links__item__link`}
                      />
                    </li>
                  );
                }
              })}

              {cta && (
                <li
                  className={`${OverlayNavigationClassName}__main-links__item`}
                  key={-1}
                  onClick={overlayNavToggle}
                >
                  <Cta
                    cta={cta}
                    addClass={`${OverlayNavigationClassName}__main-links__item__link`}
                  />
                </li>
              )}
            </ul>
          )}

          {socialMedia && <SocialMedia socialMedia={socialMedia} />}
        </InnerGrid>
      </NavigationOverlayStyle>
    </>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
