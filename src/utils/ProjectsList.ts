import {
  HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon,
  MongoIcon, SocketIoIcon, RestApiIcon, ViteIcon, TailwindIcon,
  AstroIcon, GitIcon, PythonIcon, VsCodeIcon
} from "../assets/Icons"; // adjust path
import type { ImageMetadata } from "astro";

type TechType = { title: string; description: string; icon: any };

type ProjectType = {
  Name: string;
  ShortDesc: string;
  Desc: string;
  Shot?: ImageMetadata;
  Mockup?: ImageMetadata;
  Theme: string;
  Status: string;
  Link: string;
  Source: string;
  Tech: TechType[];
  features: { title: string; description: string }[];
  hideProject?: boolean;
  versions: { title: string; version: string }[];
  Demo?: { email: string; password: string };
  Logo?: ImageMetadata;
  LogoSize?: number;
};

const Tech = {
  Html: { title: "HTML", description: "Markup language for web structure", icon: HtmlIcon },
  Css: { title: "CSS", description: "Styling & layout for web pages", icon: CssIcon },
  Js: { title: "JavaScript", description: "Client-side scripting language", icon: JsIcon },
  React: { title: "React", description: "UI library", icon: ReactIcon },
  ThreeJS: { title: "Three.js", description: "3D rendering & scene management", icon: JsIcon },
  Node: { title: "Node.js", description: "Backend runtime", icon: NodeIcon },
  RESTAPI: { title: "REST API", description: "HTTP APIs & integrations", icon: RestApiIcon },
  SocketIO: { title: "Socket.IO", description: "Real-time communication", icon: SocketIoIcon },
  MongoDB: { title: "MongoDB", description: "NoSQL database", icon: MongoIcon },
  TypeScript: { title: "TypeScript", description: "Typed JS for scale", icon: TsIcon },
  Tailwind: { title: "Tailwind CSS", description: "Utility CSS framework", icon: TailwindIcon },
  Astro: { title: "Astro", description: "Static/SSG framework", icon: AstroIcon },
  Python: { title: "Python / Django", description: "Backend / tutorials engine", icon: PythonIcon },
  Git: { title: "Git", description: "Version control", icon: GitIcon },
  Vite: { title: "Vite", description: "Dev tooling", icon: ViteIcon },
  VSCode: { title: "VS Code", description: "Editor", icon: VsCodeIcon },
};


export const ProjectsList: ProjectType[] = [
  {
    Name: "CODEWERK",
    ShortDesc: "Full-stack tutorials platform — structured lessons, code examples, quizzes and guided projects.",
    Desc:
      "CODEWERK is a full-stack developer learning portal focused on practical, project-based tutorials. It includes structured lessons for frontend and backend topics, styled code blocks, interactive quizzes, and downloadable resources. Designed for learners to go from basics to advanced full-stack features with guided projects.",
    Shot: undefined,
    Mockup: undefined,
    Theme: "#2b1b4a",
    Status: "completed",
    Link: "https://codewerk-1.onrender.com/",
    Source: "https://github.com/puneethyernini/codewerk",
    Tech: [
  Tech.Html,
  Tech.Css,
  Tech.Js,
  Tech.Python,
  Tech.Git
],
    features: [
      { title: "Structured Curriculum", description: "Step-by-step lessons from basics to advanced full-stack topics." },
      { title: "Interactive Quizzes", description: "Mini tests at the end of lessons with instant feedback." },
      { title: "Code Examples & Exercises", description: "Practical examples and downloadable starter code for each topic." },
      { title: "Project-Based Learning", description: "Hands-on projects that combine frontend + backend skills." },
      { title: "Search & Navigation", description: "Easy browse by topic, difficulty, and tags." }
    ],
    hideProject: false,
    versions: [{ title: "CODEWERK", version: "1" }]
  },

  {
    Name: "OBJEKTA",
    ShortDesc: "3D design & visualization app — meshes, sculpting, import/export (.glb), save scenes, textures, APIs & backend.",
    Desc:
      "OBJEKTA is an interactive 3D design platform built with React and Three.js with a Node.js backend. It supports detailed mesh manipulation, object properties editing, sculpting tools, import/export of .glb files, scene saving, texture management, and a variety of REST API integrations. Future roadmap includes AI co-pilot for design assistance and an e-commerce store for selling assets.",
    Shot: undefined,
    Mockup: undefined,
    Theme: "#0f1222",
    Status: "development",
    Link: "https://objekta-31yk.vercel.app/",
    Source: "https://github.com/puneethyerninti/OBJEKTA",
    Demo: undefined,
    Tech: [
      Tech.React,
      Tech.ThreeJS,
      Tech.Node,
      Tech.RESTAPI,
      Tech.SocketIO,
      Tech.MongoDB,
      Tech.TypeScript
    ],
    features: [
      { title: "Advanced Mesh Tools", description: "Manipulate vertices, faces, and normals; sculpt and smooth meshes." },
      { title: "Import / Export", description: "Load and export .glb/.gltf models for interoperability with other tools." },
      { title: "Scene Save & Load", description: "Persist scenes & assets to backend storage and rehydrate them on load." },
      { title: "Texture & Material Management", description: "Apply PBR textures and tweak material properties in real time." },
      { title: "Object Properties Panel", description: "Per-object transforms, metadata, and configurable properties." },
      { title: "Realtime Collaboration (planned)", description: "Socket.io-based collaborative editing for shared scenes." },
      { title: "AI Co-Pilot (roadmap)", description: "Assistive design features and autogenerated suggestions using AI." },
      { title: "E-commerce (roadmap)", description: "Sell assets & models with integrated checkout." }
    ],
    hideProject: false,
    versions: [{ title: "OBJEKTA", version: "v1" }]
  },

  {
    Name: "Portfolio",
    ShortDesc: "Personal portfolio — black-purple glow theme, glassmorphism, animated hero and projects showcase.",
    Desc:
      "This portfolio site showcases my UI/UX style and engineering work — featuring an animated hero with particles, glassmorphism cards, animated skill rings, and a curated projects section (OBJEKTA, CODEWERK and more). Built to highlight both design sensibilities and production-ready frontend engineering.",
    Shot: undefined,
    Mockup: undefined,
    Theme: "#140622",
    Status: "completed",
    Link: "https://your-portfolio-link.vercel.app",
    Source: "https://github.com/puneethyerninti/portfolio",
    Tech: [
      Tech.Astro,
      Tech.React,
      Tech.Tailwind,
      Tech.Vite,
      Tech.VSCode
    ],
    features: [
      { title: "Animated Hero", description: "Typewriter + particle/gradient background for immediate impact." },
      { title: "Glassmorphism Cards", description: "Polished card UI with soft shadows & glow accents." },
      { title: "Projects Showcase", description: "Clickable cards with live demos and GitHub links." },
      { title: "Responsive Design", description: "Mobile-first layout, grid reflow and accessible interactions." }
    ],
    hideProject: false,
    versions: []
  }
];
