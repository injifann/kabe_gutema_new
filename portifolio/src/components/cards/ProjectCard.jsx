import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaCodeBranch } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [coverImage, setCoverImage] = useState(0);

  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Main Image */}
      <a
        href={project.images?.[coverImage]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.images[coverImage]}
          alt={`${project.title} screenshot ${coverImage + 1}`}
          className="w-full h-72 object-cover rounded-xl cursor-pointer"
        />
      </a>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-7 line-clamp-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3 flex items-center gap-2">
            <FaCodeBranch className="text-indigo-500" />
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-6">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCoverImage(index)}
              className={`rounded-lg overflow-hidden border-2 transition ${
                coverImage === index
                  ? "border-indigo-600"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                className="w-16 h-12 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          {project.liveurl && (
            <a
              href={project.liveurl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

          <a
            href={project.githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
