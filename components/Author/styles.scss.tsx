/**
 *
 * @author Alisha Garric
 * @description Author styles
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";

// Constants

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ArticleAuthorClassName = "article-author";

export const ArticleAuthorStyle = styled.div`
  display: flex;
  border-radius: 50%;

  .${ArticleAuthorClassName}__container {
    height: 28px;
    width: 28px;
    margin-right: calc(${Root.Size} / 6);
    border-radius: 50%;
    background: ${Theme.Color.Placeholder};
    position: relative;
    overflow: hidden;
  }

  .${ArticleAuthorClassName}__name {
    opacity: 0.5;
    font-weight: 700;
    padding-bottom: 0;
    font-size: var(--pSize);
  }
`;
