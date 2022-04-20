/**
 *
 * @author Alisha Garric
 * @description Simple Card
 *
 */

// Core

// Styles
import { SimpleCardClassName, SimpleCardStyle } from "./styles.scss";
//@ts-ignore
import Link from "next/link";
//@ts-ignore
import Image from "next/image";
import { CMNC_Image } from "../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SimpleCard = {
  image: CMNC_Image;
  link?: string;
  headline: string;
  subheadline?: string;
  largeCard?: boolean;
  featuredCard?: boolean;
  body?: string;
  theme?: string;
};

export const SimpleCard: React.FunctionComponent<CMNC_SimpleCard> = ({
  image,
  link,
  headline,
  body,
  subheadline,
  largeCard,
  featuredCard,
  theme,
}) => {
  return (
    <SimpleCardStyle
      className={`${SimpleCardClassName} ${largeCard ? "__size-large" : ""} ${
        featuredCard ? "__featured-card" : ""
      }`}
    >
      {link && (
        <Link href={link}>
          <a
            className={`${SimpleCardClassName}__link absolute-link`}
            aria-label={headline}
          />
        </Link>
      )}
      <div
        className={`${SimpleCardClassName}__image-container __theme-accent-${
          theme ? theme : "beige"
        }`}
      >
        <Image layout="fill" objectFit="cover" src={image.url} alt={headline} />
      </div>
      <div className={`${SimpleCardClassName}__details`}>
        {subheadline && (
          <p
            className={`${SimpleCardClassName}__details__subheadline p-sm __fnt-med`}
          >
            {subheadline}
          </p>
        )}
        <h2
          className={`${SimpleCardClassName}__details__headline __fnt-med ${
            largeCard ? "h3" : "h5"
          }`}
        >
          {headline}
        </h2>
        {body && (
          <p className={`${SimpleCardClassName}__details__body`}>{body}</p>
        )}
      </div>
    </SimpleCardStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
