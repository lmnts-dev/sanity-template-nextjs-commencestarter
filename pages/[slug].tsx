import { GetStaticProps, NextPage } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import React from "react";
import RenderSections from "../components/RenderSections";
import { Queries } from "../constants/Queries";
import { CMNC_PageData } from "../constants/Types";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { createTheme } from "../utils/createTheme";
import { SiteHead } from "../components/core/SiteHead";
import { Settings } from "../constants/site/Settings";
import { CssToolbar } from "../sections/CssToolbar";

type CMNC_Page = CMNC_PageData;

const Page: NextPage<CMNC_Page> = ({ pageData, preview, slug }) => {
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

        <CssToolbar schema={{
          sectionTheme: "dark"
        }} />
        
        <RenderSections sections={content} />
      </>
    );
  } else {
    return <Error statusCode={404} />;
  }
};

export const getStaticProps: GetStaticProps = async ({
  params = {},
  preview = false,
}) => {
  const { slug } = params;
  const pageData = await getClient(preview).fetch(Queries.CurrentPage(), {
    slug,
  });

  return {
    props: { preview, pageData, slug },
  };
};

export async function getStaticPaths() {
  const routes = await getClient().fetch(Queries.AllPagesSlugsForPaths());

  return {
    paths: routes || null,
    fallback: true,
  };
}

export default Page;
