/**
 *
 * @author Alisha Garric
 * @description Headline section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeadlineClassName = "section-headline";

export const HeadlineStyle = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;

  .${HeadlineClassName}__header {
    &__subheadline {
      opacity: .6;
    }
  }

  .${HeadlineClassName}__body {
    > *:last-child {
      padding-bottom: 0;
    }
  }

  > * {
    max-width: ${Theme.Base.Grid.ReadingWidth};
  }
  
  /* Layouts */
  &.__layout-right {
    align-items: flex-end;
    text-align: right;
  }

  &.__layout-split {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .${HeadlineClassName}__header, .${HeadlineClassName}__body {
      padding-right: ${Root.Size};
    }

    .${HeadlineClassName}__body {
      flex: 40% 0 0;
    }

    .${HeadlineClassName}__header {
      > *:last-child {
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {

    /* Layouts */
    &.__layout-split {
      flex-direction: column;
      align-items: flex-start;

      .${HeadlineClassName}__header, .${HeadlineClassName}__body {
        padding-right: 0;
      }

      .${HeadlineClassName}__header {
        > *:last-child {
          padding-bottom: calc(${Root.Size} / 2);
        }
      }
    }
    
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    &.__layout-right {
      align-items: flex-start;
      text-align: left;
    }
  }
`;
