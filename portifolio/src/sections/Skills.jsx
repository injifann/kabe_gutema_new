import React from "react";
import { skills } from "../data/skill";
import { FaReact, FaServer } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Skills & Technologies
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          Tools and technologies I use to build scalable web applications
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Frontend */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-6">
            <FaReact className="text-indigo-500 text-lg" />
            <h3 className="text-lg font-semibold text-gray-900">Frontend</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-6">
            <FaServer className="text-indigo-500 text-lg" />
            <h3 className="text-lg font-semibold text-gray-900">Backend</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
