import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import { FaFolderOpen, FaCode } from "react-icons/fa";

export default function Project() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold tracking-wide uppercase">
          <FaFolderOpen />
          <span>Portfolio</span>
        </div>

        <h2 className="mt-3 text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <FaCode className="text-indigo-600" />
          Projects I've Worked On
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Here are some of the projects I've built while learning and improving
          my full-stack development skills.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
