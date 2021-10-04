# Commence Starter

This is a marketing site _starter_ that features a studio with a simple Next.js frontend.

This starter uses the [Next.js toolkit for Sanity.io](https://github.com/sanity-io/next-sanity).

**Features:**

- Live previews, including website preview for blog articles and custom pages
- Custom page builder
- Content types for pages, articles, blog categories and quiz components
- Next.js image optimization - [read more here on how to use it appropriately](https://dev.to/yago/understanding-next-image-13ff)
- CssUtils to help you write commonly used css faster. Review these before starting
- Page theming and section theming
- Helpful image plugins Media and Unsplash

## Getting started

The quickest way to get up and running is to go to https://www.sanity.io/create?template=sanity-io%2Fsanity-template-nextjs-commencestarter and create a new project by following the instructions there.

## Enabling live preview

You can append `?preview` to the landing pages to enable preview mode when you are logged into your Sanity project. For example:

`https://<your-project>.vercel.app/about?preview`

## Running Locally

To run locally, rename `.env.test` to `.env` and add your project ID from [manage.sanity.io](https://manage.sanity.io).

NOTE: If your Vercel project is set up to use the Next.js framework preset, you'll have to go to the project settings under https://vercel.com and under Build & Develpment change the _development command_ to: `npm run dev`

To start the development server:

```bash
npm start
```

This will run the frontend at http://localhost:3000 and the Sanity Studio at http://localhost:3000/studio

## Notes

Don't use yarn, only npm. When adding a dependency to the package.json file run

```bash
rm -rf node_modules && rm -rf package-lock.json && npm install
```

or

```bash
rm -rf node_modules && rm -rf package-lock.json && npm install --legacy-peer-deps
```

If there's dependency inconsistencies.

There are a couple of key features that you'll want to address right when you start.

- If your site doesn't have a custom cursor, erase the Cursor folder

  - If it does, add Cursor to layout and customize Cursor folder

- If your site doesn't have dark/light mode based on computer settings, erase ThemeToggle folder and <ThemeToggle /> declaration

  - If it does, customize ThemeToggle

- If your site doesn't have a blog, erase the following:

  1. ArticleListings.tsx
  2. pages > blog [folder and all contents]
  3. studio > documents > article.js, articleCategory.js and author.js
  4. package.json - react-sanity-pagination and reading-time
  5. utils > getFormattedData.tsx and getFormattedMinutes.tsx

  - If it does, customize ArticleListings.tsx

- Customize Settings.tsx

- You might have to `sanity install seo-tools` and make sure sanity's url is added to the CORS Origin Policy

- Go to https://realfavicongenerator.net/ to generate favicon - drop folder contents in public and adjust favicon items in SiteHead.tsx

- Add new opengraph image to public

- Update robots.txt

- Decide if you want schema in sitehead
