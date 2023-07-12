import Error from "next/error";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { Queries } from "../constants/Queries";
import React from "react";
import RenderSections from "../components/RenderSections";
import { GetStaticProps, NextPage } from "next";
import { CMNC_PageData } from "../constants/Types";
import { createTheme } from "../utils/createTheme";
import { SiteHead } from "../components/core/SiteHead";
import { Settings } from "../constants/site/Settings";
import { CssToolbar } from "../sections/CssToolbar";
import { useRouter } from "next/router";
import { blockBasic } from "../utils/blockBasic";

export type CMNC_TextSectionsPage = CMNC_PageData;

const TextSectionsPage: NextPage<CMNC_TextSectionsPage> = ({
  pageData,
  preview,
  slug,
}) => {
  if (pageData) {
    let { pageTheme, content } = pageData;
    const router = useRouter();

    //@ts-ignore
    const { data: product = {} } = usePreviewSubscription(
      Queries.CurrentPage(),
      {
        params: { slug: slug },
        initialData: pageData,
        enabled: preview || router.query.preview !== null,
      }
    );

    console.log(pageData);

    let Theme = createTheme(pageTheme);

    return (
      <>
        <SiteHead
          title={Settings.siteTitle}
          description={Settings.siteDescription}
        />
        {Theme && <Theme />}

        <CssToolbar
          schema={{
            sectionTheme: "dark",
          }}
        />

        <RenderSections sections={content} titleSections={true} />
        <RenderSections
          titleSections={true}
          sections={[
            {
              _type: "solutionsLinkListings",
              //@ts-ignore
              headline: "Linked Listings Headline",
              blockBasic: [
                {
                  _type: "block",
                  children: [
                    {
                      _key: "15322c3add94",
                      _type: "span",
                      marks: [],
                      text: "Body paragraph giving info about listings. Body paragraph giving info about listings. Body paragraph giving info about listings.",
                    },
                  ],
                  markDefs: [],
                  style: "normal",
                },
              ],
              solutions: [
                //@ts-ignore
                {
                  title: "Listing",
                  slug: {
                    current: "test",
                  },
                },
                //@ts-ignore
                {
                  title: "Listing Numero Dos",
                  slug: {
                    current: "test",
                  },
                },
                //@ts-ignore
                {
                  title: "Listing Numero Tres",
                  slug: {
                    current: "test",
                  },
                },
                //@ts-ignore
                {
                  title: "Listing Numero Cuatro",
                  slug: {
                    current: "test",
                  },
                },
              ],
            },
            {
              //@ts-ignore
              _type: "featuresListings",
              //@ts-ignore
              headline: "Headline",
              limit: 4,
              //@ts-ignore
              blockBasic: blockBasic(
                "Body paragraph giving info about listings. Body paragraph giving info about listings. Body paragraph giving info about listings."
              ),
              servicesFeatures: [
                {
                  features: [
                    {
                      title: "Feature",
                      //@ts-ignore
                      blockBasic: blockBasic(
                        "Body paragraph giving info about listings. Body paragraph giving info about listings. Body paragraph giving info about listings."
                      ),
                      slug: { current: "test" },
                      aspects: ["Aspect", "Aspect", "Aspect"],
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </>
    );
  } else {
    return <Error statusCode={404} />;
  }
};

export const getStaticProps: GetStaticProps = async ({
  //params = {},
  preview = false,
}) => {
  let slug = "text-sections";
  const pageData = await getClient(preview).fetch(Queries.CurrentPage(), {
    slug: slug,
  });

  return {
    props: { preview, pageData, slug },
  };
};

export default TextSectionsPage;

/*
  const { data: products } = usePreviewSubscription(Queries.HomePage(), {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });
  */
