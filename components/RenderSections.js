import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { upperFirst } from "lodash";
import { QuoteHero } from "../sections/loop/QuoteHero";
import { AccordionListings } from "../sections/loop/AccordionListings";
import { BlogTeaser } from "../sections/loop/ BlogTeaser";
import { Quote } from "../sections/loop/Quote";
import { CenteredText } from "../sections/loop/CenteredText";
import { AnimatedHeadline } from "../sections/loop/AnimatedHeadline";
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
import { BarGraphs } from "../sections/loop/BarGraphs";
import { BlockQuote } from "../sections/loop/BlockQuote";
import { LineGraph } from "../sections/loop/LineGraph";
import { SimpleHero } from "../sections/loop/SimpleHero";
import { SplitSection } from "../sections/loop/SplitSection";
import { SplitText } from "../sections/loop/SplitText";
import { TeamGrid } from "../sections/loop/TeamGrid";
import { TextSlider } from "../sections/loop/TextSlider";
import { AnimatedStats } from "../sections/loop/AnimatedStats";
import { HomepageHero } from "../sections/loop/HomepageHero ";
import { NumberedSlider } from "../sections/loop/NumberedSlider";
import { SolutionsLinkListings } from "../sections/loop/SolutionsLinkListings";
import { SolutionsAccordions } from "../sections/loop/SolutionsAccordions";
import { FaqListings } from "../sections/loop/FaqListings";


let SectionComponents = [
  QuoteHero,
  AnimatedHeadline,
  AccordionListings,
  AnimatedStats,
  BarGraphs,
  BlockQuote,
  BlogTeaser,
  Quote,
  CenteredText,
  ColumnContent,
  ContactForm,
  FaqListings,
  FullWidthImage,
  GridCardListings,
  GridRow,
  HomepageHero,
  Headline,
  ImageCollage,
  LineGraph,
  LogosRow,
  MarqueeRow,
  NextGuide,
  NumberedSlider,
  OverlapHero,
  QuoteSlider,
  SectionBreak,
  SimpleHero,
  SolutionsLinkListings,
  SolutionsAccordions,
  SplitSection,
  SplitText,
  StatementHero,
  StickySection,
  TeamGrid,
  TextSlider,
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

