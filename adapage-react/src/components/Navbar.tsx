import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { to: "/", label: "Profil" },
    { to: "/infocard", label: "Infos" },
    { to: "/quotes", label: "Citations" },
    { to: "/timeline", label: "Chronologie" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-elips-orange hover:text-elips-leather transition-colors"
          >
            ⚡ELIPS⚡
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-elips-gold font-medium hover:text-elips-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-elips-orange font-bold"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`fixed top-20 left-0 w-full bg-card lg:hidden overflow-hidden transition-all duration-500 ${
          toggleMenu ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setToggleMenu(false)}
              className="text-xl font-bold text-elips-black hover:text-elips-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
