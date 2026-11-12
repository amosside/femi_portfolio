
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BugOutlined, GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";
import LazyVideo from "../components/lazyvideo";
import { projects } from "./components/projectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="min-h-screen bg-slate-200 text-gray-800 px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
       

       

        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          A selection of digital products and applications I have worked on,
          combining thoughtful design, modern technologies, and practical
          solutions to real-world problems.
        </p>
      </div>

      {/* Projects Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Project Selector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-lg">Selected Work</h3>
            <span className="text-sm text-gray-500">
              {projects.length} Projects
            </span>
          </div>

          {projects.map((project, index) => {
            const isSelected = selectedProject.id === project.id;

            return (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-blue-500 text-white border-blue-500 "
                    : "bg-gray-100 border-transparent hover:border-gray-300 hover:bg-white"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p
                      className={`text-xs mb-1 ${
                        isSelected ? "text-gray-100" : "text-gray-500"
                      }`}
                    >
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <h4 className="font-semibold text-base">
                      {project.title}
                    </h4>
                  </div>

                  <span
                    className={`text-xl transition-transform ${
                      isSelected ? "translate-x-1" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Project Details */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Project Preview */}
              <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
                {selectedProject.video ? (
                  <LazyVideo
                    key={selectedProject.id}
                    src={selectedProject.video}
                    poster={selectedProject.poster}
                    autoPlay
                  />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.75)), url('${selectedProject.poster}')`,
                    }}
                  >
                    <div className="text-center text-white px-4">
                      <p className="text-xs tracking-[0.25em] uppercase mb-3 text-gray-300">
                        Featured Project
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-bold">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
                  <div>
                    <span className="text-blue-500 text-xs font-normal uppercase tracking-widest">
                      Project Overview
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {selectedProject.url && (
                    <Link
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                    >
                      <GlobalOutlined />
                      Visit Project
                    </Link>
                  )}
                </div>

                <p className="text-gray-600 leading-7 text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                {/* Technology Stack */}
                <div className="mt-8">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Skills CTA */}
      <div className="flex justify-center mt-14">
        <Link
          href="/skills"
          className="inline-flex items-center gap-3 text-blue-700 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition"
        >
          <BugOutlined />
          Explore My Tech Stack & Expertise
        </Link>
      </div>
    </section>
  );
}
