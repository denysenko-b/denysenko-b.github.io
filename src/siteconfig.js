export const seo = {
    title: "Bohdan Denysenko",
    description:
        ".NET Developer, React.js Developer, WEB & Native App Developer, Fullstack Developer",
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
        ".NET",
        "ASP.NET",
        "SQL",
        "Git",
        "CI/CD"
    ],
    tools: ["Visual Studio", "Visual Studio Code", "GitHub", "Notion", "Figma"],
};

export const GITHUB = "https://github.com/denysenko-b";

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

export default {
    ...seo,
    social,
    DOMAIN,
    URL,
    SITENAME,
    email: EMAIL,
    characteristics: CHARACTERISTICS,
    links: LINKS,
};
