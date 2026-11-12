
export interface Project {
  id: number;
  title: string;
  video?: string;
  poster: string;
  description: string;
  stack: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Vurika",
    poster: "/vurikaps.jpg",
    video: "/vurka.mp4",
    description:
      "A tender intelligence and document-processing platform designed to streamline the discovery and analysis of procurement opportunities. Vurika uses document-processing and extraction workflows to identify important tender information, including issuing organizations, submission deadlines, tender references, and scopes of work. The platform is built around a modular full-stack architecture, combining Next.js with a NestJS backend and PostgreSQL-powered data management.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "ModeOne Group",
    video: "/cmp.mp4",
    poster: "/lazyload.jpg",
    description:
      "A responsive corporate website developed for ModeOne Group. The platform presents the company's services through a clean, professional interface, intuitive navigation, and engaging interactions. Built with a focus on responsive layouts, maintainable code, and performance across devices.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    url: "https://www.modeonegroup.com",
  },
  {
    id: 3,
    title: "Nukenz",
    poster: "/nukenzposter.jpg",
    video: "/nuknz.mp4",
    description:
      "A full-stack solar energy e-commerce platform built to connect customers with reliable renewable energy products and solutions. Nukenz features product discovery, category-based shopping, cart and checkout workflows, customer accounts, and an administrative ecosystem for managing business operations. The platform also includes a dedicated learning academy for solar installation, home automation, and electrical engineering courses. Its architecture combines a modern Next.js frontend with a dedicated backend and relational database.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
    url: "https://www.nukenz.com",
  },
  {
    id: 4,
    title: "Eticon Energy",
    video: "/etcon.mp4",
    poster: "/eticon.jpg",
    description:
      "A solar energy e-commerce platform developed for Eticon Energy, designed to make discovering and purchasing renewable energy products straightforward. The application features product catalogues, category filtering, shopping cart functionality, authentication, and a responsive shopping experience. Built with a scalable component architecture and modern frontend technologies.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "MongoDB",
    ],
    url: "https://www.eticonenergy.com",
  },
  {
    id: 5,
    title: "Cheptel",
    poster: "/cheptpos.jpg",
    video: "/chept.mp4",
    description:
      "A food and fresh-produce e-commerce platform designed to simplify online shopping, order processing, and inventory management. Cheptel brings together product catalogues, categories, stock management, customer checkout, order tracking, and administrative tools. It also supports invoice generation, order notifications, and promotional billboard campaigns, providing an integrated workflow for both customers and administrators.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
    url: "cheptel-web-app-migration.vercel.app"
  },
  {
    id: 6,
    title: "Shoppax",
    video: "/shpx.mp4",
    poster: "/shppax.jpg",
    description:
      "A collection of reusable, multi-layout e-commerce storefronts developed to help businesses establish their online presence. The project focuses on flexible layouts, reusable UI components, responsive product displays, and consistent shopping experiences. Built with a modular architecture that makes customization and extension easier.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
    ],
    url: "https://www.shoppax.vercel.app",
  },
  {
    id: 7,
    title: "Zuojoff",
    video: "/zuojoff.mp4",
    poster: "/lazyload.jpg",
    description:
      "A corporate website developed for Zuojoff Nigeria Limited to showcase its services and strengthen its online presence. The website combines a professional visual identity with responsive page layouts, intuitive navigation, and interactive elements. Particular attention was given to usability, performance, and search engine visibility.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    url: "https://www.zuojoffservices.com",
  },
 

 
];
