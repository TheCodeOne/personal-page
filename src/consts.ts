import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Dimitrios Kokkonias",
  DESCRIPTION: "Dimitrios Kokkonias | Eine Sammlung von Notizen, Projekten und Erkenntnissen",
  EMAIL: "www.@dimi.cool",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Notizen, Projekten und Erkenntnisse.",
};

export const BLOG: Metadata = {
  TITLE: "Artikel",
  DESCRIPTION: "Artikel über agile Softwareentwicklung.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projekte",
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
