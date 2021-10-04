/**
 *
 * @author Alisha Garric
 * @description Sticky section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const StickySectionClassName = "sticky-section";

export const StickySectionStyle = styled.section`
  display: flex;
  justify-content: space-between;

  .${StickySectionClassName}__col {
    width: 50%;

    &__content{
      max-width: 550px;
    }

    &__inner {
      position: sticky;
      top: ${Root.Nav.Size};
      padding-top: calc(${Root.Size});

      h3 {
        margin: 0;
        padding: 0;

        + h3 {
          opacity: 0.45;
        }
      }

      p {
        margin-top: calc(${Root.Size} / 2);
      }
    }

    &__img {
      width:50%;
      
      .${StickySectionClassName}__img-wrapper {
        background: ${Theme.Color.Placeholder};
        position: relative;
        width: 100%;
        overflow: hidden;
        margin-bottom: calc(${Root.Size} / 2);

      }
    }
  }

  &.__layout-left {
    flex-direction: row-reverse;

    .${StickySectionClassName}{
      &__col {
        &.content {
          padding: 0 ${Root.Size};
        }
      }
    }
  }

  &.__layout-right {
    flex-direction: row;
    .${StickySectionClassName}{
      &__col {
        &.content {
          padding: 0 ${Root.Size};
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    flex-wrap: wrap;

    .${StickySectionClassName}__col {
      width: 100%;

      &__inner {
        position: relative;
        top: 0;

        h3 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }
        
      &__content {
          max-width: 100%;
          margin-bottom: ${Root.Size};
      }

      &__img {
        width: 100%;
      }
    }

    &.__layout-right {
      .${StickySectionClassName}__col {
        &__content {
          padding: 0 0 0 ${Root.Grid.Indent.X};
        }
      }
    }
  }
`;
