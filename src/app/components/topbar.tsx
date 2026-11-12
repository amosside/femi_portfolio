"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserDeleteOutlined,
  ShareAltOutlined,
  BugOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  BookOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

export default function Topbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: HomeOutlined },
    { href: "/about", label: "About Me", icon: UserDeleteOutlined },
    { href: "/projects", label: "Projects", icon: ShareAltOutlined },
    { href: "/skills", label: "My Stack", icon: BugOutlined },
    { href: "/contact", label: "Contact", icon: CustomerServiceOutlined },
    { href: "/blog", label: "Blog", icon: BookOutlined },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit">
      <nav
        className="
          flex items-center gap-1
          rounded-2xl
          border border-blue-100/70
          bg-gradient-to-r from-white/90 via-blue-50/90 to-slate-100/90
          px-2 py-2
          shadow-[0_8px_30px_rgba(59,130,246,0.12)]
          backdrop-blur-xl
        "
      >
        {/* Navigation Links */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  flex shrink-0 items-center gap-2
                  rounded-xl px-3 py-2.5
                  text-sm font-medium
                  transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md shadow-blue-200/60"
                      : "text-slate-600 hover:bg-white/80 hover:text-blue-600"
                  }
                `}
              >
                <Icon
                  className={`
                    text-base transition-transform duration-300
                    ${isActive ? "scale-110" : "group-hover:scale-110"}
                  `}
                />

                <span className="hidden sm:inline whitespace-nowrap">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="ml-1 border-l border-blue-200/70 pl-2">
          <a
            href="https://docs.google.com/document/d/1pL0If1qbO5LQpJ5oHNGZQEjOMn_jQa0jsB3EfFS1r1Q/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my resume"
            className="
              flex shrink-0 items-center gap-2
              rounded-xl px-3 py-2.5
              text-sm font-semibold text-blue-600
              transition-all duration-300
              hover:bg-blue-100/70 hover:text-blue-700
            "
          >
            <FilePdfOutlined className="text-base" />
            <span className="hidden sm:inline whitespace-nowrap">
              Resume
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}