import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Aeh...",
  DESCRIPTION: "Ein paar meiner Gedanken.",
  EMAIL: "me@dimi.cool",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Ein paar meiner Gedanken.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Artikel über agile Softwareentwicklung.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Eine Auswahl an Projekten.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/dimitrios-kokkonias/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/theCodeOne",
  },
];
