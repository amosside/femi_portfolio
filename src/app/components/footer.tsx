
'use client';

import Link from "next/link";
import Float from "./floatbutton";
import MailingUnit from "./mailingunit";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/skills" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-slate-900 text-slate-300">
      {/* Subtle decorative accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Introduction */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Let&apos;s build something
              <span className="text-blue-400"> great.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-400 md:mx-0">
              I&apos;m a frontend developer passionate about building
              responsive, accessible, and engaging digital experiences.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get in touch
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Stay connected
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Subscribe to receive updates and occasional insights.
            </p>

            <div className="mx-auto mt-4 w-full max-w-md md:mx-0">
              <MailingUnit />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-700/80" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>

       
        </div>
      </div>

      {/* Floating Component */}
      <div className="relative flex justify-end px-6 pb-5 sm:px-8 lg:px-12">
        <Float />
      </div>
    </footer>
  );
}
