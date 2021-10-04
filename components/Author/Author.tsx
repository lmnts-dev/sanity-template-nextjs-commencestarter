/**
 *
 * @author Alisha Garric
 * @description Author Component.
 *
 */

// Core
import React from "react";

// Styles
import { ArticleAuthorClassName, ArticleAuthorStyle } from "./styles.scss";
import Image from "next/image";
import { CMNC_Author } from "../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ArticleAuthor: React.FunctionComponent<CMNC_Author> = ({
  name,
  image,
}) => {
  return (
    <ArticleAuthorStyle className={`${ArticleAuthorClassName}`}>
      {image && (
        <div className={`${ArticleAuthorClassName}__container`}>
          <Image layout="fill" objectFit="cover" src={image.url} alt={name} />
        </div>
      )}
      <p className={`${ArticleAuthorClassName}__name`}>{name}</p>
    </ArticleAuthorStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
