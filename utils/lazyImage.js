import React from "react";
import LazyLoad from "vanilla-lazyload";

/**
 *
 * @name LazyImage.tsx
 * @author Peter Laxalt
 * @description Lazy Image Component
 * @example
 * <LazyImage
 *   src={`${urlFor(image).width(2000).auto("format").url()}`}
 *   alt={headline + ": " + subheadline}
 *   title={headline + ": " + subheadline}
 *   aspectRatio={`${image.metadata ? image.metadata.dimensions.aspectRatio : -1}`}
 * />
 */
export class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    if (!document.lazyLoadInstance) {
      // @ts-ignore
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
      });
    }

    // @ts-ignore
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    // @ts-ignore
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    // @ts-ignore
    const {
      alt,
      src,
      srcset,
      sizes,
      width,
      height,
      aspectRatio,
      style,
    } = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
        style={style}
        data-aspect-ratio={aspectRatio}
      />
    );
  }
}

export default LazyImage;
