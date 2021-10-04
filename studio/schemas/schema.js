// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteConfig from "./settings/siteConfig";

//Documents
import page from "./documents/page";

//Commence Sections
import { QuoteHero } from "./sections/QuoteHero";
import { Accordions } from "./sections/Accordions";
import { Quote } from "./sections/Quote";
import { CenteredText } from "./sections/CenteredText";
import { ColumnContent } from "./sections/ColumnContent";
import { FullWidthImage } from "./sections/FullWidthImage";
import { GridRow } from "./sections/GridRow";
import { Headline } from "./sections/Headline";
import { GridCardListings } from "./sections/GridCardListings";
import { MarqueeRow } from "./sections/MarqueeRow";
import { TextOverImage } from "./sections/TextOverImage";
import { NextGuide } from "./sections/NextGuide";
import { SectionBreak } from "./sections/SectionBreak";
import { ImageCollage } from "./sections/ImageCollage";
import { VideoRow } from "./sections/VideoRow";
import { WysiwygSection } from "./sections/WysiwygSection";
import { StickySection } from "./sections/StickySection";
import { StatementHero } from "./sections/StatementHero";
import { BlogTeaser } from "./sections/BlogTeaser";
import { LogosRow } from "./sections/LogosRow";
import { QuoteSlider } from "./sections/QuoteSlider";
import { ContactForm } from "./sections/ContactForm";
import { OverlapHero } from "./sections/OverlapHero";

import footer from "./sections/footer";
import navigation from "./sections/navigation";

//Blog
import article from "./documents/article";
import blog from "./settings/blog";
import author from "./documents/author";
import articleCategory from "./documents/articleCategory";

//Quiz
import quiz from "./documents/quiz";
import answer from "./documents/answer";
import result from "./documents/result";
import question from "./documents/question";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    QuoteHero,
    Quote,
    CenteredText,
    ColumnContent,
    GridRow,
    Headline,
    GridCardListings,
    MarqueeRow,
    TextOverImage,
    NextGuide,
    SectionBreak,
    ImageCollage,
    VideoRow,
    WysiwygSection,
    StickySection,
    FullWidthImage,
    StatementHero,
    BlogTeaser,
    LogosRow,
    QuoteSlider,
    Accordions,
    ContactForm,
    OverlapHero,
    article,
    blog,
    articleCategory,
    author,
    footer,
    navigation,
    page,
    siteConfig,

    //quiz
    quiz,
    answer,
    result,
    question,
  ]),
});
