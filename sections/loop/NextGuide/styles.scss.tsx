/**
 *
 * @author Alisha Garric
 * @description Next guide section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Color } from "../../../constants/styles/Color";
import { CssUtils } from "../../../constants/styles/CssUtils";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NextGuideClassName = "next-guide";

export const NextGuideStyle = styled.section`
  .${NextGuideClassName}__link {
    min-height: 20vh;
    padding: 0 ${Root.Size};
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${CssUtils.RevokeChildrenPointerEvents};

    &:hover {
      text-decoration: none;

      .${NextGuideClassName}__link {
        &__header {
          transform: scale(1.025);
        }

        &__caption:after {
          opacity: 0.2;
        }

        &__caption:before {
          transform: translateY(-50%) scaleX(1);
          transition: transform 0.5s ease;
        }
      }
    }

    &__header {
      display: block;
      font-size: 10vw;
      will-change: transform;
      transition: transform 0.25s ease;
      padding-bottom: 0;
    }

    &__caption {
      &:before {
        content: "";
        position: absolute;
        left: calc((var(--knotchSize) + var(--knotchSpacing)) * -1);
        top: 50%;
        transform: translateY(-50%) scaleX(0);
        width: var(--knotchSize);
        height: 1px;
        background: ${Color.varForeground()};
        will-change: transform;
        transform-origin: center left;
        transition: transform 0s ease;
      }
    }
  }
`;
