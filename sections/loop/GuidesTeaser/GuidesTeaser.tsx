/**
 *
 * @author Alisha Garric
 * @description Guides teaser section
 *
 */

// Core
import React from "react";

// Styles
import { GuidesTeaserClassName, GuidesTeaserStyle } from "./styles.scss";
//@ts-ignore
import Link from "next/link";
import {
  CMNC_GuideSimple,
  CMNC_SectionSpacingObject,
} from "../../../constants/Types";

import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { SimpleCard } from "../../../components/SimpleCard-2";
import { generatePath } from "../../../utils/generatePath";

import { ModalContext } from "../../../components/core/ModalContext";
import { SignUpModal } from "../../GuidesListings/SignUpModal";
import { GuidesListingsClassName } from "../../GuidesListings/styles.scss";

const ModalConsumer = ModalContext.Consumer;

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_GuidesTeaser_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  formspreeLink: string;
  guides_teaser_recent_guides?: {
    quantity: 1 | 2 | 3 | 4;
    guides: CMNC_GuideSimple[];
  };
  guides_teaser_featured_guides?: CMNC_GuideSimple[];
  sectionThemeSubtle?: CMNC_SectionTheme;
};

type CMNC_GuidesTeaser = {
  schema: CMNC_GuidesTeaser_Schema;
  addClass?: string;
};

export const GuidesTeaser: React.FunctionComponent<CMNC_GuidesTeaser> = ({
  schema,
  addClass,
}) => {
  let {
    headline,
    guides_teaser_recent_guides,
    guides_teaser_featured_guides,
    spacing,
    sectionThemeSubtle,
    formspreeLink,
  } = schema;

  //get final set of guides from featured guides and recent guides
  let guides =
    guides_teaser_featured_guides && guides_teaser_recent_guides
      ? guides_teaser_featured_guides
      : guides_teaser_featured_guides
      ? guides_teaser_featured_guides
      : guides_teaser_recent_guides
      ? guides_teaser_recent_guides.guides
      : undefined;

  return guides && guides.length > 0 ? (
    <GuidesTeaserStyle
      className={`${GuidesTeaserClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      {headline && (
        <div className={`${GuidesTeaserClassName}__headline`}>
          <h2>{headline}</h2>
        </div>
      )}
      <div
        className={`${GuidesTeaserClassName}__link __theme-accent-light-blue`}
      >
        <Link href={generatePath({ _type: "guides" })}>
          <a className={`${GuidesTeaserClassName}__link btn __btn-underline`}>
            See all guides
          </a>
        </Link>
      </div>

      <div className={`${GuidesTeaserClassName}__guides`}>
        {guides.map((guide, idx) => {
          return (
            <ModalConsumer key={idx}>
              {({ showModal }) => (
                <button
                  key={idx}
                  className={`${GuidesListingsClassName}__modal-button`}
                  onClick={() => {
                    //@ts-ignore
                    showModal(SignUpModal, {
                      isOpen: true,
                      title: guide.title,
                      image: guide.image,
                      formspreeLink: formspreeLink,
                    });
                  }}
                >
                  <SimpleCard
                    image={guide.image}
                    headline={guide.title}
                    largeCard
                    body={guide.previewText}
                    key={idx}
                  />
                </button>
              )}
            </ModalConsumer>
          );
        })}
      </div>
    </GuidesTeaserStyle>
  ) : (
    <></>
  );
};

GuidesTeaser.displayName = "GuidesTeaser";

// End Component
//////////////////////////////////////////////////////////////////////
