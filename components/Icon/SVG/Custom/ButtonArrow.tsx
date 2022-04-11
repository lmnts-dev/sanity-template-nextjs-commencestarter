/**
 *
 * @author Alisha Garric
 * @description Button arrow
 *
 */

// Core
import React from "react";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const ButtonArrowClassName = "btn-arrow";
const ButtonArrow = () => (
  <span className={ButtonArrowClassName}>
    <svg x="0px" y="0px" width="97.1px" height="11px" viewBox="0 0 97.1 11">
      <g>
        <path
          d="M96.9,5l-4.8-4.8c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l3.5,3.5H63.4v1.5h31.2l-3.5,3.5c-0.3,0.3-0.3,0.8,0,1.1
        s0.8,0.3,1.1,0l4.8-4.8C97.2,5.8,97.2,5.3,96.9,5z"
        />
        <path
          d="M28.8,0.2c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l3.5,3.5H0v1.5h31.2l-3.5,3.5c-0.3,0.3-0.3,0.8,0,1.1
        c0.3,0.3,0.8,0.3,1.1,0l4.8-4.8c0.3-0.3,0.3-0.8,0-1.1L28.8,0.2z"
        />
      </g>
    </svg>
  </span>
);

export default ButtonArrow;
