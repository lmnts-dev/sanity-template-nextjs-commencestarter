/**
 *
 * @author Alisha Garric
 * @description Cta Component
 *
 */

// Core
import Link from "next/link";
import React from "react";
import { CMNC_Cta } from "../../constants/Types";
import { generatePath } from "../../utils/generatePath";

// Begin Component
//////////////////////////////////////////////////////////////////////

//CTA where we expect potentially many items in the array
export type CMNC_CtasComponent = {
  ctas: CMNC_Cta | undefined;
  onClick?: () => void;
  addClass?: string;
  singularCta?: boolean;
  addLiClass?: string;
  addUlClass?: string;
};

//CTA where we only expect one item in the array
export type CMNC_CtaComponent = {
  cta: CMNC_Cta | undefined;
  onClick?: () => void;
  addClass?: string;
};

export const Ctas: React.FunctionComponent<CMNC_CtasComponent> = ({
  ctas,
  addClass,
  addLiClass,
  addUlClass,
  singularCta,
  onClick,
}) => {
  if (ctas && ctas.length > 0) {
    ctas = singularCta ? ctas.slice(0, 1) : ctas;

    let links = ctas.map((cta, idx) => {
      let link;

      if (cta._type == "externalLink") {
        link = (
          <a
            href={cta.link}
            target={`${cta.target == "_self" ? "_self" : "_blank"}`}
            rel="noopener"
            download={`${cta.target == "download" ? true : false}`}
            className={`${addClass ? addClass : ""}`}
            onClick={onClick}
            key={idx}
          >
            {cta.label}
          </a>
        );
      } else if (cta._type == "emailLink") {
        link = (
          <a
            href={`mailto:${cta.link}`}
            className={`${addClass ? addClass : ""}`}
            onClick={onClick}
            key={idx}
          >
            {cta.label}
          </a>
        );
      } else if (cta._type == "phoneLink") {
        link = (
          <a
            href={`tel:${cta.link}`}
            className={`${addClass ? addClass : ""}`}
            onClick={onClick}
            key={idx}
          >
            {cta.label}
          </a>
        );
      } else {
        link = (
          <Link href={generatePath(cta.internalLink)} key={idx}>
            <a className={`${addClass ? addClass : ""}`} onClick={onClick}>
              {cta.label}
            </a>
          </Link>
        );
      }

      return singularCta ? (
        link
      ) : (
        <li className={`${addLiClass ? addLiClass : ""}`} key={idx}>
          {link}
        </li>
      );
    });

    return singularCta ? (
      <>{links}</>
    ) : (
      <ul className={`${addUlClass ? addUlClass : ""}`}>{links}</ul>
    );
  } else return <></>;
};

export const Cta: React.FunctionComponent<CMNC_CtaComponent> = ({
  cta,
  addClass,
  onClick,
}) => {
  return <Ctas ctas={cta} addClass={addClass} singularCta onClick={onClick} />;
};

// End Component
//////////////////////////////////////////////////////////////////////
