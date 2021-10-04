import S from "@sanity/desk-tool/structure-builder";
import {
  MdPublic,
  MdSettings,
  MdContacts,
  MdMenu,
  MdVideoLabel,
  MdApps,
  MdModeEdit,
  MdPoll,
  MdThumbsUpDown,
  MdLightbulbOutline,
  MdWebAsset,
  MdQuestionAnswer,
  MdLibraryBooks,
} from "react-icons/md";

import PagePreview from "../components/previews/PagePreview";
import BlogCategoryPreview from "../components/previews/BlogCategoryPreview";
import BlogArticlePreview from "../components/previews/BlogArticlePreview";
import BlogArticleOverviewPreview from "../components/previews/BlogArticleOverviewPreview";

export default () =>
  S.list()
    .title("Commence Starter")
    .items([
      S.listItem()
        .title("Basic Information")
        .icon(MdPublic)
        .child(
          S.editor()
            .id("siteConfig")
            .title("Basic Information")
            .schemaType("siteConfig")
        ),
      S.listItem()
        .title("Menus")
        .icon(MdMenu)
        .child(
          S.list()
            .title("Menus")
            .items([
              S.listItem()
                .title("Navigation")
                .icon(MdWebAsset)
                .child(
                  S.document()
                    .title("Navigation")
                    .schemaType("navigation")
                    .documentId("navigation")
                ),
              S.listItem()
                .title("Footer")
                .icon(MdVideoLabel)
                .child(
                  S.document()
                    .title("Footer")
                    .schemaType("footer")
                    .documentId("footer")
                ),
            ])
        ),
      S.documentTypeListItem("page").title("Pages").icon(MdLibraryBooks),
      S.listItem()
        .title("Blog")
        .icon(MdLightbulbOutline)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Blog Settings")
                .icon(MdSettings)
                .child(
                  S.document()
                    .title("Blog Settings")
                    .schemaType("blog")
                    .documentId("blog")
                ),
              S.documentTypeListItem("article")
                .title("Articles")
                .icon(MdModeEdit),
              S.documentTypeListItem("articleCategory")
                .title("Categories")
                .icon(MdApps),
              S.documentTypeListItem("author")
                .title("Authors")
                .icon(MdContacts),
            ])
        ),
      // Create List Item
      S.listItem()
        .title("Quizzes")
        .icon(MdPoll)
        .child(
          S.list()
            .title("Quizzes")
            .items([
              S.listItem()
                .title("Quizzes")
                .icon(MdLibraryBooks)
                .schemaType("quiz")
                .child(S.documentTypeList("quiz").title("Quizzes")),

              S.listItem()
                .title("Results Library")
                .icon(MdPoll)
                .schemaType("result")
                .child(S.documentTypeList("result").title("Results Library")),

              S.listItem()
                .title("Answers Library")
                .icon(MdQuestionAnswer)
                .schemaType("answer")
                .child(S.documentTypeList("answer").title("Answers Library")),

              S.listItem()
                .title("Questions Library")
                .icon(MdThumbsUpDown)
                .schemaType("question")
                .child(
                  S.documentTypeList("question").title("Questions Library")
                ),
            ])
        ),
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(PagePreview).title("Preview"),
    ]);
  }
  if (schemaType === "article") {
    return S.document().views([
      S.view.form(),
      S.view.component(BlogArticleOverviewPreview).title("Blog Preview"),
      S.view.component(BlogArticlePreview).title("Article Page Preview"),
    ]);
  }
  if (schemaType === "articleCategory") {
    return S.document().views([
      S.view.form(),
      S.view.component(BlogCategoryPreview).title("Category Page Preview "),
    ]);
  }
};
