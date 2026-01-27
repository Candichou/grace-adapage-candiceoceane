import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Portrait from "./pages/Portrait";
import Citation from "./pages/Citation";
import Specificite from "./pages/Specificite";
import Frise from "./pages/Frise";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Router>
        {/* Navigation */}
        <div>
          <nav>
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center w-5/6 mx-auto my-12">
                {/* Logo + desktop menu */}
                <div className="flex items-center gap-16 my-12">
                  <Link
                    to="/"
                    className="flex gap-1 font-bold text-gray-700 items-center "
                  >
                    ⚡ELIPS⚡
                  </Link>
                </div>
                <div className="hidden lg:flex gap-8 ">
                  <Link to="/specificite">Specificités</Link>
                  <Link to="/citation">Citation</Link>
                  <Link to="/frise">Frise</Link>
                </div>

                {/* Mobile menu button */}
                <button
                  className="lg:hidden"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  MENU
                </button>
              </div>
            </div>

            {/* Mobile navigation */}
            <div
              className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                toggleMenu ? "h-full" : "h-0"
              }`}
            >
              <div className="px-8 pt-8">
                <div className="flex flex-col gap-8 font-bold tracking-wider">
                  <Link to="/specificite">Specificités</Link>
                  <Link to="/citation">Citation</Link>
                  <Link to="/frise">Frise</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Portrait />} />
          <Route path="/specificite" element={<Specificite />} />
          <Route path="/citation" element={<Citation />} />
          <Route path="/frise" element={<Frise />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
