export const seo = {
    title: "Bohdan Denysenko",
    description: "Hi! I'm Bohdan Denysenko, Fullstack Developer and Javascript Engineer.",
};
export const DOMAIN = "denysenko-b.github.io";
export const URL = `https://${DOMAIN}`;
export const SITENAME = "Portfolio";
export const EMAIL = "bohdandenysenko.ua@gmail.com";

export const CHARACTERISTICS = {
    skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Node.js",
        "SQL",
        "MongoDB",
        "Git",
        "CI/CD",
    ],
    tools: ["Visual Studio Code", "GitHub", "Notion", "Figma"],
};

export const GITHUB = "https://github.com/denysenko-b";
export const CV = "/Denysenko_CV.pdf";

export const LINKS = {
    github: GITHUB,
};

export const social = {
    url: URL,
    sitename: SITENAME,
    title: seo.title,
    description: seo.description,
    image: {
        url: `${URL}/social.jpg`,
        height: 800,
        width: 1600,
        alt: seo.description,
    },
};

export const myWorks = [
    {
        title: "Storyteller",
        href: "https://github.com/denysenko-b/storytelller",
    },
    {
        title: "BloggerUP",
        href: "https://github.com/denysenko-b/bloggerup",
        reverse: true,
    },
    {
        title: "Chess",
        href: "https://github.com/denysenko-b/chess-react",
    },
];

export default {
    ...seo,
    social,
    DOMAIN,
    URL,
    SITENAME,
    email: EMAIL,
    cv: CV,
    characteristics: CHARACTERISTICS,
    links: LINKS,
    myWorks,
};
