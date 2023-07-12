/**
 *
 * @name Types
 * @description Our core TypeScript Typings.
 * @returns Various different Typings.
 *
 */

import { CMNC_ContactFormForm } from "../sections/loop/ContactForm-2";
import { CMNC_SimpleHero2_Schema } from "../sections/loop/SimpleHero2";

/**
 *
 * @description Sanity types
 *
 */

export type Sanity_DefaultItem = {
  _updatedAt: string;
  _type: string;
  _rev: string;
  _ref: string;
  _id: string;
  _createdAt: string;
};

/**
 *
 * @description Call to action types
 *
 */

export type CMNC_Label = {
  label: string;
};

export type CMNC_InternalLinkPathFields = {
  _type: string;
  slug?: CMNC_Slug;
};

export type CMNC_ExternalLink = CMNC_Label & {
  _type: "externalLink";
  link: string;
  target: "_blank" | "_self" | "download";
};

export type CMNC_InternalLink = CMNC_Label & {
  _type: "internalLink";
  internalLink: CMNC_InternalLinkPathFields;
};

export type CMNC_PhoneLink = CMNC_Label & {
  _type: "phoneLink";
  link: string;
};

export type CMNC_EmailLink = CMNC_Label & {
  _type: "emailLink";
  link: string;
};

/**
 *
 * @description Guides
 *
 */
export type CMNC_GuideSimple = CMNC_PageBasics & {
  image: CMNC_Image;
  previewText?: string;
};

export type CMNC_Cta = (
  | CMNC_InternalLink
  | CMNC_ExternalLink
  | CMNC_PhoneLink
  | CMNC_EmailLink
)[];

/**
 *
 * @description Quiz
 *
 */

export type CMNC_Quiz = {
  _type: "quiz";
  title: string;
  slug: CMNC_Slug;
  description?: string;
  image?: CMNC_Image;
  questions: CMNC_Quiz_Question[];
  resultsPage?: CMNC_QuizResultsPage;
  skipQuizLink: CMNC_Cta;
};

export type CMNC_QuizResultsPage = {
  summary?: {
    namePrefix?: string;
    nameSuffix?: string;
    mainResultPrefix?: string;
    mainResultSuffix?: string;
    subResultsPrefix?: string;
    subResultsSuffix?: string;
    buttonLabelPrefix?: string;
    buttonLabelSuffix?: string;
  };
  mainResultSectionIntro?: string;
  subResultsSectionIntro?: string;
  formspreeLink: string;
  ctaForm?: {
    body?: string;
    headline?: string;
    form: CMNC_ContactFormForm;
  };
};

export type CMNC_QuizResult = {
  result: CMNC_Service | CMNC_PathSimple;
};

export type CMNC_Quiz_Answer = {
  answer: string;
  tooltip?: string;
};

export type CMNC_Quiz_Question = {
  question: string;
  explanation?: string;
  questionType: "text" | "checkbox" | "radio" | "image";
  fieldLabel?: string;
  placeholder?: string;
  answers?: {
    answer: CMNC_Quiz_Answer;
    image?: CMNC_Image;
    results: { _type: string; title: string }[];
  }[];
};

/**
 *
 * @description Path
 *
 */

export type CMNC_PathTheme = "light-blue" | "beige" | "yellow" | "mustard";

export type CMNC_Path = CMNC_DefaultSanityProps &
  CMNC_PageBasics & {
    _type: "path";
    content?: any; //Section loop
    services?: CMNC_Service[];
    shortDescription?: string;
    seo?: CMNC_SEO;
    description: {
      headline: string;
      subheadline: string;
      blockBasic: string;
    };
    image: CMNC_Image;
    pathTheme: CMNC_PathTheme;
  };

export type CMNC_PathSimple = CMNC_PageBasics & {
  services: string[];
  shortDescription?: string;
  image: CMNC_Image;
  pathTheme: CMNC_PathTheme;
  seo?: CMNC_SEO;
};

export type CMNC_PathsIntro = CMNC_DefaultSanityProps & {
  intro: {
    headline: string;
    blockBasic: string;
    cta: CMNC_Cta;
  };
  pathsOrder: {
    title: string;
    slug: CMNC_Slug;
    image: CMNC_Image;
    pathTheme: CMNC_PathTheme;
  }[];
};

/**
 *
 * @description Newsroom
 *
 */

export type CMNC_NewsroomSettings = CMNC_DefaultSanityProps & {
  title: string;
  postsPerPage: number;
  content?: any; //Section loop
  articlePageSections?: any[]; //Section loop
  description: string;
};

export type CMNC_News = CMNC_DefaultSanityProps &
  CMNC_PageBasics & {
    image: CMNC_Image;
    externalLink: CMNC_ExternalLink;
    content?: any; //Section loop
  };

export type CMNC_NewsSimple = CMNC_PageBasics & {
  image: CMNC_Image;
};

export type CMNC_Ctas = CMNC_Cta;

export type CMNC_LabeledLinks = {
  _type: string;
  label: string;
  links: CMNC_Ctas;
};

/**
 *
 * @description Page types
 *
 */

export type CMNC_Slug = {
  current: string;
};

export type CMNC_SEO = {
  meta_description: string;
  seo_title: string;
  _type: string;
};

export type CMNC_PageBasics = {
  title: string;
  slug: CMNC_Slug;
};

export type CMNC_ServicePageData = {
  pageData: CMNC_Service;
  preview: boolean;
  slug: string;
};

export type CMNC_PageTheme = "tan" | "default" | "dark" | "light";

export type CMNC_PageData = {
  preview: boolean;
  pageData?: {
    pageTheme?: CMNC_PageTheme;
    content: any;
  };
  slug: string;
};

/**
 *
 * @description Shared section types
 *
 */

export type CMNC_SectionTheme =
  | "default"
  | "light-gray"
  | "yellow"
  | "mustard"
  | "light-blue"
  | "default"
  | "dark"
  | "light"
  | "tan"
  | "beige";

export type CMNC_ScrollDirection = "top" | "down" | "up";

export type CMNC_SectionAccent = "mustard" | "yellow" | "light-blue";
export type CMNC_SectionThemeSubtle = "default" | "light-gray";

export type CMNC_AddStickyHeader = {
  sticky_header?: CMNC_StickyHeader;
};

export type CMNC_StickyHeader = {
  add_sticky_header?: boolean;
  label?: string;
  links?: CMNC_Ctas;
  cta?: CMNC_Cta;
};

export type CMNC_QuoteAuthor = {
  name?: string;
  company?: string;
};

export type CMNC_SectionSpacingObject = {
  spacing?: CMNC_SectionSpacing;
};

export type CMNC_SectionSpacing = {
  top?: "default" | "half" | "none";
  bottom?: "default" | "half" | "none";
};

/**
 *
 * @description Service
 *
 */

export type CMNC_Service = CMNC_DefaultSanityProps &
  CMNC_PageBasics & {
    _type: "service";
    image: CMNC_Image;
    features?: string[];
    shortDescription?: string;
    regDescription?: string;
    content: any; //Section loop
    //__document: CMNC_CurrentService;
    //seo?: CMNC_SEO;
  };

export type CMNC_Feature = CMNC_DefaultSanityProps & {
  _type: "feature";
  title: string;
  blockBasic: any;
  aspects?: string[];
  content?: any; //Section loop
};

/**
 *
 * @description Projects
 *
 */

export type CMNC_ProjectsSettings = CMNC_DefaultSanityProps & {
  title: string;
  simpleHero: CMNC_SimpleHero2_Schema;
  content?: any; //Section loop
  description: string;
};

export type CMNC_Project = CMNC_DefaultSanityProps &
  CMNC_PageBasics & {
    image: CMNC_Image;
    video?: string;
    services?: string[];
    publishedAt: string;
    tagline: string;
    blockBasic: string;
    content: any;
  };

/**
 *
 * @description Solutions
 *
 */

export type CMNC_Solution = CMNC_DefaultSanityProps &
  CMNC_PageBasics & {
    _type: "solution";
    image: CMNC_Image;
    shortDescription: string;
    blockStandard: string;
    features?: {
      title: string;
      color: string;
    }[];
    content: any; //Section loop
  };

/**
 *
 * @description Blog
 *
 */

export type CMNC_Author = {
  name: string;
  image?: CMNC_Image;
};

export type CMNC_BlogSettings = CMNC_DefaultSanityProps & {
  title: string;
  postsPerPage: number;
  allCategoriesLabel: string;
  content?: any; //Section loop
  description: string;
};

export type CMNC_Article = CMNC_DefaultSanityProps &
  CMNC_PageBasics & {
    image: CMNC_Image;
    video?: string;
    publishedAt: string;
    description: string;
    content: any; //Section loop
    author: CMNC_Author;
    tags?: string[];
  };

export type CMNC_ArticleSimple = CMNC_PageBasics & {
  image: CMNC_Image;
};

export type CMNC_Category = CMNC_PageBasics;

/**
 *
 * @description CaseStudy
 *
 */

export type CMNC_CaseStudySimple = CMNC_PageBasics & {
  image: CMNC_Image;
  path: {
    title: string;
    pathTheme?: string;
  };
  location?: string;
  publishedAt: string;
};

/**
 *
 * @description Newsletter
 *
 */

export type CMNC_Newsletter_Form = {
  formspree_endpoint: string;
  headline?: string;
  subheadline?: string;
  submitText: string;
  placeholder: string;
};

/**
 *
 * @description Social Media
 *
 */

export type CMNC_SocialMedia = {
  socialType:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedIn"
    | "youTube"
    | "snapchat"
    | "pinterest";
  link: string;
}[];

/**
 *
 * @description siteConfig
 *
 */

export type CMNC_SiteConfig = {
  address?: string;
  socialMedia?: CMNC_SocialMedia;
};

/**
 *
 * @description image
 *
 */

export type CMNC_Image = {
  url: string;
  hasAlpha: boolean;
  width: number;
  height: number;
};

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * @name Images
 *
 */

export type Sanity_ImageDimensions = {
  aspectRatio: number;
  height: number;
  width: number;
  _type: string;
};

export type Sanity_ImagePaletteSwatch = {
  background: string;
  foreground: string;
  population: number;
  title: string;
  _type: string;
};

export type Sanity_ImagePalette = {
  darkMuted: Sanity_ImagePaletteSwatch;
  darkVibrant: Sanity_ImagePaletteSwatch;
  dominant: Sanity_ImagePaletteSwatch;
  lightMuted: Sanity_ImagePaletteSwatch;
  lightVibrant: Sanity_ImagePaletteSwatch;
  muted: Sanity_ImagePaletteSwatch;
  vibrant: Sanity_ImagePaletteSwatch;
  _type: string;
};

export type Sanity_ImageMetadata = {
  dimensions: Sanity_ImageDimensions;
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: Sanity_ImagePalette;
  _type: string;
};

export type Sanity_ImageAsset = Sanity_DefaultItem & {
  assetId: string;
  extension: string;
  metadata: Sanity_ImageMetadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  asset?: {
    url: string;
  };
  uploadId: string;
  url: string;
};

export type CMNC_RGBA_Color = {
  a: number;
  r: number;
  g: number;
  b: number;
};

export type CMNC_HSVA_Color = {
  a: number;
  h: number;
  s: number;
  v: number;
};

export type CMNC_HSLA_Color = {
  a: number;
  h: number;
  l: number;
  s: number;
};

export type CMNC_Color = {
  alpha: number;
  hex: string;
  hsl: CMNC_HSLA_Color;
  hsv: CMNC_HSVA_Color;
  rgb: CMNC_RGBA_Color;
};

/**
 *
 * @name Themes
 *
 */

export type CMNC_Theme = {
  background: CMNC_Color;
  foreground: CMNC_Color;
  accent: CMNC_Color;
  selection: CMNC_Color;
};

export type CMNC_ThemeHexOnly = {
  background: string;
  foreground: string;
  accent: string;
  selection: string;
};

export type CMNC_DefaultSanityProps = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  publishedAt: string;
  _type: string;
};
