
"use client";

import { motion } from "framer-motion";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <section className="min-h-screen bg-slate-200 text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          My Tech Stack & Expertise
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          These are the tools and technologies I use to build seamless digital experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <motion.div
              key={skill.name}
              className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center space-y-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconComponent
                style={{ fontSize: "2rem", color: skill.color }}
              />

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>

              <p className="text-sm text-gray-500">
                {skill.level}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="/contact"
          className="inline-block text-blue-600 text-nowrap px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
        >
          <CustomerServiceOutlined className="mx-2" />
          So, let us talk!
        </a>
      </div>
    </section>
  );
}
