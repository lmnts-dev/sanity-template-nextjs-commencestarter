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
import { CMNC_SectionSpacingObject } from "../../../constants/Types";
import { CMNC_SectionTheme } from "../../../constants/Types";
import { sectionSpacing } from "../../../utils/sectionSpacing";
import { PortableText } from "../../../utils/sanity";
import { useRouter } from "next/router";
import { useForm } from "@formspree/react";

// Begin Component
//////////////////////////////////////////////////////////////////////

type CMNC_ContactForm_Schema = CMNC_SectionSpacingObject & {
  blockBasic?: string;
  form?: CMNC_ContactFormForm;
  sectionTheme?: CMNC_SectionTheme;
};

export type CMNC_ContactFormForm = {
  submitLabel: string;
  formspreeSubmissionLink: string;
  fieldsSections: {
    title?: string;
    description?: string;
    fields: (
      | CMNC_ContactForm_TextField
      | CMNC_ContactForm_RadioField
      | CMNC_ContactForm_CheckboxField
      | CMNC_ContactForm_TextareaField
    )[];
  }[];
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
  let { form, blockBasic, spacing, sectionTheme } = schema;
  let replyTo: boolean = false;

  //Grab router so we can pull the results from the query
  const router = useRouter();
  let { query } = router;
  let prefilledValue: string | string[] | undefined;

  const queryArrayToString = (query: string | string[] | undefined) => {
    return query ? (Array.isArray(query) ? query[0] : query) : undefined;
  };

  const [state, handleSubmit] = useForm(
    `${form?.formspreeSubmissionLink.substring(
      form.formspreeSubmissionLink.lastIndexOf("/") + 1
    )}`
  );

  return (
    <ContactFormStyle
      className={`${ContactFormClassName} ${sectionSpacing(
        spacing
      )} ${addClass} ${sectionTheme ? `__theme-${sectionTheme}` : ""}`}
    >
      {blockBasic && (
        <div className={`${ContactFormClassName}__text`}>
          <PortableText blocks={blockBasic} />
        </div>
      )}
      {form &&
        !state.succeeded &&
        form.formspreeSubmissionLink &&
        form.fieldsSections &&
        form.fieldsSections.length > 0 && (
          <div className={`${ContactFormClassName}__form-container`}>
            <form
              onSubmit={handleSubmit}
              className={`${ContactFormClassName}__form-container__form`}
            >
              {form.fieldsSections.map((section, idx: number) => {
                return (
                  <>
                    {section.title && (
                      <p
                        className={`${ContactFormClassName}__form-section__title h5`}
                      >
                        {section.title}
                      </p>
                    )}
                    {section.description && (
                      <p
                        className={`${ContactFormClassName}__form-section__description p-sm`}
                      >
                        {section.description}
                      </p>
                    )}
                    <div
                      key={idx}
                      className={`${ContactFormClassName}__form-section`}
                    >
                      {section.fields &&
                        section.fields.length > 0 &&
                        section.fields.map((field, idxx: number) => {
                          if (field._type == "textField") {
                            //Pull prefilled fields from query if they exist and store them
                            if (query) {
                              prefilledValue = queryArrayToString(
                                query[field.label]
                              );
                            } else {
                              prefilledValue = undefined;
                            }

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
                                    value={prefilledValue}
                                  />
                                  <label
                                    className={`${ContactFormClassName}__form-section__label`}
                                  >
                                    {field.label}
                                  </label>
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
                                    value={prefilledValue}
                                  />
                                  <label
                                    className={`${ContactFormClassName}__form-section__label`}
                                  >
                                    {field.label}
                                  </label>
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
                            return (
                              <div
                                className={`${ContactFormClassName}__form-section__checkbox-or-radio-options`}
                                key={idxx}
                              >
                                {field.options.map((option, idxxx) => {
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
                                      <label htmlFor={option + idxxx}>
                                        {option}
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        })}
                    </div>
                  </>
                );
              })}

              <button
                type="submit"
                className={`${ContactFormClassName}__btn btn`}
                disabled={state.submitting}
              >
                {form.submitLabel ? form.submitLabel : "Submit"}
              </button>
            </form>
          </div>
        )}
      {state.succeeded && (
        <div>
          <h2>Thank you contacting us!</h2>
          <p>We'll reach out shortly.</p>
        </div>
      )}
    </ContactFormStyle>
  );
};

ContactForm.displayName = "ContactForm";

// End Component
//////////////////////////////////////////////////////////////////////
