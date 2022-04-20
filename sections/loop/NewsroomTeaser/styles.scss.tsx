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
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NewsroomTeaserClassName = "newsroom-teaser";

export const NewsroomTeaserStyle = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);


  .${NewsroomTeaserClassName}__link {
    grid-column: 3 / -1;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .${NewsroomTeaserClassName}__headline{
    grid-column: 1 / 3;
  }

  .${NewsroomTeaserClassName}__news {
    grid-column: 1 / -1;
  }


  @media (max-width: ${Theme.Base.Media.Width.Md}) {

  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${NewsroomTeaserClassName}__headline {
      grid-column: -1 / 1;
      margin-bottom: calc(${Root.Size}/3.5);
    }

    .${NewsroomTeaserClassName}__link {
      justify-content: center;
      order: 3;
      grid-column: 1 / -1;
      margin-top: calc(${Root.Size}/3.5);
    }
  }
`;
