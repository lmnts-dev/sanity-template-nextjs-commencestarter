/**
 *
 * @author Alisha Garric
 * @description Split section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../../constants/Root";
import { Theme } from "../../../constants/Theme";
import { Palette } from "../../../constants/styles/Color";

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SplitSectionClassName = "split-section";

export const SplitSectionStyle = styled.section`
  --iconHeight: calc(${Root.Size} / 1.5);
  display: flex;
  align-items: center;

  .${SplitSectionClassName} {
    &__text, &__images {
      flex: 1 0 50%;
    }

    &__text {
      padding-right: ${Root.Grid.Gutter.Left};

      &__icon {
        margin-bottom: calc(${Root.Size} / 4);
      }

      img {
        height: var(--iconHeight) !important;
        width: auto !important;
        max-width: none !important;
      }
    }

    &__images {
      position: relative;
      
      &__image {
        background: ${Theme.Color.Placeholder};
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      &__offset-image {
        display:flex;
        position: absolute;
        left: -20px;
        bottom: -20px;
        padding: calc(${Root.Size}/4) calc(${Root.Size}/2);
        background: ${Palette.White};

        img{
          height: 80px !important;;
          max-height:80px!important;
        }
      }
    }
  }

  &.__layout-left {
    flex-direction: row-reverse;

    .${SplitSectionClassName} {
      &__text {
        padding-right: 0;
        padding-left: ${Root.Grid.Gutter.Left};
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
  
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    flex-direction: column-reverse;
    padding-top:0;
    .${SplitSectionClassName} {
      &__text{
        padding-top: var(--SectionTop);
        padding-right: 0;
        width: 100%;
      }
      &__images{
        width:100vw;

        &__offset-image{
          left: ${Root.Grid.Gutter.Left};
          bottom: 0;
          transform: translateY(50%);

          img{
            height: 50px !important;;
            max-height:50px!important;
          }
        }
      }
    }
    
    &.__layout-left {
      flex-direction:column-reverse;
    }
  }
`;
