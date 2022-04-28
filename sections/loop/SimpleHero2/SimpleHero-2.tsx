/**
 *
 * @author Alisha Garric
 * @description Simple hero section
 *
 */

// Core
import React, { useEffect, useRef, useState } from "react";

// Styles
import { SimpleHeroClassName, SimpleHeroStyle } from "./styles.scss";
import { CMNC_Image } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import Image from "next/image";
import ReactPlayer from "react-player";
import router from "next/router";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_SimpleHero2_Schema = {
  _type: "simpleHero-2";
  headlineBeginning?: string;
  headlineEnding: string;
  image: CMNC_Image;
  video?: string;
  gif?: CMNC_Image;
  link?: string;
  transitional?: boolean;
  sectionTheme?: CMNC_SectionTheme;
  asSection?: boolean;
};

type CMNC_SimpleHero2 = {
  schema: CMNC_SimpleHero2_Schema;
  addClass?: string;
};

export const SimpleHero2: React.FunctionComponent<CMNC_SimpleHero2> = ({
  schema,
  addClass,
}) => {
  let {
    video,
    sectionTheme,
    headlineBeginning,
    headlineEnding,
    image,
    gif,
    link,
    transitional,
    asSection,
  } = schema;

  const [expanded, setExpanded] = useState(link ? false : true);
  const [translateY, setTranslateY] = useState(0);
  const component = useRef<null | HTMLDivElement>(null);

  useEffect(() => {}, [translateY]);

  const handleClick = (link: string) => {
    let scrollDifference = component.current
      ? component.current.getBoundingClientRect().top
      : undefined;
    let topDifference = component.current
      ? component.current.offsetTop
      : undefined;

    if (scrollDifference && topDifference) {
      document.body.style.overflow = "hidden";
      setTranslateY(scrollDifference - topDifference);
    }

    setExpanded(!expanded);

    const timeout = setTimeout(() => {
      document.body.style.overflow = "unset";
      router.push(link);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  };

  let headlineInner = (
    <>
      {headlineBeginning && (
        <span className={`${SimpleHeroClassName}__headline__top h1-eyebrow`}>
          {headlineBeginning + " "}
        </span>
      )}
      <motion.span
        layoutId={`hero-headline-${headlineEnding}`}
        initial={false}
        className="h1-vw"
        layout="position"
      >
        {headlineEnding}
      </motion.span>
    </>
  );

  return (
    <SimpleHeroStyle
      className={`${SimpleHeroClassName}  ${sectionSpacing({
        bottom: "none",
      })} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""} ${
        expanded ? "__expanded" : "__condensed"
      } 
      `}
      ref={component}
      style={{ transform: `translateY(${translateY * -1}px)` }}
      onClick={() =>
        link
          ? transitional
            ? handleClick(link)
            : router.push(link)
          : undefined
      }
    >
      <div
        className={`${SimpleHeroClassName}__background ${
          video ? "__no-mix-blend-mode" : ""
        }`}
      >
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          alt="Poster image for video"
        />
        {video && (!isMobile || (isMobile && !gif)) && (
          <ReactPlayer
            url={video}
            playing={true}
            loop={true}
            volume={0}
            width={"100%"}
            height={"100%"}
            playsinline={true}
            className={`${SimpleHeroClassName}__video`}
          />
        )}
        {gif && isMobile && (
          <Image
            src={gif.url}
            layout="fill"
            objectFit="cover"
            alt="Gif of video"
          />
        )}
      </div>

      {asSection ? (
        <h3 className={`${SimpleHeroClassName}__headline`}>{headlineInner}</h3>
      ) : (
        <h1 className={`${SimpleHeroClassName}__headline`}>{headlineInner}</h1>
      )}
    </SimpleHeroStyle>
  );
};

SimpleHero2.displayName = "SimpleHero";

// End Component
//////////////////////////////////////////////////////////////////////
