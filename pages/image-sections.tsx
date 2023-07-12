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
import { randomImage } from "../utils/randomImage";
import { CaseStudiesListings } from "../sections/CaseStudiesListings";
import { GuidesListings } from "../sections/GuidesListings";
import { CaseStudiesTeaser } from "../sections/loop/CaseStudiesTeaser";
import { ArticleHero } from "../sections/ArticleHero";
export type CMNC_ImageSectionsPage = CMNC_PageData;

const ImageSectionsPage: NextPage<CMNC_ImageSectionsPage> = ({
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
              _type: "guidesTeaser",
              //@ts-ignore
              headline: "Guides Teaser",
              formspreeLink: "/",
              guides_teaser_featured_guides: [
                {
                  title: "Test",
                  slug: {
                    current: "test",
                  },
                  image: randomImage(),
                  previewText: "Preview",
                },
              ],
            },
          ]}
        />

        <GuidesListings
          postsPerPage={2}
          guides={[
            {
              image: randomImage(),
              slug: { current: "test" },
              title: "Title",
              previewText: "Preview text",
            },
            {
              image: randomImage(),
              slug: { current: "test" },
              title: "Title",
              previewText: "Preview text",
            },
          ]}
          verified={false}
          formspreeLink={"/"}
        />

        <CaseStudiesListings
          postsPerPage={2}
          studies={[
            //@ts-ignore
            {
              title: "Title",
              image: randomImage(),
              slug: {
                current: "test",
              },
              publishedAt: "2021-01-15",
              location: "Reno",
            },
            //@ts-ignore
            {
              title: "Title",
              image: randomImage(),
              slug: {
                current: "test",
              },
              publishedAt: "2021-01-15",
              location: "Reno",
            },
          ]}
        />

        <CaseStudiesTeaser
          schema={{
            headline: "headline",
            //@ts-ignore
            featureCard: true,
            case_studies_teaser_featured_studies: [
              //@ts-ignore
              {
                title: "Title",
                image: randomImage(),
                path: {
                  title: "Path",
                },
                slug: {
                  current: "test",
                },
                publishedAt: "2021-01-15",
                location: "Reno",
              },
              //@ts-ignore
              {
                title: "Title",
                image: randomImage(),
                path: {
                  title: "Path",
                },
                slug: {
                  current: "test",
                },
                publishedAt: "2021-01-15",
                location: "Reno",
              },
              //@ts-ignore
              {
                title: "Title",
                image: randomImage(),
                path: {
                  title: "Path",
                },
                slug: {
                  current: "test",
                },
                publishedAt: "2021-01-15",
                location: "Reno",
              },
              //@ts-ignore
              {
                title: "Title",
                image: randomImage(),
                path: {
                  title: "Path",
                },
                slug: {
                  current: "test",
                },
                publishedAt: "2021-01-15",
                location: "Reno",
              },
            ],
          }}
        />

        <ArticleHero
          schema={{
            title: "Article Title",
            categories: [
              { title: "Category 1", slug: { current: "test" } },
              { title: "Category 2", slug: { current: "test" } },
            ],
            date: "April 3rd",
            //@ts-ignore
            image: randomImage(),
          }}
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
  let slug = "image-sections";
  const pageData = await getClient(preview).fetch(Queries.CurrentPage(), {
    slug: slug,
  });

  return {
    props: { preview, pageData, slug },
  };
};

export default ImageSectionsPage;

/*
  const { data: products } = usePreviewSubscription(Queries.HomePage(), {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });
  */
