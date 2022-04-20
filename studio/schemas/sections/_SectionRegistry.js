/**
 *
 * @name Section Registry
 * @author Alisha Garric
 * @description
 * @requires web/sections/SectionLoop
 * This is where we register our section id's to show up
 * in the Sanity builder.
 *
 */

import { QuoteHeroRegistry } from "./QuoteHero";
import { QuoteRegistry } from "./Quote";
import { CenteredTextRegistry } from "./CenteredText";
import { ColumnContentRegistry } from "./ColumnContent";
import { FullWidthImageRegistry } from "./FullWidthImage";
import { GridRowRegistry } from "./GridRow";
import { HeadlineRegistry } from "./Headline";
import { GridCardListingsRegistry } from "./GridCardListings";
import { MarqueeRowRegistry } from "./MarqueeRow";
import { TextOverImageRegistry } from "./TextOverImage";
import { NextGuideRegistry } from "./NextGuide";
import { SectionBreakRegistry } from "./SectionBreak";
import { ImageCollageRegistry } from "./ImageCollage";
import { VideoRowRegistry } from "./VideoRow";
import { WysiwygSectionRegistry } from "./WysiwygSection";
import { StickySectionRegistry } from "./StickySection";
import { StatementHeroRegistry } from "./StatementHero";
import { BlogTeaserRegistry } from "./BlogTeaser";
import { LogosRowRegistry } from "./LogosRow";
import { QuoteSliderRegistry } from "./QuoteSlider";
import { AccordionsRegistry } from "./Accordions";
import { ContactFormRegistry } from "./ContactForm";
import { OverlapHeroRegistry } from "./OverlapHero";
import { AnimatedHeadlineRegistry } from "./AnimatedHeadline";
import { BlockQuoteRegistry } from "./BlockQuote";
import { SplitTextRegistry } from "./SplitText";
import { TextSliderRegistry } from "./TextSlider";
import { NumberedSliderRegistry } from "./NumberedSlider";
import { BarGraphsRegistry } from "./BarGraphs";
import { LineGraphRegistry } from "./LineGraph";
import { SimpleHeroRegistry } from "./SimpleHero";
import { SplitSectionRegistry } from "./SplitSection";
import { TeamGridRegistry } from "./TeamGrid";
import { HomepageHeroRegistry } from "./HomepageHero";
import { AnimatedStatsRegistry } from "./AnimatedStats";
import { FaqListingsRegistry } from "./FaqListings";


// __________________________________________________________________________________________

/**
 *
 * @name SectionRegistry
 * @param includeSections? : array : Section `types` to include.
 * @param excludeSections? : array : Section `types` to exclude.
 * @returns Array back of sections.
 *
 */

export const SectionRegistry = (includeSections, excludeSections) => {
  /**
   *
   * Default Variables
   *
   */
  let defaultSections = [
    //Text
    { type: AccordionsRegistry.name },
    { type: AnimatedStatsRegistry.name },
    { type: CenteredTextRegistry.name },
    { type: ColumnContentRegistry.name },
    { type: HeadlineRegistry.name },
    { type: MarqueeRowRegistry.name },
    { type: QuoteRegistry.name },
    { type: QuoteHeroRegistry.name },
    { type: QuoteSliderRegistry.name },
    { type: SectionBreakRegistry.name },
    { type: StatementHeroRegistry.name },
    { type: WysiwygSectionRegistry.name },
    { type: AnimatedHeadlineRegistry.name },
    { type: BlockQuoteRegistry.name },
    { type: SplitTextRegistry.name },
    { type: TextSliderRegistry.name },
    { type: NumberedSliderRegistry.name },

    //Image
    { type: GridCardListingsRegistry.name },
    { type: ImageCollageRegistry.name },
    { type: FullWidthImageRegistry.name },
    { type: GridRowRegistry.name },
    { type: LogosRowRegistry.name },
    { type: StickySectionRegistry.name },
    { type: TextOverImageRegistry.name },
    { type: VideoRowRegistry.name },
    { type: OverlapHeroRegistry.name },
    { type: BarGraphsRegistry.name },
    { type: LineGraphRegistry.name },
    { type: SimpleHeroRegistry.name},
    { type: SplitSectionRegistry.name },
    { type: TeamGridRegistry.name },
    { type: HomepageHeroRegistry.name },

    //FAQS
    { type: FaqListingsRegistry.name },

    //Blog
    { type: BlogTeaserRegistry.name },

    //Form
    { type: ContactFormRegistry.name },

    //Navigational
    { type: NextGuideRegistry.name },
    
  ];

  let optionalSections = [];

  let selectedSections = [];

  let filteredSections = defaultSections;

  /**
   *
   * @name handleIncludeSections
   * @returns Array back of defaultSections with included sections added on
   *
   */
  function handleIncludeSections(sectionsToInclude) {
    sectionsToInclude.forEach((type) => {
      let matchedSection = optionalSections.filter(
        (section) => section.type == type
      );

      selectedSections = selectedSections.concat(matchedSection[0]);
    });

    filteredSections = filteredSections.concat(selectedSections);

    return filteredSections;
  }

  /**
   *
   * @name handleExcludeSections
   * @returns Array with specified sections removed
   *
   */
  function handleExcludeSections(sectionsToExclude) {
    sectionsToExclude.forEach((type) => {
      filteredSections = filteredSections.filter(
        (section) => section.type != type
      );
    });

    return filteredSections;
  }

  /**
   *
   * Return Our Data
   *
   */
  if (includeSections && excludeSections) {
    // If both are specified
    handleIncludeSections(includeSections);

    return handleExcludeSections(excludeSections);
  } else if (includeSections) {
    // If only includeSections is specified
    return handleIncludeSections(includeSections);
  } else if (excludeSections) {
    // If only excludeSections is specified
    return handleExcludeSections(excludeSections);
  } else {
    // If none specified
    return defaultSections;
  }
};