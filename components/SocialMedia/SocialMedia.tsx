/**
 *
 * @author Alisha Garric
 * @description The newsletter form
 *
 */

// Core
import React from "react";
import { CMNC_SocialMedia } from "../../constants/Types";
import { Icon } from "../Icon";

// Styles
import { SocialMediaClassName, SocialMediaStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SocialMedia_Row = {
  socialMedia: CMNC_SocialMedia;
};

export const SocialMedia: React.FunctionComponent<CMNC_SocialMedia_Row> = ({
  socialMedia,
}) => {
  if (socialMedia && socialMedia.length > 0) {
    return (
      <SocialMediaStyle className={`${SocialMediaClassName}`}>
        {socialMedia.map((item, idx) => {
          return (
            <li key={idx} className={`${SocialMediaClassName}__item`}>
              <a
                href={item.link}
                className={`${SocialMediaClassName}__item__link`}
                aria-label={item.socialType}
                target="_blank"
                rel="noopener"
              >
                <Icon name={item.socialType} />
              </a>
            </li>
          );
        })}
      </SocialMediaStyle>
    );
  } else return <></>;
};

// End Component
//////////////////////////////////////////////////////////////////////
