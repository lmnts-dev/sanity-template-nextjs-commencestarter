/**
 *
 * @author Alisha Garric
 * @description The website footer
 *
 */

// Core
import Link from "next/link";
import React from "react";
import {
  CMNC_SiteConfig,
  CMNC_LabeledLinks,
  CMNC_Ctas,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { Ctas } from "../../Cta";
import { Icon } from "../../Icon";
import { NewsletterForm } from "../../NewsletterForm";
import { SocialMedia } from "../../SocialMedia";
import { ThemeToggle } from "../../ThemeToggle";
import { InnerGrid } from "../InnerGrid";

// Styles
import { FooterClassName, FooterStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_Footer = {
  mainFooterLinks?: CMNC_LabeledLinks[];
  secondaryFooterLinks?: CMNC_Ctas;
  newsletter?: {
    headline?: string;
    subheadline?: string;
    formspreeEndpoint: string;
    placeholderText: string;
    submitButtonText: string;
  };
};

export type CMNC_Footer_Section = {
  footerData: CMNC_Footer;
  siteConfig: CMNC_SiteConfig;
};

export const Footer: React.FunctionComponent<CMNC_Footer_Section> = ({
  footerData,
  siteConfig,
}) => {
  let { mainFooterLinks, secondaryFooterLinks, newsletter } = footerData;
  let { socialMedia, address } = siteConfig;
  var date = new Date();
  var year = date.getFullYear();

  return (
    <FooterStyle className={`${FooterClassName} ${sectionSpacing()}`}>
      <InnerGrid addClass={`${FooterClassName}__inner`}>
        <div className={`${FooterClassName}__brandmark`}>
          <Link href={`/`}>
            <a
              className={`${FooterClassName}__brandmark__logo`}
              aria-label="Go To Home"
            >
              <Icon name="brandmark" />
            </a>
          </Link>
        </div>

        {address && <p className={`${FooterClassName}__address`}>{address}</p>}

        {mainFooterLinks && mainFooterLinks.length > 0 && (
          <div className={`${FooterClassName}__main-links`}>
            <ul className={`${FooterClassName}__main-links__columns`}>
              {mainFooterLinks.map((column, idx: number) => {
                return (
                  <li
                    key={idx}
                    className={`${FooterClassName}__main-links__columns__column`}
                  >
                    {column.label && <p>{column.label}</p>}
                    <Ctas
                      ctas={column.links}
                      addUlClass={`${FooterClassName}__column-links`}
                      addLiClass={`${FooterClassName}__column-links__link`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {socialMedia && socialMedia.length > 0 && (
          <SocialMedia socialMedia={socialMedia} />
        )}

        {newsletter && (
          <NewsletterForm
            formspree_endpoint={newsletter.formspreeEndpoint}
            headline={newsletter.headline}
            subheadline={newsletter.subheadline}
            placeholder={newsletter.placeholderText}
            submitText={newsletter.submitButtonText}
          />
        )}

        <div className={`${FooterClassName}__bottom`}>
          <div className={`${FooterClassName}__bottom__copywright`}>
            ©{year}
          </div>

          <Ctas
            ctas={secondaryFooterLinks}
            addUlClass={`${FooterClassName}__bottom__links`}
            addLiClass={`${FooterClassName}__bottom__links__link`}
          />

          <div className={`${FooterClassName}__theme-toggle`}>
            <ThemeToggle />
          </div>
        </div>
      </InnerGrid>
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
