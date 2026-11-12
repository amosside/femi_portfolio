"use client";

import { useState, useEffect } from "react";
import { Button, Layout } from "antd";
import {
  ArrowRightOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Loading from "@/loading/loading";
import { useRouter } from "next/navigation";

const { Content } = Layout;

const HOME_CLOUDINARY_VIDEO_URL =
  process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_URL;

export default function Portfolio() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 3000);
      

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout className="min-h-screen bg-slate-200">
      <Content className="w-full bg-slate-200 xl:p-6 lg:p-4 md:p-2 p-0">
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <main className="mx-auto max-w-7xl  text-slate-800 ">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden px-5 py-8 sm:px-8 md:py-24 lg:px-4 rounded-3xl">

              {/* Background Accent */}
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-slate-200 blur-3xl" />

              <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* LEFT CONTENT */}
                <div className="max-w-2xl">

                  {/* Role Badge */}
                  

                  {/* Heading */}
                  <h1 className="text-4xl font-normal leading-tight tracking-tight text-slate-900 sm:text-xl lg:text-5xl xl:text-5xl">
                    Software Developer
                    
                    <br />
                    focused on solving everyday business problems with software.
                  </h1>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
                
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">

                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                      onClick={() => router.push("/projects")}
                      className="!h-12 !rounded-xl !border-none !bg-blue-600 !px-6 !font-semibold shadow-lg shadow-blue-200 transition-all hover:!bg-blue-700"
                    >
                      View My Projects
                    </Button>

                    <Button
                      size="large"
                      onClick={() => router.push("/about")}
                      className="!h-12 !rounded-xl !border-slate-200 !px-6 !font-semibold !text-slate-700 transition-all hover:!border-blue-300 hover:!text-blue-600"
                    >
                      About Me
                    </Button>

                  </div>

                  {/* Social Links */}
                  <div className="mt-10 flex items-center gap-5 text-slate-400">
                    <span className="text-sm font-medium text-slate-500">
                      Find me on
                    </span>

                    <a
                      href="https://github.com/frizchuko"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-xl transition-colors hover:text-blue-600"
                    >
                      <GithubOutlined />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/frizchuko"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-xl transition-colors hover:text-blue-600"
                    >
                      <LinkedinOutlined />
                    </a>
                  </div>

                </div>

                {/* RIGHT VIDEO PANEL */}
               
{/* RIGHT VIDEO PANEL */}
<div className="relative w-full min-w-0">

{/* Decorative Glow */}
<div className="absolute inset-0 scale-95 rounded-[2rem] bg-gradient-to-br from-blue-200 via-sky-100 to-slate-100 blur-2xl" />

{/* Video Container */}
<div className="relative w-full overflow-hidden rounded-[2rem] p-2 sm:p-3">

  <div className="relative w-full aspect-video overflow-hidden rounded-[1.5rem] bg-slate-900">

    {HOME_CLOUDINARY_VIDEO_URL ? (
      <video
        className="absolute inset-0 block h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/lazyload.jpg"
      >
        <source
          src={HOME_CLOUDINARY_VIDEO_URL}
          type="video/mp4"
        />
      </video>
    ) : (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white">
        <p>Video unavailable</p>
      </div>
    )}

    {/* Video Overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

    {/* Video Caption */}
    <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6">
      <h2 className="mt-2 text-xl font-bold sm:text-3xl">
        Design. Develop. Deliver.
      </h2>

      <p className="mt-2 text-sm text-slate-200">
        Bringing ideas to life through code.
      </p>
    </div>

  </div>
</div>

{/* Floating Tech Card */}
<div className="absolute md:-bottom-12 -bottom-6 md:-left-12 -left-4 z-10 max-w-[95%] rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-xl shadow-slate-200/60 backdrop-blur-md sm:-left-6 sm:p-4">
  <p className="text-xs font-medium text-slate-400">
  
  </p>

  <div className="mt-3 flex flex-wrap gap-2">
    {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Nest.js", "Postgres"].map((tech) => (
      <span
        key={tech}
        className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

</div>

              </div>
            </section>

            {/* FEATURED PROJECTS INTRO */}
            <section className="px-5 pb-16 pt-20 sm:px-8 lg:px-12 bg-slate-200">

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    What I&apos;ve Been Building
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Featured Projects
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                    A selection of projects where I turn ideas into
                    functional, user-friendly digital experiences.
                  </p>
                </div>

                <Button
                  type="text"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={() => router.push("/projects")}
                  className="!font-semibold !text-blue-600 hover:!text-blue-700"
                >
                  Explore All Projects
                </Button>

              </div>

              {/* Project Preview */}
              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <button
                  onClick={() => router.push("/projects")}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-blue-50 to-slate-50 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    01 / WEB APPLICATION
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    Interactive Web Experiences
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Explore my work building responsive interfaces,
                    dynamic applications, and modern frontend solutions.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">
                    View Projects <ArrowRightOutlined />
                  </span>
                </button>

                <button
                  onClick={() => router.push("/about")}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    02 / MY JOURNEY
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    Behind the Code
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    Learn about my experience, approach to development,
                    technical interests, and the person behind the work.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">
                    Get to Know Me <ArrowRightOutlined />
                  </span>
                </button>

              </div>
            </section>

          </main>
        )}
      </Content>
    </Layout>
  );
}