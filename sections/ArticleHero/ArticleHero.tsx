/**
 *
 * @author Alisha Garric
 * @description Article hero
 *
 */

// Core
import React from "react";

// Styles
import { ArticleHeroClassName, ArticleHeroStyle } from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import {
  CMNC_Category,
  CMNC_Image,
  CMNC_SectionThemeSubtle,
} from "../../constants/Types";
//@ts-ignore
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ArticleHero_Schema = {
  title: string;
  categories?: CMNC_Category[];
  date?: string;
  image?: CMNC_Image;
  sectionThemeSubtle?: CMNC_SectionThemeSubtle;
};

type CMNC_ArticleHero = {
  schema: CMNC_ArticleHero_Schema;
  addClass?: string;
};

export const ArticleHero: React.FunctionComponent<CMNC_ArticleHero> = ({
  schema,
  children,
  addClass,
}) => {
  let { title, categories, sectionThemeSubtle, date, image } = schema;

  return (
    <ArticleHeroStyle
      className={`${ArticleHeroClassName} ${sectionSpacing({
        bottom: "none",
      })} ${addClass} ${
        sectionThemeSubtle ? `__theme-${sectionThemeSubtle}` : ""
      }`}
    >
      {children}

      <h1 className={`${ArticleHeroClassName}__title h2 __fnt-med`}>{title}</h1>
      <div className={`${ArticleHeroClassName}__info`}>
        {categories && categories.length > 0 && (
          <div className={`${ArticleHeroClassName}__categories`}>
            {categories.map((category: any) => (
              <p
                className={`${ArticleHeroClassName}__categories__category p-sm __fnt-med`}
              >
                {category.title}
              </p>
            ))}
          </div>
        )}

        {date && (
          <p className={`${ArticleHeroClassName}__date p-sm __fnt-med`}>
            {date}
          </p>
        )}
      </div>
      {image && (
        <div>
          <Image
            layout="responsive"
            height={image.height}
            width={image.width}
            src={image.url}
            alt={title}
          />
        </div>
      )}
    </ArticleHeroStyle>
  );
};

ArticleHero.displayName = "ArticleHero";

// End Component
//////////////////////////////////////////////////////////////////////
