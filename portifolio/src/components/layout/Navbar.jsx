export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* Code Icon */}
          <div className="text-indigo-600 font-bold text-lg tracking-tight select-none">
            <span className="text-indigo-500">&lt;</span>
            <span className="text-gray-900">/</span>
            <span className="text-indigo-500">&gt;</span>
          </div>

          {/* Name */}
          <span className="text-lg font-bold tracking-wide text-gray-900 group-hover:text-indigo-600 transition">
            Kabe
          </span>
        </div>
        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <li>
              <a href="#projects" className="hover:text-gray-900 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-900 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-900 transition">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-3 py-1 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
