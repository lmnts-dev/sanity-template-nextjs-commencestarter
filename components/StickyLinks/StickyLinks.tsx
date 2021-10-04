/**
 *
 * @author Alisha Garric
 * @description Sticky links (sub navigation that sticks to the top)
 *
 */

// Core
import React, { useContext } from "react";

// Styles
import { StickyLinksClassName, StickyLinksStyle } from "./styles.scss";
import { Context } from "../core/Context";
import { CMNC_StickyHeader } from "../../constants/Types";
import { Cta, Ctas } from "../Cta";
import { navPosition } from "../../utils/navPosition";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const StickyLinks: React.FunctionComponent<CMNC_StickyHeader> = ({
  links,
  label,
  cta,
}) => {
  let { scrollDirection } = useContext(Context);

  return (
    <StickyLinksStyle
      className={`${StickyLinksClassName} ${navPosition(scrollDirection)}`}
    >
      {label && (
        <div className={`${StickyLinksClassName}__label h6`}>{label}</div>
      )}

      {links && (
        <div className={`${StickyLinksClassName}__link-list`}>
          <Ctas
            ctas={links}
            addLiClass={`${StickyLinksClassName}__link-list__container__item txt-caption`}
            addUlClass={`${StickyLinksClassName}__link-list__container`}
          />
        </div>
      )}

      <Cta cta={cta} addClass={`${StickyLinksClassName}__cta h4`} />
    </StickyLinksStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
