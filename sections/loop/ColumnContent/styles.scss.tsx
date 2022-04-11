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
export const ColumnContentBiColumnClassName = "__layout-bi-column-wrap";

export const ColumnContentStyle = styled.section`
  --columnContentGap: calc(${Root.Size});
  width: 100%;
  margin: 0 auto;
  position: relative;
  text-align:center;

  &.${ColumnContentBiColumnClassName} {
    .${ColumnContentClassName} {
      &__bottom {
        display: grid;
        grid-template-columns: repeat(2,1fr);
      }
    }
  }

  .${ColumnContentClassName} {
    &__top {
      text-align:center;
      margin: 0 auto;
      max-width: ${Theme.Base.Grid.ReadingWidth};
    }

    &__bottom {
      display: flex;
      gap: var(--columnContentGap);
      justify-content: space-between;

      &:not(:first-child) {
        margin-top: var(--columnContentGap);
      }

      &__col {
        text-align: start;
        flex: 26% 1 1;

        > *:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  &.__text-alignment-center {
    .${ColumnContentClassName} {
      &__bottom {
        &__col {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    .${ColumnContentClassName} {
      &__bottom {
        flex-wrap: wrap;

        &__col {
          flex: 34% 1 1;
        }
      }
    }
  }

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    .btn.__btn-underline{
      margin-top:calc(${Root.Size}/2);
    }

    &.${ColumnContentBiColumnClassName} {
      .${ColumnContentClassName} {
        &__bottom {
          grid-template-columns: repeat(1,1fr);
        }
      }
    }

    .${ColumnContentClassName} {
      &__bottom {
        flex-direction: column;
        align-items: center;
        &__col {
          flex: 100% 0 0;
        }
      }
    }
  }
`;
