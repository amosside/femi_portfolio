
import {
  CodeOutlined,
  ApiOutlined,
  ToolOutlined,
  GithubOutlined,
  CloudServerOutlined,
  Html5Outlined,
  JavaScriptOutlined,
  CodeSandboxOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

import {
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

import { TbBrandRedux } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";

export const skills = [
  { name: "HTML5", icon: Html5Outlined, level: "Advanced", color: "#000000" },
  { name: "CSS", icon: FaCss3Alt, level: "Advanced", color: "#87CEEB" },
  { name: "JavaScript", icon: JavaScriptOutlined, level: "Advanced", color: "#FFD700" },
  { name: "Next.js", icon: CodeOutlined, level: "Advanced", color: "#32CD32" },
  { name: "React.js", icon: CodeOutlined, level: "Advanced", color: "#87CEEB" },
  { name: "Node.js", icon: CodeOutlined, level: "Intermediate", color: "#32CD32" },
  { name: "TypeScript", icon: ApiOutlined, level: "Intermediate", color: "#FFA500" },
  { name: "Tailwind CSS", icon: ToolOutlined, level: "Advanced", color: "#FF69B4" },
  { name: "Redux", icon: TbBrandRedux, level: "Advanced", color: "#764ABC" },
  { name: "Ant Design", icon: AntDesignOutlined, level: "Advanced", color: "#FF69B4" },
  { name: "Bootstrap", icon: CodeSandboxOutlined, level: "Advanced", color: "#87CEEB" },
  { name: "Git & GitHub", icon: GithubOutlined, level: "Intermediate", color: "#800080" },
  { name: "Vercel", icon: CloudServerOutlined, level: "Intermediate", color: "#4682B4" },

  // Backend & Database
  { name: "NestJS", icon: SiNestjs, level: "Intermediate", color: "#E0234E" },
  { name: "Express.js", icon: SiExpress, level: "Intermediate", color: "#000000" },
  { name: "Prisma", icon: SiPrisma, level: "Intermediate", color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate", color: "#4169E1" },
];
