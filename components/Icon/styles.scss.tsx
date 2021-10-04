// Widget Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";

// Constants
import { Root } from "../../constants/Root";
import { Color } from "../../constants/styles/Color";
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

const IconStyle = styled.span`
  font-size: ${Root.IconSize};
  line-height: 0;
  height: ${Root.IconSize};
  width: ${Root.IconSize};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${(props: {Color: string}) => props.Color ? props.Color : Color.varBackground()};

  svg {
    fill: ${(props: {Color: string}) => props.Color ? props.Color : Color.varBackground()};
  }
`;

export default IconStyle;
