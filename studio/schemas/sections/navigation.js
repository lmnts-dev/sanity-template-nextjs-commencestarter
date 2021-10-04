import {
  InternalLink,
  ExternalLink,
  PhoneLink,
  EmailLink,
  Cta,
  LabeledLinks,
} from "../components/Cta";

export default {
  name: "navigation",
  type: "document",
  title: "Site configuration",
  fields: [
    {
      title: "Main navigation",
      name: "mainNavigationLinks",
      description: "Select pages for the top menu",
      type: "array",
      of: [
        ...InternalLink(),
        {
          title: "Dropdown of Links",
          name: "dropdown",
          type: "object",
          fields: [...LabeledLinks],
        },
      ],
    },
    ...Cta(),
  ],
};
