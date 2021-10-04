/**
 *
 * @name ContactForm Section
 * @author Aisha Garric
 * @description
 * Simple ContactForm Schema
 * @requires /web/sections/ContactForm
 *
 */

import { SectionSpacing } from "../components/Spacing";
import { Cta } from "../components/Cta";
import { BodyReq, Caption, HeadlineReq } from "../components/TextItems";
import { SectionName } from "../components/SectionName";
import { SectionTheme } from "../components/SectionTheme";

// __________________________________________________________________________________________

export const ContactFormRegistry = {
  title: "Form: Contact",
  name: "contactForm",
  type: "object",
};

export const ContactForm = {
  ...ContactFormRegistry,
  fields: [
    ...SectionName,
    ...Caption,
    ...HeadlineReq,
    ...BodyReq,
    ...Cta(),
    {
      name: "form",
      title: "Form",
      type: "object",
      fields: [
        {
          name: "submitLabel",
          title: "Submit Label",
          type: "string",
          validation: (validate) => validate.required(),
        },
        {
          name: "formspreeSubmissionLink",
          title: "FormSpree Submission Link",
          type: "string",
          validation: (validate) => validate.required(),
        },
        {
          name: "fieldsSections",
          title: "Fields Sections",
          type: "array",
          of: [
            {
              name: "section",
              title: "Section",
              type: "object",
              fields: [
                {
                  name: "overrideNumberLabel",
                  title: "Override Number Label",
                  description:
                    "If left blank, this number label will default to the number of this section, ex. 02",
                  type: "string",
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "fields",
                  title: "Fields",
                  description: `We'd suggest adding one radio or checkbox field, or multiple text fields. And site note- the first text field with "email" in their label will be the _replyTo email.`,
                  type: "array",
                  of: [
                    {
                      name: "textField",
                      title: "Text Field",
                      type: "object",
                      fields: [
                        {
                          name: "label",
                          title: "Label",
                          type: "string",
                          validation: (validate) => validate.required(),
                        },
                        {
                          name: "required",
                          title: "Required?",
                          type: "boolean",
                        },
                      ],
                    },
                    {
                      name: "textareaField",
                      title: "Textarea Field",
                      type: "object",
                      fields: [
                        {
                          name: "label",
                          title: "Label",
                          type: "string",
                          validation: (validate) => validate.required(),
                        },
                        {
                          name: "required",
                          title: "Required?",
                          type: "boolean",
                        },
                      ],
                    },
                    {
                      name: "radioField",
                      title: "Radio Field",
                      type: "object",
                      fields: [
                        {
                          title: "Name",
                          name: "name",
                          type: "string",
                          description:
                            "Purely for organization - this does not display anywhere.",
                        },
                        {
                          name: "options",
                          title: "Options",
                          type: "array",
                          validation: (validate) => validate.min(1),
                          of: [
                            {
                              type: "string",
                            },
                          ],
                        },
                        {
                          name: "required",
                          title: "Required?",
                          type: "boolean",
                        },
                      ],
                    },
                    {
                      name: "checkboxField",
                      title: "Checkbox Field",
                      type: "object",
                      fields: [
                        {
                          title: "Name",
                          name: "name",
                          type: "string",
                          description:
                            "Purely for organization - this does not display anywhere.",
                        },
                        {
                          name: "options",
                          title: "Options",
                          type: "array",
                          validation: (validate) => validate.min(1),
                          of: [
                            {
                              type: "string",
                            },
                          ],
                        },
                        {
                          name: "required",
                          title: "Required?",
                          type: "boolean",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    ...SectionSpacing,
    ...SectionTheme,
  ],
};
