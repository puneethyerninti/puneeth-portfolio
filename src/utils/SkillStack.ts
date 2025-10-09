import {
    HtmlIcon,
    CssIcon,
    JsIcon,
    TsIcon,
    ReactIcon,
    AstroIcon,
    TailwindIcon,
    NodeIcon,
    ExpressIcon,
    MongoIcon,
    RestApiIcon,
    PythonIcon,
    CppIcon,
    GitIcon,
    ViteIcon,
    SocketIoIcon,
    NetlifyIcon,
    VercelIcon,
    VsCodeIcon,
    FigmaIcon
} from "../assets/Icons";
import { GithubIcon } from "../assets/SVGs";

export const FrontendStack = [
    {
        name: "HTML",
        icon: HtmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        icon: CssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        icon: JsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        icon: TsIcon,
        link: "https://www.typescriptlang.org/",
    },
    { name: "React.js", icon: ReactIcon, link: "https://react.dev/" },
    { name: "Astro", icon: AstroIcon, link: "https://astro.build/" },
    { name: "Tailwind", icon: TailwindIcon, link: "https://tailwindcss.com/" },
    // removed third-party icons not present in src/assets/Icons to avoid missing imports
];
export const BackendStack = [
    { name: "Node.js", icon: NodeIcon, link: "https://nodejs.org/" },
    { name: "Express.js", icon: ExpressIcon, link: "https://expressjs.com/" },
    { name: "MongoDB", icon: MongoIcon, link: "https://www.mongodb.com/" },
    // removed icons not present in src/assets/Icons (Firebase, EdgeStore, MySQL, PHP)
    {
        name: "REST API",
        icon: RestApiIcon,
        link: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    },
    // removed Drive API and Auth.js icons (not present in assets)
];

export const ProgrammingStack = [
    
    { name: "Python", icon: PythonIcon, link: "https://www.python.org/" },
    { name: "C++", icon: CppIcon, link: "https://isocpp.org/" },
    // removed Java and R icons (not present in assets)
];

export const ToolsStack = [
    // removed NPM and Bun icons (not present in assets)
    { name: "Git", icon: GitIcon, link: "https://git-scm.com/" },
    { name: "GitHub", icon: GithubIcon, link: "https://github.com/" },
    { name: "Vite.js", icon: ViteIcon, link: "https://vitejs.dev/" },
    { name: "Socket.io", icon: SocketIoIcon, link: "https://socket.io/" },
    { name: "Netlify", icon: NetlifyIcon, link: "https://www.netlify.com/" },
    { name: "Vercel", icon: VercelIcon, link: "https://vercel.com/" },
    {
        name: "VS Code",
        icon: VsCodeIcon,
        link: "https://code.visualstudio.com/",
    },
    { name: "Figma", icon: FigmaIcon, link: "https://www.figma.com/" },
];