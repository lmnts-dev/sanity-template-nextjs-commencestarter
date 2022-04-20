/**
 *
 * @author Alisha Garric
 *
 */

// Core
import React, { useEffect, useRef, useState } from "react";

// Styles
import { ProjectHeroClassName, ProjectHeroStyle } from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { CMNC_Image, CMNC_Slug } from "../../constants/Types";
import Image from "next/image";
import ReactPlayer from "react-player";
import { PortableText } from "../../utils/sanity";
import { generatePath } from "../../utils/generatePath";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ProjectHero_Schema = {
  title: string;
  description: string;
  tagline: string;
  services?: string[];
  video?: string;
  image: CMNC_Image;
  slug?: CMNC_Slug;
  asSection?: boolean;
};

type CMNC_ProjectHero = {
  schema: CMNC_ProjectHero_Schema;
  addClass?: string;
};

export const ProjectHero: React.FunctionComponent<CMNC_ProjectHero> = ({
  schema,
  addClass,
}) => {
  let { description, title, tagline, services, video, image, slug, asSection } =
    schema;

  const [expanded, setExpanded] = useState(slug ? false : true);
  const [translateY, setTranslateY] = useState(0);
  const component = useRef<null | HTMLDivElement>(null);

  useEffect(() => {}, [translateY]);

  const handleClick = () => {
    let scrollDifference = component.current
      ? component.current.getBoundingClientRect().top
      : undefined;

    if (scrollDifference) {
      document.body.style.overflow = "hidden";
      setTranslateY(scrollDifference);
    }

    setExpanded(true);

    const timeout = setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  };

  let titleInner = (
    <Parallax y={[-20, 20]} tagOuter="div">
      {title + " "}

      {!expanded && (
        <span className={`${ProjectHeroClassName}__title__tagline h6-vw`}>
          {tagline}
        </span>
      )}
    </Parallax>
  );

  return (
    <ProjectHeroStyle
      className={`${ProjectHeroClassName} ${sectionSpacing({
        top: "none",
        bottom: "none",
      })} ${addClass} __theme-default ${
        expanded ? "__expanded" : "__condensed"
      }`}
      ref={component}
      style={{ top: `${translateY * -1}px` }}
    >
      <Link href={generatePath({ _type: "project", slug: slug })}>
        <motion.a
          className={`${ProjectHeroClassName}__image`}
          layoutId={`project-hero-image-${title.replace(/\s/g, "")}`}
          initial={false}
          //@ts-ignore
          layout="size"
          onClick={() => handleClick()}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={image.url}
            alt={title}
            key={title.replace(/\s/g, "")}
          />

          {video && !isMobile && (
            <ReactPlayer
              url={video}
              playing={true}
              playsinline={true}
              loop={true}
              volume={0}
              width={"100%"}
              height={"100%"}
              className={`${ProjectHeroClassName}__image__video`}
            />
          )}

          {asSection ? (
            <h2 className={`${ProjectHeroClassName}__title h2-vw`}>
              {titleInner}
            </h2>
          ) : (
            <h1 className={`${ProjectHeroClassName}__title h2-vw`}>
              {titleInner}
            </h1>
          )}
        </motion.a>
      </Link>

      {expanded && (
        <>
          <Parallax y={[-20, 20]} tagOuter="div">
            <h3 className={`${ProjectHeroClassName}__subtitle txt-caption`}>
              <span
                className={`${ProjectHeroClassName}__subtitle__spacer h2-vw`}
              />
              <span className={`${ProjectHeroClassName}__subtitle__marquee`}>
                {[...Array(10)].map(() => {
                  return <span>&nbsp;{tagline}&nbsp;</span>;
                })}
              </span>
            </h3>
          </Parallax>
          <div
            className={`${ProjectHeroClassName}__description p-lg __article-text`}
          >
            <PortableText blocks={description} />

            {services && services.length > 0 && (
              <ul className={`${ProjectHeroClassName}__description__services`}>
                {services.map((service, idx) => {
                  return (
                    <li key={idx} className={`p-sm`}>
                      {service}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </ProjectHeroStyle>
  );
};

ProjectHero.displayName = "ProjectHero";

// End Component
//////////////////////////////////////////////////////////////////////
