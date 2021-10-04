import { PageBasics } from "../components/PageBasics";
import { PageSEO } from "../components/PageSEO";
import { PageTheme } from "../components/PageTheme";
import { SectionRegistry } from "../sections/_SectionRegistry";

export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    ...PageBasics,
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: SectionRegistry(),
    },
    ...PageTheme,
    ...PageSEO,
  ],
};
