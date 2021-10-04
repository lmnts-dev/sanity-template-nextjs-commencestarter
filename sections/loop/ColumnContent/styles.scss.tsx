/**
 *
 * @author Alisha Garric
 * @description Column content section styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Theme } from "../../../constants/Theme";
import { Root } from "../../../constants/Root";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ColumnContentClassName = "column-content";

export const ColumnContentStyle = styled.section`
  --columnContentGap: calc(${Root.Size} / 2);
  width: 100%;
  margin: 0 auto;
  position: relative;

  .${ColumnContentClassName} {
    &__top {
      max-width: ${Theme.Base.Grid.ReadingWidth};
      margin-bottom: calc(${Root.Size} / 2);
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      margin: 0 calc(var(--columnContentGap) * -1) calc(var(--columnContentGap) * -1) calc(var(--columnContentGap) * -1); //emulate grid gap;

      &__col {
        flex: 25% 1 1;
        padding: 0 var(--columnContentGap) var(--columnContentGap) var(--columnContentGap); //emulate grid gap;
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${ColumnContentClassName} {
      &__bottom {
        flex-wrap: wrap;

        &__col {
          flex: 50% 0 0;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .${ColumnContentClassName} {
      &__bottom {
        &__col {
          flex: 100% 0 0;
        }
      }
    }
  }
`;
