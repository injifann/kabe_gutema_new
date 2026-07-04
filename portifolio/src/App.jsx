import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/layout/Navbar'
import Project from './sections/Project'

export default function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-gray-900">
    <Navbar/>
    <main className="pt-20">
        <Hero/>
        <Project/>
    </main>
    </div>
  )
}
