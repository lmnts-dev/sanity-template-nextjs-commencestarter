import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { upperFirst } from "lodash";
import { QuoteHero } from "../sections/loop/QuoteHero";
import { AccordionListings } from "../sections/loop/AccordionListings";
import { BlogTeaser } from "../sections/loop/ BlogTeaser";
import { Quote } from "../sections/loop/Quote";
import { CenteredText } from "../sections/loop/CenteredText";
import { ColumnContent } from "../sections/loop/ColumnContent";
import { ContactForm } from "../sections/loop/ContactForm";
import { FullWidthImage } from "../sections/loop/FullWidthImage";
import { GridCardListings } from "../sections/loop/GridCardListings";
import { GridRow } from "../sections/loop/GridRow";
import { Headline } from "../sections/loop/Headline";
import { ImageCollage } from "../sections/loop/ImageCollage";
import { LogosRow } from "../sections/loop/LogosRow";
import { MarqueeRow } from "../sections/loop/MarqueeRow";
import { NextGuide } from "../sections/loop/NextGuide";
import { OverlapHero } from "../sections/loop/OverlapHero";
import { QuoteSlider } from "../sections/loop/QuoteSlider";
import { SectionBreak } from "../sections/loop/SectionBreak";
import { StatementHero } from "../sections/loop/StatementHero";
import { StickySection } from "../sections/loop/StickySection";
import { TextOverImage } from "../sections/loop/TextOverImage";
import { VideoRow } from "../sections/loop/VideoRow";
import { WysiwygSection } from "../sections/loop/WysiwygSection";

let SectionComponents = [
  QuoteHero,
  AccordionListings,
  BlogTeaser,
  Quote,
  CenteredText,
  ColumnContent,
  ContactForm,
  FullWidthImage,
  GridCardListings,
  GridRow,
  Headline,
  ImageCollage,
  LogosRow,
  MarqueeRow,
  NextGuide,
  OverlapHero,
  QuoteSlider,
  SectionBreak,
  StatementHero,
  StickySection,
  TextOverImage,
  VideoRow,
  WysiwygSection,
];

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents.find((obj) => {
    return (
      obj.name === upperFirst(section._type) ||
      obj.displayName === upperFirst(section._type)
    );
  });

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console
  return null;
}

function RenderSections(props) {
  const { sections } = props;

  if (!sections) {
    console.error("Missing section");
    return <div>Missing sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return <div>Missing section {upperFirst(section._type)}</div>;
        }
        return <SectionComponent schema={section} key={section._key} />;
      })}
    </Fragment>
  );
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object),
    })
  ),
};

export default RenderSections;
