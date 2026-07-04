import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";

export default function Project() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">
        <p className="text-indigo-600 font-semibold tracking-wide uppercase">
          Portfolio
        </p>

        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          Projects I've Worked On
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Here are some of the projects I've built while learning and improving
          my full-stack development skills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}