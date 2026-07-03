import React from 'react'
import profilpic from '../assets/images/profilepic.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">

          <p className="text-indigo-600 font-medium mb-2">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kabe Gutema
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Full Stack Web Developer
          </h2>

          <p className="text-gray-500 mb-8 max-w-md">
            I build modern, responsive web applications using React, Node.js,express ,MongoDB and tailwindcss with a focus on performance and clean UI.
          </p>

          {/* Buttons */}
          
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">

            <a href="/cv.pdf" download className="w-full sm:w-auto text-center px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition" >
                Download CV
            </a>

            <a href="#contact" className="w-full sm:w-auto text-center px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"  >
                Contact Me
            </a>

            </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilpic}
            alt="Kabe Gutema"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}