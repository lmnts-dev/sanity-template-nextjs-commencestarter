import {
  InternalLink,
  ExternalLink,
  PhoneLink,
  EmailLink,
  LabeledLinks,
} from "../components/Cta";
import { Headline, Subheadline } from "../components/TextItems";

export default {
  name: "footer",
  type: "document",
  title: "Site Footer",
  fields: [
    {
      title: "Main Footer Links",
      name: "mainFooterLinks",
      type: "array",
      validation: (Rule) => [
        Rule.unique().error("You have duplicate menu items"),
      ],
      of: [
        {
          title: "Column",
          name: "column",
          type: "object",
          fields: [...LabeledLinks],
        },
      ],
    },
    {
      title: "Secondary Links",
      name: "secondaryFooterLinks",
      type: "array",
      validation: (Rule) => [
        Rule.unique().error("You have duplicate menu items"),
      ],
      of: [
        ...InternalLink(),
        ...ExternalLink(),
        ...PhoneLink(),
        ...EmailLink(),
      ],
    },
    {
      title: "Newsletter",
      name: "newsletter",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        ...Headline,
        ...Subheadline,
        {
          title: "Formspree Submission Endpoint",
          name: "formspreeEndpoint",
          type: "string",
          description: "Login to your formspree account to get this",
          validation: (validate) => validate.required(),
        },
        {
          title: "Placeholder Text for Email",
          name: "placeholderText",
          type: "string",
          description: "Ex. What's your email?",
          validation: (validate) => validate.required(),
        },
        {
          title: "Submit Button Text",
          name: "submitButtonText",
          type: "string",
          description: "Subscribe",
          validation: (validate) => validate.required(),
        },
      ],
    },
    {
      title: "Footer Text",
      name: "footerText",
      type: "text",
    },
  ],
};
