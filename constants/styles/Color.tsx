// Imports
/////////////////////////////////////////////////////////////////////

// Core
import { createGlobalStyle, css } from "styled-components";

// Utils
import { hexToRGB } from "../../utils/hexToRGB";

// Types
import { CMNC_Theme, CMNC_ThemeHexOnly } from "../Types";

// Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name Palette
 * @description Sitewide color palette. All all your colors here
 * @returns Hex & CSS Variable values for commonly used colors.
 *
 */

export const Palette = {
  Black: "#000000",
  Rust: "#CA690F",
  Brown: "#AB9E90",
  Tan: "#DAC9BA",
  OffWhite: "#FFF6EE",
  White: "#FFFFFF",
};

/**
 *
 * @name Theme
 * @description Sitewide color themes. Pull from your palette above to create all page/section themes. Always have a dark theme and light theme, even if you're not setting it based off of user settings
 *
 */

export const Themes = {
  // Dark Theme - always keep dark theme
  BackgroundDark: Palette.Black,
  TextDark: Palette.OffWhite,
  AccentDark: Palette.Brown,

  // Light Theme - always keep light theme
  BackgroundLight: Palette.OffWhite,
  TextLight: Palette.Black,
  AccentLight: Palette.Rust,

  //Tan Theme
  BackgroundTan: Palette.Tan,
  TextTan: Palette.Black,
  AccentTan: Palette.Rust,

  //If adding a new theme, add it to the PageTheme schema and the pageTheme type
};

export const Color = {
  // Dynamic Colors
  varForeground: (option?: string) =>
    option == "transparent"
      ? "var(--foregroundTransparent)"
      : "var(--foreground)",
  varBackground: (option?: string) =>
    option == "transparent"
      ? "var(--backgroundTransparent)"
      : "var(--background)",
  varAccent: (option?: string) =>
    option == "transparent" ? "var(--accentTransparent)" : "var(--accent)",
  varSelection: "var(--selection)",

  // Applied Palette
  Placeholder: "var(--placeholder)",
};

export class ColorUtils {
  /**
   *
   * @name SetTheme
   * @description For setting the current theme. Should be used within a
   * Styled Component css`` or createGlobalStyle``.
   * @param options {CMNC_ThemeHexOnly}
   * @returns A styled components css`` function.
   * @example
   * import { ColorUtils } from "../constants/ColorUtils"
   * ${ColorUtils.SetTheme(options)}
   *
   */
  static SetTheme = (options: CMNC_ThemeHexOnly) => {
    return css`
      :root {
        --foreground: ${hexToRGB(options.foreground, 1)} !important;
        --foregroundTransparent: ${hexToRGB(options.foreground, 0)} !important;

        --background: ${hexToRGB(options.background, 1)} !important;
        --backgroundTransparent: ${hexToRGB(options.background, 0)} !important;

        --accent: ${hexToRGB(options.accent, 1)} !important;
        --accentTransparent: ${hexToRGB(options.accent, 0)} !important;

        --placeholder: ${hexToRGB(options.foreground, 0.05)} !important;
        --selection: ${hexToRGB(options.selection, 1)} !important;
      }
    `;
  };

  /**
   *
   * @name SetThemeFromServer
   * @description For setting the current theme from the server object from Sanity.
   * @return A createGlobalStyle function.
   * @example
   * import { ColorUtils } from "../constants/ColorUtils"
   * ${ColorUtils.SetThemeFromServer(theme)}
   *
   */
  static SetThemeFromServer = (serverTheme: CMNC_Theme | undefined) => {
    if (serverTheme) {
      return createGlobalStyle`${ColorUtils.SetTheme({
        foreground: serverTheme.foreground
          ? serverTheme.foreground.hex
            ? serverTheme.foreground.hex
            : Themes.TextDark
          : Themes.TextDark,
        background: serverTheme.background
          ? serverTheme.background.hex
            ? serverTheme.background.hex
            : Themes.BackgroundDark
          : Themes.BackgroundDark,
        selection: serverTheme.selection
          ? serverTheme.selection.hex
            ? serverTheme.selection.hex
            : Themes.AccentDark
          : Themes.AccentDark,
        accent: serverTheme.accent
          ? serverTheme.accent.hex
            ? serverTheme.accent.hex
            : Themes.AccentDark
          : Themes.AccentDark,
      })}`;
    } else {
      return createGlobalStyle``;
    }
  };
}

/**
 *
 * @name CssPalette
 * @description The website CSS Palette
 * @returns A createGlobalStyle function.
 *
 */

export const CssPalette = createGlobalStyle`
  body {
    color: ${Color.varForeground()};
    background-color: ${Color.varBackground()};
  }

  a {
    color: ${Color.varForeground()};

    &:hover, &:visited {
      color: ${Color.varForeground()};
    }
  }

  ::-moz-selection { 
    background: ${Color.varSelection}; 
    color: ${Color.varBackground()} 
  }

  ::selection { 
    background: ${Color.varSelection}; 
    color: ${Color.varBackground()} 
  }


  //All of our page themes
  .__theme-tan {
    --foreground: ${Themes.TextTan};
    --foregroundTransparent: ${Themes.TextTan};
    --background: ${Themes.BackgroundTan};
    --backgroundTransparent: ${Themes.BackgroundTan};
    --accent: ${Themes.AccentTan};
    --selection: ${Themes.AccentTan};
  }

  .__theme-light {
    --foreground: ${Themes.TextLight};
    --foregroundTransparent: ${Themes.TextLight};
    --background: ${Themes.BackgroundLight};
    --backgroundTransparent: ${Themes.BackgroundLight};
    --accent: ${Themes.AccentLight};
    --selection: ${Themes.AccentLight};
  }

  .__theme-dark {
    --foreground: ${Themes.TextDark};
    --foregroundTransparent: ${Themes.TextDark};
    --background: ${Themes.BackgroundDark};
    --backgroundTransparent: ${Themes.BackgroundDark};
    --accent: ${Themes.AccentDark};
    --selection: ${Themes.AccentDark};
  }
    
`;

//////////////////////////////////////////////////////////////////////
// End Component
