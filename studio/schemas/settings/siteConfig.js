import { SocialMedia } from "../components/SocialMedia";

export default {
  name: "siteConfig",
  type: "document",
  title: "Site configuration",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  fieldsets: [{ name: "footer", title: "Footer" }],
  fields: [
    {
      name: "frontpage",
      type: "reference",
      description: "Choose page to be the frontpage",
      to: { type: "page" },
      validation: (validate) => validate.required(),
    },
    {
      title: "Company Address",
      name: "address",
      type: "text",
      rows: 4,
    },
    ...SocialMedia,
  ],
};
