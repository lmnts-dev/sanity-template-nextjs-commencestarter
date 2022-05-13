/**
 *
 * @author Alisha Garric
 * @description Split section
 *
 */

// Core
import React from "react";

// Styles
import {
  TransitionSplitSectionClassName,
  TransitionSplitSectionStyle,
} from "./styles.scss";
//@ts-ignore
import Image from "next/image";
import {
  CMNC_Image,
  CMNC_SectionSpacingObject,
  CMNC_Slug,
} from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { PortableText } from "../../../utils/sanity";
import { CMNC_SimpleHero2_Schema, SimpleHero2 } from "../SimpleHero2";
import Brandmark from "../../../components/Icon/SVG/Custom/Brandmark";
import { generatePath } from "../../../utils/generatePath";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_TransitionSplitSection_Schema = CMNC_SectionSpacingObject & {
  body?: string;
  image: CMNC_Image;
  destination: {
    _type: "page" | "projects";
    slug: CMNC_Slug;
    title: string;
    simpleHero?: CMNC_SimpleHero2_Schema;
    content?: CMNC_SimpleHero2_Schema;
  };
  logo?: boolean;
  headline: string;
};

type CMNC_TransitionSplitSection = {
  schema: CMNC_TransitionSplitSection_Schema;
  addClass?: string;
};

export const TransitionSplitSection: React.FunctionComponent<
  CMNC_TransitionSplitSection
> = ({ schema, addClass }) => {
  let { body, headline, image, spacing, destination, logo } = schema;

  let destFields = destination.simpleHero
    ? destination.simpleHero
    : destination.content && destination.content._type == "simpleHero-2"
    ? destination.content
    : undefined;

  return (
    <TransitionSplitSectionStyle
      className={`${TransitionSplitSectionClassName} ${sectionSpacing(
        spacing
      )} ${addClass} __theme-dark`}
    >
      {image && (
        <div className={`${TransitionSplitSectionClassName}__image`}>
          <Image
            layout="fill"
            src={image.url}
            alt={headline}
            objectFit="cover"
          />
        </div>
      )}

      <div className={`${TransitionSplitSectionClassName}__text p-lg`}>
        {logo && <Brandmark />}
        <h2
          className={`${TransitionSplitSectionClassName}__text__headline h5-vw`}
        >
          {headline}
        </h2>
        {body && (
          <div className={`__article-text`}>
            <PortableText blocks={body} />
          </div>
        )}
      </div>

      <SimpleHero2
        schema={{
          _type: "simpleHero-2",
          headlineBeginning: destFields
            ? destFields.headlineBeginning
            : undefined,
          headlineEnding: destFields
            ? destFields.headlineEnding
            : destination.title,
          image: destFields ? destFields.image : image,
          video: destFields ? destFields.video : undefined,
          gif: destFields ? destFields.gif : undefined,
          sectionTheme: destFields ? destFields.sectionTheme : undefined,
          link: generatePath({
            _type: destination._type,
            slug: destination.slug,
          }),
          transitional: destFields ? true : false,
          asSection: true,
        }}
      />
    </TransitionSplitSectionStyle>
  );
};

TransitionSplitSection.displayName = "TransitionSplitSection";

// End Component
//////////////////////////////////////////////////////////////////////
