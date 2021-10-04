/**
 *
 * @author Alisha Garric
 * @description Theme toggle from light mode to dark mode.
 *
 */

// Core
import React, { Component } from "react";
import { Themes } from "../../constants/styles/Color";
import { hexToRGB } from "../../utils/hexToRGB";
import { createGlobalStyle, css } from "styled-components";

// Styles
import {
  ThemeToggleActiveClassName,
  ThemeToggleClassName,
  ThemeToggleStyle,
} from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_ThemeToggle = {};

export type CMNC_ThemeToggle_State = {
  reverseBrowserPreferredTheme: boolean;
};

/**
 *
 * @name DarkTheme
 * @description Your site's dark theme
 *
 */

let DarkTheme = css`
  :root {
    --foreground: ${hexToRGB(Themes.TextDark, 1)} !important;
    --foregroundTransparent: ${hexToRGB(Themes.TextDark, 0)} !important;

    --background: ${hexToRGB(Themes.BackgroundDark, 1)} !important;
    --backgroundTransparent: ${hexToRGB(Themes.BackgroundDark, 0)} !important;

    --accent: ${hexToRGB(Themes.AccentDark, 1)} !important;
    --accentTransparent: ${hexToRGB(Themes.AccentDark, 0)} !important;

    --placeholder: ${hexToRGB(Themes.TextDark, 0.05)} !important;
    --selection: ${hexToRGB(Themes.AccentDark, 1)} !important;
  }
`;

/**
 *
 * @name LightTheme
 * @description Your site's light theme
 *
 */

let LightTheme = css`
  :root {
    --foreground: ${hexToRGB(Themes.TextLight, 1)} !important;
    --foregroundTransparent: ${hexToRGB(Themes.TextLight, 0)} !important;

    --background: ${hexToRGB(Themes.BackgroundLight, 1)} !important;
    --backgroundTransparent: ${hexToRGB(Themes.BackgroundLight, 0)} !important;

    --accent: ${hexToRGB(Themes.AccentLight, 1)} !important;
    --accentTransparent: ${hexToRGB(Themes.AccentLight, 0)} !important;

    --placeholder: ${hexToRGB(Themes.TextLight, 0.05)} !important;
    --selection: ${hexToRGB(Themes.AccentLight, 1)} !important;
  }
`;

export class ThemeToggle extends Component<
  CMNC_ThemeToggle,
  CMNC_ThemeToggle_State
> {
  constructor(props: CMNC_ThemeToggle) {
    super(props);

    this.state = {
      reverseBrowserPreferredTheme: false,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.setBrowserPreferredTheme = this.setBrowserPreferredTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      reverseBrowserPreferredTheme: !this.state.reverseBrowserPreferredTheme,
    });
  }

  setBrowserPreferredTheme(reversed?: boolean) {
    if (reversed == true) {
      return createGlobalStyle`
        ${LightTheme}

        @media (prefers-color-scheme: light) {
          ${DarkTheme}
        }
      `;
    } else {
      return createGlobalStyle`
        ${DarkTheme}
        
        @media (prefers-color-scheme: light) {
          ${LightTheme}
        }
      `;
    }
  }

  render() {
    let { reverseBrowserPreferredTheme } = this.state;
    let ReversedBrowserSetTheme = this.setBrowserPreferredTheme(true);
    let BrowserSetTheme = this.setBrowserPreferredTheme();

    return (
      <ThemeToggleStyle
        className={`${ThemeToggleClassName} ${
          reverseBrowserPreferredTheme ? `__${ThemeToggleActiveClassName}` : ""
        }`}
        onClick={() => this.toggleTheme()}
      >
        {/* Light Toggle */}
        <button
          className={`${ThemeToggleClassName}__button ${ThemeToggleClassName}__button--light`}
          aria-label="Light"
        >
          <Sun />
        </button>

        {/* Dark Toggle */}
        <button
          className={`${ThemeToggleClassName}__button ${ThemeToggleClassName}__button--dark`}
          aria-label="Dark"
        />

        {reverseBrowserPreferredTheme ? (
          <ReversedBrowserSetTheme />
        ) : (
          <BrowserSetTheme />
        )}
      </ThemeToggleStyle>
    );
  }
}

export const Sun = () => {
  return (
    <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.91352 1.9214V0H6.07812V1.9214C6.36087 1.8957 6.6372 1.8957 6.91352 1.9214Z" />
      <path d="M11.0781 6.91449H12.9995V6.0791H11.0781C11.0974 6.36185 11.0974 6.63817 11.0781 6.91449Z" />
      <path d="M6.07812 11.0786V13H6.91352V11.0786C6.6372 11.0979 6.36087 11.0979 6.07812 11.0786Z" />
      <path d="M1.9214 6.0791H0V6.91449H1.9214C1.8957 6.63817 1.8957 6.36185 1.9214 6.0791Z" />
      <path d="M10.0307 3.56022L11.393 2.19789L10.8018 1.60669L9.43945 2.96902C9.5487 3.05899 9.65151 3.14895 9.74791 3.25177C9.85072 3.34816 9.94069 3.45098 10.0307 3.56022Z" />
      <path d="M9.43945 10.0311L10.8018 11.3935L11.393 10.8023L10.0307 9.43994C9.94069 9.54919 9.85072 9.652 9.74791 9.74839C9.64509 9.84479 9.54227 9.94118 9.43945 10.0311Z" />
      <path d="M2.9678 9.43994L1.60547 10.8023L2.19667 11.3935L3.559 10.0311C3.44976 9.94118 3.34694 9.85121 3.25055 9.74839C3.14773 9.652 3.05777 9.54276 2.9678 9.43994Z" />
      <path d="M3.559 2.96902L2.19667 1.60669L1.60547 2.19789L2.9678 3.56022C3.05777 3.45098 3.14773 3.34816 3.25055 3.25177C3.34694 3.14895 3.44976 3.05899 3.559 2.96902Z" />
      <path d="M6.49774 10.1918C8.53844 10.1918 10.1928 8.53746 10.1928 6.49677C10.1928 4.45607 8.53844 2.80176 6.49774 2.80176C4.45705 2.80176 2.80273 4.45607 2.80273 6.49677C2.80273 8.53746 4.45705 10.1918 6.49774 10.1918Z" />
    </svg>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
