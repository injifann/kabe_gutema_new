import React from "react";
import { FaUser, FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-500 mt-3">
            Get to know me better
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-gray-900">
              <FaUser className="text-indigo-600 text-xl" />
              <h3 className="text-xl font-semibold">
                Who I Am
              </h3>
            </div>

            <p className="text-gray-600 leading-7">
              I’m Kabe Gutema, a Full Stack Developer focused on building
              modern web applications using the MERN stack. I enjoy turning
              ideas into real, usable products.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-gray-900">
              <FaCode className="text-indigo-600 text-xl" />
              <h3 className="text-xl font-semibold">
                What I Do
              </h3>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">✔</span>
                Build full-stack web applications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">✔</span>
                Design REST APIs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">✔</span>
                Create responsive UI with React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">✔</span>
                Solve real-world problems with code
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-gray-900">
              <FaLaptopCode className="text-indigo-600 text-xl" />
              <h3 className="text-xl font-semibold">
                Tech Stack
              </h3>
            </div>

            <p className="text-gray-600 leading-7">
              Frontend: React, Tailwind CSS <br />
              Backend: Node.js, Express <br />
              Database: MongoDB
            </p>
          </div>

          {/* Education + Mindset */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4 text-gray-900">
              <FaGraduationCap className="text-indigo-600 text-xl" />
              <h3 className="text-xl font-semibold">
                Education & Mindset
              </h3>
            </div>

            <p className="text-gray-600 mb-4">
              Bachelor’s Degree in Information Systems — Addis Ababa University
            </p>

            <p className="text-gray-600">
              Passion for learning, consistency, and problem-solving mindset.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}