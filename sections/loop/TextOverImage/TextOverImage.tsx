/**
 *
 * @author Alisha Garric
 * @description Text over image section
 *
 */

// Core
import React, { useState } from "react";

// Styles
import { TextOverImageClassName, TextOverImageStyle } from "./styles.scss";
import { Settings } from "../../../constants/site/Settings";
import ReactPlayer from "react-player";
import { Root } from "../../../constants/Root";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CMNC_Image, CMNC_SectionTheme } from "../../../constants/Types";
import { PortableText } from "../../../utils/sanity";
import Image from "next/image";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_TextOverImage_Schema = {
  headline?: string;
  caption?: string;
  subheadline?: string;
  content?: string;
  image: CMNC_Image;
  video?: string;
  textAlignment?: string;
  sectionTheme?: CMNC_SectionTheme;
};

type LMNTS_TextOverImage = {
  schema: LMNTS_TextOverImage_Schema;
  addClass?: string;
};

export const TextOverImage: React.FunctionComponent<LMNTS_TextOverImage> = ({
  schema,
  addClass,
}) => {
  const [playerOpen, setPlayerOpen] = useState(false);

  let {
    content,
    video,
    image,
    caption,
    headline,
    subheadline,
    textAlignment,
    sectionTheme,
  } = schema;
  let alt = headline
    ? headline
    : subheadline
    ? subheadline
    : content
    ? content
    : Settings.siteTitle;
  let videoToPlay = video ? (
    <ReactPlayer
      url={video}
      playing={true}
      controls={true}
      loop={true}
      width={`calc(100% + ${Root.Grid.Gutter.Left} + ${Root.Grid.Gutter.Right})`}
      height={"100%"}
      className={`${TextOverImageClassName}__video`}
    />
  ) : (
    false
  );
  return (
    <TextOverImageStyle
      className={`${TextOverImageClassName} ${video ? "__with-video" : ""} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      } ${sectionSpacing()} ${addClass}`}
    >
      {!playerOpen && image && (
        <div className={`${TextOverImageClassName}__image`}>
          <Image src={image.url} alt={alt} layout="fill" objectFit="cover" />
        </div>
      )}
      <div
        className={`${TextOverImageClassName}__text-container __alignment-${
          textAlignment ? textAlignment : "default"
        }`}
      >
        {caption && (
          <div
            className={`${TextOverImageClassName}__txt-caption txt-caption add-doodad add-doodad-knotch`}
          >
            {caption}
          </div>
        )}
        {headline && (
          <h2
            className={`${TextOverImageClassName}__text-container__header alt`}
          >
            {headline}
          </h2>
        )}
        {subheadline && (
          <h3
            className={`${TextOverImageClassName}__text-container__sub-header add-doodad add-doodad-knotch h5`}
          >
            {subheadline}
          </h3>
        )}
        {content && (
          <PortableText
            blocks={content}
            className={`${TextOverImageClassName}__text-container__body`}
          />
        )}
        {video && (
          <button
            className={`${TextOverImageClassName}__text-container__toggle`}
            onClick={() => setPlayerOpen(true)}
          >
            ➤
          </button>
        )}
      </div>
      {playerOpen && videoToPlay}
    </TextOverImageStyle>
  );
};

TextOverImage.displayName = "TextOverImage";

// End Component
//////////////////////////////////////////////////////////////////////
