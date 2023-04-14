import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://firatoezcan.com/",
  author: "Firat Özcan",
  desc: "Freiberuflicher Software Entwickler für React.js, Node.js und GraphQL",
  title: "Firat Özcan | Homepage",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/firatoezcan",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/firatoezcan/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:admin@firatoezcan.com",
    linkTitle: `Email an ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/firatoezcan",
    linkTitle: `${SITE.author} on Twitter`,
    active: false,
  },
];
