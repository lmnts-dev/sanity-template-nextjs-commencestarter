/**
 *
 * @author Alisha Garric
 * @description Video row section styles
 *
 */

// Core
import React, { useState } from "react";

// Styles
import { VideoRowClassName, VideoRowStyle } from "./styles.scss";
import ReactPlayer from "react-player";
import Image from "next/image";
import { CursorLinkActivatorClass } from "../../../components/core/Cursor/styles.scss";
import { CMNC_Image, CMNC_SectionTheme } from "../../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_VideoRow_Schema = {
  video: string;
  poster: CMNC_Image;
  alt: string;
  sectionTheme?: CMNC_SectionTheme;
};

type LMNTS_VideoRow = {
  schema: LMNTS_VideoRow_Schema;
};

/**
 *
 * VideoRow.js
 * @author Alisha Garric
 * @description Column content
 *
 */

export const VideoRow: React.FunctionComponent<LMNTS_VideoRow> = ({
  schema,
}) => {
  const [playerOpen, setPlayerOpen] = useState(false);
  let { video, poster, alt, sectionTheme } = schema;

  let videoToPlay = (
    <ReactPlayer
      url={video}
      playing={true}
      controls={true}
      loop={true}
      width={"100%"}
      height={"100%"}
      className={`${VideoRowClassName}__overlay__video-to-play`}
    />
  );

  return (
    <VideoRowStyle
      className={`${VideoRowClassName} ${
        sectionTheme ? `__theme-${sectionTheme}` : ""
      }`}
    >
      <div className={`${VideoRowClassName}__inner`}>
        <div className={`${VideoRowClassName}__trailer`}>
          {!playerOpen && (
            <>
              <Image
                src={poster.url}
                alt={alt}
                layout="fill"
                objectFit="cover"
              />

              <ReactPlayer
                url={video}
                playing={true}
                loop={true}
                volume={0}
                width={"100%"}
                height={"100%"}
                className={`${VideoRowClassName}__video`}
              />

              <button
                className={`${VideoRowClassName}__toggle ${CursorLinkActivatorClass}`}
                onClick={() => setPlayerOpen(true)}
              >
                ➤
              </button>
            </>
          )}

          {playerOpen && videoToPlay}
        </div>
      </div>
    </VideoRowStyle>
  );
};

VideoRow.displayName = "VideoRow";

// End Component
//////////////////////////////////////////////////////////////////////
