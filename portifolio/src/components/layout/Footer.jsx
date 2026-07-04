import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaArrowUp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Brand */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Kabe <span className="text-blue-600">Gutema</span>
          </h2>

          <p className="text-gray-600 mt-2">
            Building modern web applications with the MERN Stack.
          </p>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">

          <a
            href="https://github.com/injifann"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://t.me/kabe_g"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            <FaTelegram />
          </a>

          <a
            href="mailto:kabegutema4@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FiMail />
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">

          <p>
            © {currentYear} Kabe Gutema. All rights reserved.
          </p>

          <a
            href="#hero"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            Back to Top
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
}