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
export type CMNC_SliderSectionsPage = CMNC_PageData;

const SliderSectionsPage: NextPage<CMNC_SliderSectionsPage> = ({
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
  let slug = "slider-sections";
  const pageData = await getClient(preview).fetch(Queries.CurrentPage(), {
    slug: slug,
  });

  return {
    props: { preview, pageData, slug },
  };
};

export default SliderSectionsPage;

/*
  const { data: products } = usePreviewSubscription(Queries.HomePage(), {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });
  */
