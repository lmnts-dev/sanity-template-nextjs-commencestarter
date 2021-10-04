/**
 *
 * createTheme.tsx
 * @author Alisha Garric
 *
 */

import { createGlobalStyle } from "styled-components";
import { ColorUtils, Themes } from "../constants/styles/Color";
import { CMNC_PageTheme, CMNC_SectionTheme } from "../constants/Types";
import { upperFirst } from "lodash";

export const createTheme = (
  theme: CMNC_PageTheme | CMNC_SectionTheme | undefined
) => {
  if (theme && theme != "default") {
    let backgroundThemeName = "Background" + upperFirst(theme);
    let foregroundThemeName = "Text" + upperFirst(theme);
    let accentThemeName = "Accent" + upperFirst(theme);

    return createGlobalStyle` ${ColorUtils.SetTheme({
      //@ts-ignore
      background: Themes[backgroundThemeName],
      //@ts-ignore
      foreground: Themes[foregroundThemeName],
      //@ts-ignore
      accent: Themes[accentThemeName],
      //@ts-ignore
      selection: Themes[accentThemeName],
    })}`;
  } else return false;
};
