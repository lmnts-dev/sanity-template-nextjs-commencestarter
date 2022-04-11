/**
 *
 * ProjectCard.js
 * @author Peter Laxalt
 * @description The project card.
 *
 */

// Core
import React from "react";
import Link from "next/link";
import LazyImage from "../../../utils/lazyImage";

// Styles
import { ProjectCardClassName, ProjectCardStyle } from "./styles.scss";
// import { InnerGrid } from "../../core/InnerGrid";

// Helpers
import { urlFor } from "../../../utils/urlFor";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type LMNTS_SimplifiedProject = {
  _type: "simplified_project";
  alt: string;
  image: string;
  title: string;
  link?: string;
  list?: {
    label: string;
    link?: string;
  }[];
};

type LMNTS_ProjectCard = {
  key: number;
  project: LMNTS_SimplifiedProject;
  addClass?: string;
  lazyImage?: boolean;
};

export const ProjectCard: React.FunctionComponent<LMNTS_ProjectCard> = ({
  project,
  key,
  addClass,
  lazyImage,
}) => {
  const { title, alt, image, link, list } = project;

  return (
    <ProjectCardStyle
      className={`${ProjectCardClassName} ${addClass}`}
      key={key}
    >
      {link && (
        <Link href={link}>
          <a
            className={`${ProjectCardClassName}__absolute-link absolute-link`}
          />
        </Link>
      )}
      <div className={`${ProjectCardClassName}__image-container`}>
        {lazyImage ? (
          <LazyImage
            src={`${urlFor(image).width(850).auto("format").url()}`}
            alt={alt}
            title={alt}
          />
        ) : (
          <img
            src={`${urlFor(image).width(850).auto("format").url()}`}
            alt={alt}
            title={title}
          />
        )}
      </div>

      <div
        className={`${ProjectCardClassName}__details add-doodad add-doodad-relative`}
      >
        <h3 className={`${ProjectCardClassName}__details__client h5`}>
          {title}
        </h3>

        {list && list.length > 0 && (
          <ul className={`${ProjectCardClassName}__details__services`}>
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
      </div>
    </ProjectCardStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
