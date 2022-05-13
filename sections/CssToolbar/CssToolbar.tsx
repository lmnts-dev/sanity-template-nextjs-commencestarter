/**
 *
 * @author Jose Rios
 * @description CSS Options Toolbar
 *
 */

// Core
import React, { useState } from "react";

// Styles
import { CssToolbarClassName, CssToolbarStyle } from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { CMNC_SectionTheme } from "../../constants/Types";
import { createGlobalStyle } from "styled-components";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_CssToolbar_Schema = {
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_CssToolbar = {
  schema: CMNC_CssToolbar_Schema;
  addClass?: string;
};

export const CssToolbar: React.FunctionComponent<CMNC_CssToolbar> = ({
  schema,
  addClass,
}) => {
  let { sectionTheme } = schema;

  const [opened, setOpened] = useState(false);

  const [paragraphSize, setParagraphSize] = useState(16);
  const [h1Size, setH1Size] = useState(80);
  const [h2Size, setH2Size] = useState(48);
  const [h3Size, setH3Size] = useState(32);
  const [h4Size, setH4Size] = useState(28);
  const [h5Size, setH5Size] = useState(24);
  const [h6Size, setH6Size] = useState(20);
  const [captionSize, setCaptionSize] = useState(12);

  const [paragraphWeight, setParagraphWeight] = useState(16);
  const [h1Weight, setH1Weight] = useState(80);
  const [h2Weight, setH2Weight] = useState(48);
  const [h3Weight, setH3Weight] = useState(32);
  const [h4Weight, setH4Weight] = useState(28);
  const [h5Weight, setH5Weight] = useState(24);
  const [h6Weight, setH6Weight] = useState(20);
  const [captionWeight, setCaptionWeight] = useState(12);

  const [paragraphFontFamily, setParagraphFontFamily] = useState("");
  const [headerFontFamily, setHeaderFontFamily] = useState("");

  const [foregroundColor, setForegroundColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("#FEF6ED");
  const [accentColor, setAccentColor] = useState("grey");
  const [placeholderColor, setPlaceholderColor] = useState("black");

  const updatePragraphSize = (e: any) => {
    setParagraphSize(e.target.value);
  };

  const updateH1Size = (e: any) => {
    setH1Size(e.target.value);
  };

  const updateH2Size = (e: any) => {
    setH2Size(e.target.value);
  };

  const updateH3Size = (e: any) => {
    setH3Size(e.target.value);
  };

  const updateH4Size = (e: any) => {
    setH4Size(e.target.value);
  };

  const updateH5Size = (e: any) => {
    setH5Size(e.target.value);
  };

  const updateH6Size = (e: any) => {
    setH6Size(e.target.value);
  };

  const updateCaptionSize = (e: any) => {
    setCaptionSize(e.target.value);
  };

  const updatePragraphWeight = (e: any) => {
    setParagraphWeight(e.target.value);
  };

  const updateH1Weight = (e: any) => {
    setH1Weight(e.target.value);
  };

  const updateH2Weight = (e: any) => {
    setH2Weight(e.target.value);
  };

  const updateH3Weight = (e: any) => {
    setH3Weight(e.target.value);
  };

  const updateH4Weight = (e: any) => {
    setH4Weight(e.target.value);
  };

  const updateH5Weight = (e: any) => {
    setH5Weight(e.target.value);
  };

  const updateH6Weight = (e: any) => {
    setH6Weight(e.target.value);
  };

  const updateCaptionWeight = (e: any) => {
    setCaptionWeight(e.target.value);
  };

  const updateParagraphFontFamily = (e: any) => {
    setParagraphFontFamily(e.target.value);
  };

  const updateHeaderFontFamily = (e: any) => {
    setHeaderFontFamily(e.target.value);
  };

  const updateForegroundColor = (e: any) => {
    setForegroundColor(e.target.value);
  };

  const updateBackgroundColor = (e: any) => {
    setBackgroundColor(e.target.value);
  };

  const updateAccentColor = (e: any) => {
    setAccentColor(e.target.value);
  };

  const updatePlaceholderColor = (e: any) => {
    setPlaceholderColor(e.target.value);
  };

  const ToolbarStyling = createGlobalStyle`

      :root {
        --foreground: ${foregroundColor}!important;
        --background: ${backgroundColor}!important;
        --accent: ${accentColor}!important;
        --placeholder: ${placeholderColor}!important;
      }

      p, .p{
        font-size: ${paragraphSize}px;
        font-family: ${paragraphFontFamily};
        font-weight: ${paragraphWeight};
      }

      h1,h2,h3,h4,h5,h6, .h1, .h2, .h3, h4, .h5, .h6{
        font-family: ${headerFontFamily};
      }

      h1, .h1{
        font-size: ${h1Size}px;
        font-weight: ${h1Weight};
      }

      h2, .h2{
        font-size: ${h2Size}px;
        font-weight: ${h2Weight};
      }
      
      h3, .h3{
        font-size: ${h3Size}px;
        font-weight: ${h3Weight};
      }

      h4, .h4{
        font-size: ${h4Size}px;
        font-weight: ${h4Weight};
      }

      h5, .h5{
        font-size: ${h5Size}px;
        font-weight: ${h5Weight};
      }

      h6, .h6{
        font-size: ${h6Size}px;
        font-weight: ${h6Weight};
      }

      .txt-caption{
        font-size: ${captionSize}px;
        font-weight: ${captionWeight};
      }
    }`;

  return (
    <>
      <ToolbarStyling />
      <CssToolbarStyle
        className={`${CssToolbarClassName} ${sectionSpacing()} ${addClass}  ${
          sectionTheme ? `__theme-${sectionTheme}` : ""
        } ${opened ? "__open" : ""}`}
      >
        <div className={`toggle`} onClick={() => setOpened(!opened)}>
          <span>^</span>
        </div>

        <div className="fontSizes">
          <h3 className="h4">Font Size:</h3>
          <div>
            <label htmlFor="paragraph">Paragraph:</label>
            <input
              onChange={(e) => updatePragraphSize(e)}
              className="spec-sheets__search__input"
              type="number"
              id="paragraph"
              name="paragraph"
            />
          </div>

          <div>
            <label htmlFor="h1">H1:</label>
            <input
              onChange={(e) => updateH1Size(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h1"
              name="h1"
            />
          </div>

          <div>
            <label htmlFor="h2">H2:</label>
            <input
              onChange={(e) => updateH2Size(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h2"
              name="h2"
            />
          </div>

          <div>
            <label htmlFor="h3">H3:</label>
            <input
              onChange={(e) => updateH3Size(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h3"
              name="h3"
            />
          </div>

          <div>
            <label htmlFor="h4">H4:</label>
            <input
              onChange={(e) => updateH4Size(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h4"
              name="h4"
            />
          </div>

          <div>
            <label htmlFor="h5">H5:</label>
            <input
              onChange={(e) => updateH5Size(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h5"
              name="h5"
            />
          </div>

          <div>
            <label htmlFor="h6">H6:</label>
            <input
              onChange={(e) => updateH6Size(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h6"
              name="h6"
            />
          </div>

          <div>
            <label htmlFor="caption">Caption:</label>
            <input
              onChange={(e) => updateCaptionSize(e)}
              className="spec-sheets__search__input"
              type="number"
              id="caption"
              name="caption"
            />
          </div>
        </div>

        <div className="fontFamilies">
          <h3 className="h4">Font Family:</h3>
          <div>
            <label htmlFor="pFontFamily">Paragraph:</label>
            <input
              onChange={(e) => updateParagraphFontFamily(e)}
              className="spec-sheets__search__input"
              type="text"
              id="pFontFamily"
              name="pFontFamily"
            />
          </div>
          <div>
            <label htmlFor="headerFontFamily">Header:</label>
            <input
              onChange={(e) => updateHeaderFontFamily(e)}
              className="spec-sheets__search__input"
              type="text"
              id="headerFontFamily"
              name="headerFontFamily"
            />
          </div>
        </div>

        <div className="fontWeights">
          <h3 className="h4">Font Weights:</h3>
          <div>
            <label htmlFor="paragraph">Paragraph:</label>
            <input
              onChange={(e) => updatePragraphWeight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="paragraph"
              name="paragraph"
            />
          </div>

          <div>
            <label htmlFor="h1">H1:</label>
            <input
              onChange={(e) => updateH1Weight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h1"
              name="h1"
            />
          </div>

          <div>
            <label htmlFor="h2">H2:</label>
            <input
              onChange={(e) => updateH2Weight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h2"
              name="h2"
            />
          </div>

          <div>
            <label htmlFor="h3">H3:</label>
            <input
              onChange={(e) => updateH3Weight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h3"
              name="h3"
            />
          </div>

          <div>
            <label htmlFor="h4">H4:</label>
            <input
              onChange={(e) => updateH4Weight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h4"
              name="h4"
            />
          </div>

          <div>
            <label htmlFor="h5">H5:</label>
            <input
              onChange={(e) => updateH5Weight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h5"
              name="h5"
            />
          </div>

          <div>
            <label htmlFor="h6">H6:</label>
            <input
              onChange={(e) => updateH6Weight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="h6"
              name="h6"
            />
          </div>

          <div>
            <label htmlFor="caption">Caption:</label>
            <input
              onChange={(e) => updateCaptionWeight(e)}
              className="spec-sheets__search__input"
              type="number"
              id="caption"
              name="caption"
            />
          </div>
        </div>

        <div className="colors">
          <h3 className="h4">Colors:</h3>
          <div>
            <label htmlFor="foregroundColor">Foreground:</label>
            <input
              onChange={(e) => updateForegroundColor(e)}
              className="spec-sheets__search__input"
              type="text"
              id="foregroundColor"
              name="foregroundColor"
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background:</label>
            <input
              onChange={(e) => updateBackgroundColor(e)}
              className="spec-sheets__search__input"
              type="text"
              id="backgroundColor"
              name="backgroundColor"
            />
          </div>

          <div>
            <label htmlFor="accentColor">Accent:</label>
            <input
              onChange={(e) => updateAccentColor(e)}
              className="spec-sheets__search__input"
              type="text"
              id="accentColor"
              name="accentColor"
            />
          </div>

          <div>
            <label htmlFor="placeholderColor">Placeholder:</label>
            <input
              onChange={(e) => updatePlaceholderColor(e)}
              className="spec-sheets__search__input"
              type="text"
              id="placeholderColor"
              name="placeholderColor"
            />
          </div>
        </div>
      </CssToolbarStyle>
    </>
  );
};

CssToolbar.displayName = "CssToolbar";

// End Component
//////////////////////////////////////////////////////////////////////
