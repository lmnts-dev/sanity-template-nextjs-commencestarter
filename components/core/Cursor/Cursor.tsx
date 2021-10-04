/**
 *
 * @author Alisha Garric
 * @description The website cursor
 *
 */

// Core
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Theme } from "../../../constants/Theme";

// Styles
import {
  CursorContainerStyle,
  CustomCursorClassName,
  CursorLinkActivatorClass,
  CursorDraggerActivatorClass,
  CursorDraggerClass,
  CursorNoneActivatorClass,
  CursorNoneClass,
  CursorLinkClass,
  CursorActiveClass,
  CursorTextClass,
  CursorTextActivatorClass,
} from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name useMousePosition
 * @description: custom hook that provides the position of the mouse
 *
 */
export const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

/**
 *
 * @name updateCursorClass
 * @description: custom hook that updates the cursor class so that the cursor can respond to whatever its hovering over
 *
 */
export const updateCursorClass = () => {
  const [cursorClass, setCursorClass] = useState({
    cursorClass: "",
  });

  const handleMouseOver = (e: any) => {
    if (e && e.target) {
      let classList = e.target.classList;
      let tagType = e.target.tagName;
      let inputType = e.target.getAttribute("type");

      if (classList.contains(CursorLinkActivatorClass)) {
        setCursorClass({
          cursorClass: CursorLinkClass,
        });
      } else if (classList.contains(CursorDraggerActivatorClass)) {
        setCursorClass({
          cursorClass: CursorDraggerClass,
        });
      } else if (classList.contains(CursorNoneActivatorClass)) {
        setCursorClass({
          cursorClass: CursorNoneClass,
        });
      } else if (classList.contains(CursorTextActivatorClass)) {
        setCursorClass({
          cursorClass: CursorTextClass,
        });
      } else if (
        (tagType == "INPUT" &&
          inputType != "radio" &&
          inputType != "checkbox") ||
        tagType == "TEXTAREA"
      ) {
        setCursorClass({
          cursorClass: CursorTextClass,
        });
      } else if (tagType == "A") {
        setCursorClass({
          cursorClass: CursorLinkClass,
        });
      } else {
        setCursorClass({
          cursorClass: "",
        });
      }
    }
  };

  const handleMouseDown = (e: any) => {
    if (!e.target.classList.contains(CursorDraggerActivatorClass)) {
      setCursorClass({
        cursorClass: CursorActiveClass,
      });
    }
  };

  const handleMouseUp = (e: any) => {
    handleMouseOver(e);
  };

  useEffect(() => {
    document.addEventListener("mouseover", handleMouseOver, false);
    document.addEventListener("mousedown", handleMouseDown, false);
    document.addEventListener("mouseup", handleMouseUp, false);

    return () => {
      document.addEventListener("mouseover", handleMouseOver, false);
      document.addEventListener("mousedown", handleMouseDown, false);
      document.addEventListener("mouseup", handleMouseUp, false);
    };
  }, []);

  return cursorClass;
};

/**
 *
 * @name Cursor
 * @description: The custom cursor itself
 *
 */
export const Cursor: React.FunctionComponent<any> = ({}) => {
  const { clientX, clientY } = useMousePosition();
  const { cursorClass } = updateCursorClass();

  const ResetDefaultCursor = createGlobalStyle`
    * {
    cursor: none !important;

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      cursor: crosshair !important;
    }
  }`;

  return (
    <>
      <ResetDefaultCursor />
      <CursorContainerStyle
        className={`${CustomCursorClassName} ${cursorClass}`}
      >
        <div
          style={{ left: clientX, top: clientY }}
          className={`${CustomCursorClassName}__pointer`}
        >
          <span className={`${CustomCursorClassName}__pointer__arrows`} />
        </div>
      </CursorContainerStyle>
    </>
  );
};

export default Cursor;
