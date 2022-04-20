/**
 *
 * @author Alisha Garric
 * @description Features listings
 *
 */

// Core
//@ts-ignore
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ModalContext } from "../../../components/core/ModalContext";
import { Icon } from "../../../components/Icon";
import RenderSections from "../../../components/RenderSections";
import { LockBody } from "../../../constants/styles/Global";
import {
  CMNC_Feature,
  CMNC_SectionSpacingObject,
  CMNC_SectionThemeSubtle,
  CMNC_Service,
} from "../../../constants/Types";
import { generatePath } from "../../../utils/generatePath";
import { PortableText } from "../../../utils/sanity";
import { sectionSpacing } from "../../../utils/sectionSpacing";

// Styles
import {
  FeaturesListingsClassname,
  FeaturesListingsModalClassname,
  FeaturesListingsModalStyle,
  FeaturesListingsStyle,
} from "./styles.scss";
const ModalConsumer = ModalContext.Consumer;

// Begin Component
// __________________________________________________________________________________________

export type CMNC_Section_FeaturesListings_Schema = CMNC_SectionSpacingObject & {
  headline?: string;
  blockBasic?: string;
  servicesFeatures: {
    features?: CMNC_Feature[] | CMNC_Service[];
  }[];
  limit?: number;
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

export type CMNC_FeaturesListings = {
  schema: CMNC_Section_FeaturesListings_Schema;
  addClass?: string;
};

export type CMNC_FeaturesListingsModal = {
  onRequestClose: () => void;
  title: string;
  aspects?: string[];
  content?: any;
  description?: string;
};

export const FeaturesListings: React.FunctionComponent<CMNC_FeaturesListings> =
  ({ schema, addClass }) => {
    let {
      limit,
      servicesFeatures,
      spacing,
      sectionThemeSubtle,
      headline,
      blockBasic,
    } = schema;
    const [showAll, setShowAll] = useState(false);

    let allFeatures: (CMNC_Feature | CMNC_Service)[] = [];

    servicesFeatures.map((service) => {
      if (service.features) {
        allFeatures = allFeatures.concat(service.features);
      }
    });

    allFeatures = [...new Set(allFeatures)];

    let FeatureModal: React.FunctionComponent<CMNC_FeaturesListingsModal> = ({
      onRequestClose,
      title,
      aspects,
      content,
      description,
    }) => {
      return (
        <>
          <LockBody />
          <FeaturesListingsModalStyle
            className={`${FeaturesListingsModalClassname} __theme-light-gray`}
            //@ts-ignore
            onRequestClose={onRequestClose}
          >
            <div className={`${FeaturesListingsModalClassname}__content`}>
              <div
                className={`${FeaturesListingsModalClassname}__content__top ${sectionSpacing()}`}
              >
                <button
                  onClick={() => {
                    onRequestClose();
                  }}
                  aria-label={`Exit`}
                  className={`${FeaturesListingsModalClassname}__content__top__exit`}
                >
                  <Icon name="exit" />
                </button>
                <div
                  className={`${FeaturesListingsModalClassname}__content__top__container`}
                >
                  <h2
                    className={`${FeaturesListingsModalClassname}__content__top__title h3 __fnt-med`}
                  >
                    {title}
                  </h2>
                  {description && <PortableText blocks={description} />}
                </div>
                {aspects && (
                  <ul
                    className={`${FeaturesListingsModalClassname}__content__top__aspects __checkmark-list`}
                  >
                    {aspects.map((aspect, idx) => {
                      return <li key={idx}>{aspect}</li>;
                    })}
                  </ul>
                )}
              </div>
              {content && (
                <RenderSections sections={content} /*navAlterable={false}*/ />
              )}
            </div>
          </FeaturesListingsModalStyle>
        </>
      );
    };

    if (allFeatures && allFeatures.length > 0) {
      return (
        <FeaturesListingsStyle
          className={`${FeaturesListingsClassname} ${sectionSpacing(
            spacing
          )} ${addClass} ${
            sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
          }`}
        >
          {(headline || blockBasic) && (
            <div className={`${FeaturesListingsClassname}__header`}>
              {headline && <h2 className={`h3`}>{headline}</h2>}
              {blockBasic && <PortableText blocks={blockBasic} />}
            </div>
          )}
          {allFeatures.map((feature: CMNC_Feature | CMNC_Service, idx) => {
            if (feature._type == "service") {
              return (
                <Link
                  href={generatePath({ _type: "service", slug: feature.slug })}
                  key={idx}
                >
                  <a
                    className={`${FeaturesListingsClassname}__feature ${
                      !showAll && limit && idx > limit - 1 ? "__hide" : ""
                    }`}
                    aria-label={`View ${feature.title}`}
                  >
                    <h3 className={`h4 __fnt-med`}>{feature.title}</h3>
                    {feature.shortDescription && (
                      <p
                        className={`${FeaturesListingsClassname}__feature__body`}
                      >
                        {feature.shortDescription}
                      </p>
                    )}
                    <p className={`${FeaturesListingsClassname}__feature__btn`}>
                      View {feature.title}
                    </p>
                  </a>
                </Link>
              );
            } else {
              return (
                <ModalConsumer key={idx}>
                  {({ showModal }) => (
                    <button
                      key={idx}
                      onClick={() => {
                        //@ts-ignore
                        showModal(FeatureModal, {
                          isOpen: true,
                          title: feature.title,
                          description: feature.blockBasic,
                          aspects: feature.aspects,
                          content: feature.content,
                        });
                      }}
                      className={`${FeaturesListingsClassname}__feature ${
                        !showAll && limit && idx > limit - 1 ? "__hide" : ""
                      }`}
                      aria-label={`Explore ${feature.title}`}
                    >
                      <h3 className={`h4 __fnt-med`}>{feature.title}</h3>
                      <div
                        className={`${FeaturesListingsClassname}__feature__body`}
                      >
                        <PortableText blocks={feature.blockBasic} />
                      </div>

                      <p
                        className={`${FeaturesListingsClassname}__feature__btn`}
                      >
                        Explore {feature.title}
                      </p>
                    </button>
                  )}
                </ModalConsumer>
              );
            }
          })}
          {limit && allFeatures.length > limit && !showAll && (
            <div className={`${FeaturesListingsClassname}__load-more`}>
              <button
                className={`${FeaturesListingsClassname}__load-more__btn btn __btn-underline __theme-accent-light-blue`}
                onClick={() => {
                  setShowAll(true);
                }}
              >
                Load More Service Features
              </button>
            </div>
          )}
        </FeaturesListingsStyle>
      );
    } else return <></>;
  };

FeaturesListings.displayName = "FeaturesListings";

// End Component
// __________________________________________________________________________________________
