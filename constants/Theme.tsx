/**
 *
 * Theme.js:
 * @author Alisha Garric
 * @description Used to append units to the end of variables
 */

// Imports
//////////////////////////////////////////////////////////////////////

import { Settings } from "./site/Settings";
import { Font } from "./styles/Font";
import { Base } from "./styles/Base";
import { Color } from "./styles/Color";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Theme = {
  // General Site Information & Keywords
  Site: Settings,

  // Fonts throughout the app.
  Font: Font,

  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: Base.Size.Lg + "px",
      Md: Base.Size.Md + "px",
      Sm: Base.Size.Sm + "px",
    },

    // Root Element Measurement
    Rem: {
      Lg: Base.Rem.Lg + "px", // px
      Md: Base.Rem.Md + "px", // px
      Sm: Base.Rem.Sm + "px", // px
    },

    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: Base.Media.Width.Lg + "px",
        Md: Base.Media.Width.Md + "px",
        Sm: Base.Media.Width.Sm + "px",
      },
      Height: {
        Lg: Base.Media.Height.Lg + "px",
        Md: Base.Media.Height.Md + "px",
        Sm: Base.Media.Height.Sm + "px",
      },
    },

    // Site Grid
    Grid: {
      SiteWidth: Base.Grid.SiteWidth + "px",
      ReadingWidth: Base.Grid.ReadingWidth + "px",
      Nav: {
        Size: {
          Lg: Base.Grid.Nav.Size.Lg + "px",
          Md: Base.Grid.Nav.Size.Md + "px",
          Sm: Base.Grid.Nav.Size.Sm + "px",
        },
      },

      Footer: {
        Size: {
          Lg: Base.Grid.Footer.Size.Lg + "px",
          Md: Base.Grid.Footer.Size.Md + "px",
          Sm: Base.Grid.Footer.Size.Sm + "px",
        },
      },

      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Right: Base.Grid.Gutter.Lg.Right + "px",
          Left: Base.Grid.Gutter.Lg.Left + "px",
        },
        Md: {
          Right: Base.Grid.Gutter.Md.Right + "px",
          Left: Base.Grid.Gutter.Md.Left + "px",
        },
        Sm: {
          Right: Base.Grid.Gutter.Sm.Right + "px",
          Left: Base.Grid.Gutter.Sm.Left + "px",
        },
      },

      Indent: {
        Lg: {
          X: Base.Grid.Indent.Lg.X + "vw", // vw
          Y: Base.Grid.Indent.Lg.Y + "vw", // px
        },
        Md: {
          X: Base.Grid.Indent.Md.X + "vw", // px
          Y: Base.Grid.Indent.Md.Y + "vw", // px
        },
        Sm: {
          X: Base.Grid.Indent.Sm.X + "vw", // px
          Y: Base.Grid.Indent.Sm.Y + "vw", // px
        },
      },

      Section: {
        Lg: Base.Grid.Section.Lg + "px",
        Md: Base.Grid.Section.Md + "px",
        Sm: Base.Grid.Section.Sm + "px",
      },
    },

    // View Width (vw) Based Measurements
    ViewWidth: {
      Padding: {
        Sm: Base.ViewWidth.Padding.Sm + "vw",
        Md: Base.ViewWidth.Padding.Md + "vw",
        Lg: Base.ViewWidth.Padding.Lg + "vw",
      },
    },

    // Buttons
    Button: {
      Lg: Base.Button.Lg + "px",
      Md: Base.Button.Md + "px",
      Sm: Base.Button.Sm + "px",
    },

    // Inputs
    Input: {
      Lg: Base.Input.Lg + "px",
      Md: Base.Input.Md + "px",
      Sm: Base.Input.Sm + "px",
    },

    // Transitions
    Transition: {
      String: Base.Transition.String, // seconds
      Duration: Base.Transition.Duration + "s", // seconds
      Ease: Base.Transition.Ease, // Cubic Bezier Ease
      CssEase:
        "cubic-bezier(" +
        Base.Transition.Ease[0] +
        ", " +
        Base.Transition.Ease[1] +
        ", " +
        Base.Transition.Ease[2] +
        ", " +
        Base.Transition.Ease[3] +
        ")", // Cubic Bezier Ease (CSS String)
      Page: Base.Transition.Page + "s", // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
    },

    // Geometry
    Geometry: {
      Radius: Base.Geometry.Radius + "px", // px
    },
  },

  // Core Palette & Colors
  Color: Color,
};

// End Component
//////////////////////////////////////////////////////////////////////
