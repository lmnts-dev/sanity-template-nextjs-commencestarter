/**
 *
 * @author Alisha Garric
 * @description Quote hero styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const QuoteHeroClassName = "quote-hero";

export const QuoteHeroStyle = styled.section`
  display: flex;
  align-items: flex-end;

  .${QuoteHeroClassName}__top {
    flex: 1;

    &__author, &__company {
      padding-bottom: 0;
    }

    &__company {
      opacity: .6;
    }
  }

  .${QuoteHeroClassName}__bottom {
    flex: 1;
    padding-left: ${Root.Size};
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    flex-direction: column;
    align-items: flex-start;

    .${QuoteHeroClassName}__bottom, .${QuoteHeroClassName}__top {
      max-width: ${Theme.Base.Grid.ReadingWidth};
    }

    .${QuoteHeroClassName}__bottom {
      padding-left: 0;
      padding-top: calc(${Root.Size} / 2);
    }
  }
`;
