/**
 *
 * @author Alisha Garric
 * @description The newsletter form
 *
 */

// Core
import React from "react";

// Styles
import { NewsletterFormClassName, NewsletterFormStyle } from "./styles.scss";
import { CMNC_Newsletter_Form } from "../../constants/Types";

// Begin Component
//////////////////////////////////////////////////////////////////////

export const NewsletterForm: React.FunctionComponent<CMNC_Newsletter_Form> = ({
  formspree_endpoint,
  headline,
  subheadline,
  submitText,
  placeholder,
}) => {
  return (
    <NewsletterFormStyle
      className={`${NewsletterFormClassName}`}
      action={formspree_endpoint}
      method="POST"
    >
      <label htmlFor="email">
        <h2>{headline}</h2>
        <h3>{subheadline}</h3>
      </label>
      <div className={`${NewsletterFormClassName}__email`}>
        <input name="email" type="text" required placeholder={placeholder} />
        <button type="submit" aria-label={submitText} className={`btn`}>
          {submitText}
        </button>
      </div>
    </NewsletterFormStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
