/* eslint-disable */

// Font.js:
// This is the sitewide font reference.

import { createGlobalStyle } from "styled-components";
import { Base } from "./Base";

interface Font {
  Header: string;
  HeaderAlt: string;
  Body: string;
  Code: string;
  Size: {
    Sm: string;
    Md: string;
    Lg: string;
    ViewWidth: {
      Sm: string;
      Md: string;
      Lg: string;
    };
    ViewHeight: {
      Sm: string;
      Md: string;
      Lg: string;
    };
  };
  Icon: {
    Size: {
      Sm: string;
      Md: string;
      Lg: string;
    };
  };
}

export const Font: Font = {
  Body: `aktiv-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  HeaderAlt: `aktiv-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Header: `aktiv-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Size: {
    Sm: "1rem",
    Md: "1rem",
    Lg: "1rem",
    ViewWidth: {
      Sm: "6.8vw",
      Md: "5.2vw",
      Lg: "1.2vw",
    },
    ViewHeight: {
      Sm: "6.8vh",
      Md: "5.2vh",
      Lg: "2vh",
    },
  },
  Icon: {
    Size: {
      Sm: "8.5vw",
      Md: "8.5vw",
      Lg: "1.7vw",
    },
  },
};

// Global Type Styles
export const Typography = createGlobalStyle`

  /* Base Text Styles */
  body {
    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  /* Paragraph Styles */
  p, .p-lg, .p-sm, .p-xs {
    font-family: ${Font.Body};
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    padding-bottom: calc(var(--Size) / 3.5);
  }

  .p-lg {
    font-size: 1.15625rem;

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: .9rem;
    }
  }

  .p-sm {
    font-size: 0.9rem;

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: .85rem;
    }
  }

  .p-xs {
    font-size: 0.7875rem;

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: .75rem;
    }
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h6, .headline {
    font-family: ${Font.Header};
    font-weight: 400;
    line-height: 1.1;
    padding: 0 0 calc(var(--Size) / 3.5) 0;
    margin: 0;
    letter-spacing: -.03rem;

    &.alt {
      font-family: ${Font.HeaderAlt};
    }
  }

  /* Headings */

  h1, .h1 {
    font-size: 5rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 3rem;
    }
  }
  h2, .h2 {
    font-size: 3rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 2.5rem;
    }
  }
  h3, .h3 {
    font-size: 2rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.8rem;
    }
  }
  h4, .h4 {
    font-size: 1.75rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.6rem;
    }
  }
  h5, .h5 {
    font-size: 1.5rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.4rem;
    }
  }
  h6, .h6 {
    font-size: 1.25rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 1.2rem;
    }
  }

  .headline {
    font-family: ${Font.HeaderAlt};
    font-size: 7.25rem;
    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      font-size: 4rem;
    }
    @media (max-width: ${Base.Media.Width.Sm + "px"}) {
      font-size: 3.5rem;
    }
  }

  /* Captions */
  .txt-caption {
    text-transform: uppercase;
    letter-spacing: .25rem;
    font-size: .75rem;
    margin: 0 0 calc(var(--Size) / 3.5) 0;
    display: inline-block;
  }
`;
