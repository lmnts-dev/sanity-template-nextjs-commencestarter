// Imports
// __________________________________________________________________________________________

// Core
import styled from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Color } from "../../../constants/styles/Color";


// Helpers

// Begin Styles
// __________________________________________________________________________________________

/**
 *
 * @name MasonryGalleryStyle
 *
 */

export const MasonryGalleryClassName = "masonry-gallery";

export const MasonryGalleryStyle = styled.section`
  --masonryGalleryGap: calc(${Root.Size} / 2);

  .${MasonryGalleryClassName} {
    &__grid {
      display: flex;
      gap: var(--masonryGalleryGap);
      width: auto;

      &__column {
        display: flex;
        flex-direction: column;

        &__image {
          background: ${Color.Placeholder};
          margin-bottom: var(--masonryGalleryGap) !important;
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Sm + "px"}) {
    --masonryGalleryGap: calc(${Root.Size} / 4);
  }
`;