import Error from "next/error";
import { getClient } from "../utils/sanity";
import { Queries } from "../constants/Queries";
import React from "react";
import RenderSections from "../components/RenderSections";
import { GetStaticProps, NextPage } from "next";
import { CMNC_PageTheme } from "../constants/Types";
import { createTheme } from "../utils/createTheme";
import { SiteHead } from "../components/core/SiteHead";
import { Settings } from "../constants/site/Settings";

export type CMNC_IndexPage = {
  preview: boolean;
  pageData:
    | {
        frontpage: {
          pageTheme?: CMNC_PageTheme;
          content: any;
        };
      }
    | undefined;
  slug: string;
};

const IndexPage: NextPage<CMNC_IndexPage> = ({ pageData }) => {
  if (pageData) {
    let { frontpage } = pageData;
    let { pageTheme, content } = frontpage;

    let Theme = createTheme(pageTheme);

    return (
      <>
        <SiteHead
          title={Settings.siteTitle}
          description={Settings.siteDescription}
        />
        {Theme && <Theme />}
        <RenderSections sections={content} />
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
  let slug = "/";
  const pageData = await getClient(preview).fetch(Queries.HomePage());

  return {
    props: { preview, pageData, slug },
  };
};

export default IndexPage;

/*
  const { data: products } = usePreviewSubscription(Queries.HomePage(), {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });
  */
