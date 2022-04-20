/**
 *
 * @author Alisha Garric
 * @description Blog teaser styles
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

export const GuidesTeaserClassName = "guides-teaser";

export const GuidesTeaserStyle = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .${GuidesTeaserClassName}__link {
    grid-column: 3 / -1;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .${GuidesTeaserClassName}__headline{
    grid-column: 1 / 3;
  }

  .${GuidesTeaserClassName}__guides {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: calc(${Root.Size} / 3);

    .${SimpleCardClassName} {
      height: 100%;

      &__details {
        flex: 1;
      }
    }
  }


  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${GuidesTeaserClassName}__guides {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    
    .${GuidesTeaserClassName}__headline {
      grid-column: -1 / 1;
      margin-bottom: calc(${Root.Size}/3.5);
    }

    .${GuidesTeaserClassName}__link {
      justify-content: center;
      order: 3;
      grid-column: 1 / -1;
      margin-top: calc(${Root.Size}/3.5);
    }
  }
`;
