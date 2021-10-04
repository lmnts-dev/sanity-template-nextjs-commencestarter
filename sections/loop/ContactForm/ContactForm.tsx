/**
 *
 * @author Alisha Garric
 * @description Contact form section
 *
 */

// Core
import React from "react";

// Styles
import { ContactFormClassName, ContactFormStyle } from "./styles.scss";
import { CMNC_SectionSpacingObject, CMNC_Cta } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { CursorLinkActivatorClass } from "../../../components/core/Cursor/styles.scss";
import { Cta } from "../../../components/Cta";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ContactForm_Schema = CMNC_SectionSpacingObject & {
  caption?: string;
  headline: string;
  cta?: CMNC_Cta;
  form?: {
    submitLabel: string;
    formspreeSubmissionLink: string;
    fieldsSections?: {
      overrideNumberLabel?: string;
      title?: string;
      fields?: (
        | CMNC_ContactForm_TextField
        | CMNC_ContactForm_RadioField
        | CMNC_ContactForm_CheckboxField
        | CMNC_ContactForm_TextareaField
      )[];
    }[];
  };
  sectionTheme?: CMNC_SectionTheme;
};

type CMNC_ContactForm_TextField = {
  _type: "textField";
  label: string;
  required?: boolean;
};

type CMNC_ContactForm_TextareaField = {
  _type: "textareaField";
  label: string;
  required?: boolean;
};

type CMNC_ContactForm_RadioField = {
  _type: "radioField";
  options: string[];
  required?: boolean;
};

type CMNC_ContactForm_CheckboxField = {
  _type: "checkboxField";
  options: string[];
  required?: boolean;
};

type CMNC_ContactForm = {
  schema: CMNC_ContactForm_Schema;
  addClass?: string;
};

export const ContactForm: React.FunctionComponent<CMNC_ContactForm> = ({
  schema,
  addClass,
}) => {
  let { caption, headline, cta, form, spacing, sectionTheme } = schema;

  let replyTo: boolean = false;

  return (
    <ContactFormStyle
      className={`${ContactFormClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      <div className={`${ContactFormClassName}__text-content`}>
        {caption && (
          <span
            className={`${ContactFormClassName}__text-content__caption txt-caption add-knotch`}
          >
            {caption}
          </span>
        )}
        <h1 className={`${ContactFormClassName}__text-content__headline alt`}>
          {headline}
        </h1>
      </div>

      {form &&
        form.formspreeSubmissionLink &&
        form.fieldsSections &&
        form.fieldsSections.length > 0 && (
          <div className={`${ContactFormClassName}__form-container`}>
            <form
              action={form.formspreeSubmissionLink}
              method="POST"
              className={`${ContactFormClassName}__form-container__form`}
            >
              {form.fieldsSections.map((section, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={`${ContactFormClassName}__form-section`}
                  >
                    <p
                      className={`${ContactFormClassName}__form-section__number`}
                    >
                      {section.overrideNumberLabel
                        ? section.overrideNumberLabel
                        : idx < 9
                        ? `0${idx + 1}`
                        : idx + 1}
                    </p>
                    {section.title && (
                      <p
                        className={`${ContactFormClassName}__form-section__title`}
                      >
                        {section.title}
                      </p>
                    )}
                    {section.fields &&
                      section.fields.length > 0 &&
                      section.fields.map((field, idxx: number) => {
                        if (field._type == "textField") {
                          if (
                            (field.label.indexOf("email") != -1 ||
                              field.label.indexOf("Email") != -1) &&
                            replyTo == false
                          ) {
                            replyTo = true;
                            return (
                              <div
                                key={idxx}
                                className={`${ContactFormClassName}__form-section__field-container`}
                              >
                                <input
                                  type="email"
                                  name="_replyto"
                                  required={true}
                                  placeholder={field.label}
                                />
                              </div>
                            );
                          } else {
                            return (
                              <div
                                key={idxx}
                                className={`${ContactFormClassName}__form-section__field-container`}
                              >
                                <input
                                  type="text"
                                  name={`${field.label} (${idx.toString()})`}
                                  required={field.required}
                                  placeholder={field.label}
                                />
                              </div>
                            );
                          }
                        } else if (field._type == "textareaField") {
                          return (
                            <div
                              key={idxx}
                              className={`${ContactFormClassName}__form-section__field-container`}
                            >
                              <textarea
                                required={field.required}
                                name={`${field.label} (${idx.toString()})`}
                                placeholder={field.label}
                              />
                            </div>
                          );
                        } else {
                          let type =
                            field._type == "checkboxField"
                              ? "checkbox"
                              : "radio";
                          return field.options.map((option, idxxx) => {
                            return (
                              <div
                                key={idxxx}
                                className={`${ContactFormClassName}__form-section__field-container __checkbox-or-radio`}
                              >
                                <input
                                  id={option + idxxx}
                                  type={type}
                                  required={field.required}
                                  value={option}
                                  name={`${
                                    section.title ? section.title : ""
                                  } (${idx.toString()})`}
                                />
                                <label htmlFor={option + idxxx}>{option}</label>
                              </div>
                            );
                          });
                        }
                      })}
                  </div>
                );
              })}

              <button type="submit" className={CursorLinkActivatorClass}>
                {form.submitLabel ? form.submitLabel : "Submit"}
              </button>
            </form>
          </div>
        )}
      {/* CTA///////////// */}
      <Cta cta={cta} addClass={`btn add-knotch add-knotch-indent`} />
    </ContactFormStyle>
  );
};

ContactForm.displayName = "ContactForm";

// End Component
//////////////////////////////////////////////////////////////////////
