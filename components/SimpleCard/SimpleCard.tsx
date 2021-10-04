/**
 *
 * @author Alisha Garric
 * @description Simple Card
 *
 */

// Core

// Styles
import { SimpleCardClassName, SimpleCardStyle } from "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import { CMNC_Image } from "../../constants/Types";
// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_SimpleCard = {
  image: CMNC_Image;
  link?: string;
  headline: string;
  subheadline?: string;
  list?: {
    label: string;
    link?: string;
  }[];
};

export const SimpleCard: React.FunctionComponent<CMNC_SimpleCard> = ({
  image,
  link,
  headline,
  subheadline,
  list,
}) => {
  return (
    <SimpleCardStyle className={`${SimpleCardClassName}`}>
      {link && (
        <Link href={link}>
          <a
            className={`${SimpleCardClassName}__link absolute-link`}
            aria-label={headline}
          />
        </Link>
      )}
      <div className={`${SimpleCardClassName}__image-container`}>
        <Image layout="fill" objectFit="cover" src={image.url} alt={headline} />
      </div>
      <div className={`${SimpleCardClassName}__details`}>
        <h3 className={`${SimpleCardClassName}__details__headline h5`}>
          {headline}
        </h3>
        <h4 className={`${SimpleCardClassName}__details__subheadline h6`}>
          {subheadline}
        </h4>

        {list && list.length > 0 && (
          <ul className={`${SimpleCardClassName}__details__list`}>
            {list.map((item, idx) => {
              if (idx < 4) {
                if (item.link) {
                  return (
                    <li key={idx}>
                      <Link href={item.link}>
                        <a className="p-xs">{item.label}</a>
                      </Link>
                    </li>
                  );
                } else {
                  return <li key={idx}>{item.label}</li>;
                }
              } else return <></>;
            })}
          </ul>
        )}
      </div>{" "}
    </SimpleCardStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
