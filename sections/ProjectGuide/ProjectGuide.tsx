/**
 *
 * @author Alisha Garric
 * @description Project guide
 *
 */

// Core
import React from "react";

// Styles
import { ProjectGuideClassName, ProjectGuideStyle } from "./styles.scss";
import Link from "next/link";
import { sectionSpacing } from "../../utils/sectionSpacing";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ProjectGuide_Schema = {
  next?: {
    link: string;
    title: string;
  };
  prev?: {
    link: string;
    title: string;
  };
};

type CMNC_ProjectGuide = {
  schema: CMNC_ProjectGuide_Schema;
  addClass?: string;
};

export const ProjectGuide: React.FunctionComponent<CMNC_ProjectGuide> = ({
  schema,
  addClass,
}) => {
  let { next, prev } = schema;

  //if the next article/project isn't the same as the previous article/project, show this component
  if (next || prev) {
    return (
      <ProjectGuideStyle
        className={`${ProjectGuideClassName} ${sectionSpacing()} ${addClass}`}
      >
        <div className={`${ProjectGuideClassName}__container`}>
          {prev && (
            <Link href={`${prev.link}`}>
              <a className={`${ProjectGuideClassName}__link`}>
                <div
                  className={`${ProjectGuideClassName}__link__caption txt-caption add-knotch-small`}
                >
                  Previously
                </div>
                <h2 className={`${ProjectGuideClassName}__link__header alt`}>
                  {prev.title}
                </h2>
                <div
                  className={`${ProjectGuideClassName}__link__client txt-caption`}
                >
                  {prev.title}
                </div>
              </a>
            </Link>
          )}
          {next && prev != next && (
            <Link href={`${next.link}`}>
              <a className={`${ProjectGuideClassName}__link`}>
                <div
                  className={`${ProjectGuideClassName}__link__caption txt-caption add-knotch-small`}
                >
                  Up Next
                </div>
                <h2 className={`${ProjectGuideClassName}__link__header alt`}>
                  {next.title}
                </h2>
                <div
                  className={`${ProjectGuideClassName}__link__client txt-caption`}
                >
                  {next.title}
                </div>
              </a>
            </Link>
          )}
        </div>
      </ProjectGuideStyle>
    );
  } else return <></>;
};

ProjectGuide.displayName = "ProjectGuide";

// End Component
//////////////////////////////////////////////////////////////////////
