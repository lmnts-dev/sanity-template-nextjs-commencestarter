/**
 *
 * @author Jose Rios
 * @description Case study teaser styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { SimpleCardClassName } from "../../../components/SimpleCard/styles.scss";
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CaseStudiesTeaserClassName = "case-study-teaser";

export const CaseStudiesTeaserStyle = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .${CaseStudiesTeaserClassName}__link {
    grid-column: 3 / -1;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .${CaseStudiesTeaserClassName}__headline{
    grid-column: 1 / 3;
  }

  .${CaseStudiesTeaserClassName}__case-study {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(${Root.Size}/3.5);

    .${SimpleCardClassName} {
      &__details {
        flex: 1;
      }

      &.__featured-card {
        grid-column: -1 / 1;
      }
    }
  }

 

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${CaseStudiesTeaserClassName}{
      &__case-study {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${CaseStudiesTeaserClassName}{   
      &__case-study {
        grid-template-columns: repeat(2, 1fr);
      }

      &__headline {
        grid-column: -1 / 1;
        margin-bottom: calc(${Root.Size}/3.5);
      }

      &__link{
        justify-content: center;
        order: 3;
        grid-column: 1 / -1;
        margin-top:${Root.Size};
      }
    }   
  }
`;
