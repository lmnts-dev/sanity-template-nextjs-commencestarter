// Core
//@ts-ignore
import Link from "next/link";
import React, { useState } from "react";
//@ts-ignore
import Image from "next/image";

// Types
import { CMNC_News, CMNC_NewsSimple } from "../../../constants/Types";
//@ts-ignore
import Pagination from "react-sanity-pagination";

// Styles
import {
  NewsroomListingsClassName,
  NewsroomListingsStyle,
  NewsroomListingStyle,
} from "./styles.scss";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import ButtonArrow from "../../../components/Icon/SVG/Custom/ButtonArrow";
import { generatePath } from "../../../utils/generatePath";
import Arrow from "../../../components/Icon/SVG/Custom/Arrow";
import { PaginationStyle } from "../../ArticleListings/styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type CMNC_NewsroomListings = {
  newsItems: CMNC_News[] | null;
  postsPerPage: number;
  addClass?: string;
};

export type CMNC_NewsroomListing = CMNC_NewsSimple | CMNC_News;

export const NewsroomListings: React.FunctionComponent<CMNC_NewsroomListings> =
  ({ newsItems, postsPerPage, addClass }) => {
    //Pagination variables
    const itemsToSend = newsItems;
    const [items, setItems] = useState<any[]>([]);

    //Pagination set up
    const action = (page: any, range: any, items: any) => {
      console.log(page, range);
      // Update State
      setItems(items);
    };

    return (
      <>
        {/* // list of news cards // */}
        <NewsroomListingsStyle
          className={`${NewsroomListingsClassName} ${sectionSpacing({
            bottom: "half",
          })} ${addClass ? addClass : ""}`}
        >
          {items &&
            items.length > 0 &&
            items.map((news, idx) => {
              return (
                <NewsroomListing
                  title={news.title}
                  image={news.image}
                  slug={news.slug}
                  key={idx}
                  //seo={news.seo}
                />
              );
            })}
        </NewsroomListingsStyle>

        {/* // pagination // */}
        <PaginationStyle className={sectionSpacing({ top: "none" })}>
          <Pagination
            nextButton={true}
            prevButton={true}
            nextButtonLabel={<Arrow />}
            prevButtonLabel={<Arrow />}
            action={action}
            items={itemsToSend}
            postsPerPage={postsPerPage}
          />
        </PaginationStyle>
      </>
    );
  };

export const NewsroomListing: React.FunctionComponent<CMNC_NewsroomListing> = ({
  title,
  image,
  slug,
}) => {
  return (
    <NewsroomListingStyle className={`${NewsroomListingsClassName}__news`}>
      <Link
        href={generatePath({
          slug: slug,
          _type: "news",
        })}
      >
        <a className={`${NewsroomListingsClassName}__news__inner`}>
          <div className={`${NewsroomListingsClassName}__news__image`}>
            <Image
              layout="fill"
              objectFit="contain"
              src={image.url}
              alt={title}
            />
          </div>

          <h2
            className={`${NewsroomListingsClassName}__news__headline h3 __fnt-med`}
          >
            {title}
          </h2>
          <p
            className={`${NewsroomListingsClassName}__news__cta btn __with-arrow`}
          >
            Read More
            <ButtonArrow />
          </p>
        </a>
      </Link>
    </NewsroomListingStyle>
  );
};

NewsroomListings.displayName = "NewsroomListings";

// End Component
// __________________________________________________________________________________________
