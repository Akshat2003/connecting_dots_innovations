import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NeuButton } from "../ui/NeuButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle navigation to section on another page
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavigation = (path) => {
    if (path.includes("#")) {
      const [pagePath, sectionId] = path.split("#");
      const targetPage = pagePath || "/";

      if (location.pathname === targetPage) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/#services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "backdrop-blur-md bg-slate-900/80 border-b border-white/10 py-2"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => handleNavigation("/")}
          >
            {/* <div className="mr-2 w-8 h-8 md:w-10 md:h-10 rounded-lg  flex items-center justify-center text-white font-bold text-lg md:text-xl">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dot-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#14e0d9"/>
                  <stop offset="40%" stop-color="#3d8bfd"/>
                  <stop offset="70%" stop-color="#9f3fff"/>
                  <stop offset="100%" stop-color="#cf33ff"/>
                </linearGradient>
                <linearGradient id="text-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#14e0d9"/>
                  <stop offset="100%" stop-color="#9f3fff"/>
                </linearGradient>
                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#glow)">
                <line x1="65" y1="120" x2="105" y2="50" stroke="url(#dot-gradient)" stroke-width="4"/>
                <line x1="105" y1="50" x2="175" y2="60" stroke="url(#dot-gradient)" stroke-width="4"/>
                <line x1="105" y1="50" x2="95" y2="110" stroke="url(#dot-gradient)" stroke-width="4"/>
                <line x1="65" y1="120" x2="95" y2="110" stroke="url(#dot-gradient)" stroke-width="4"/>
                <line x1="95" y1="110" x2="140" y2="130" stroke="url(#dot-gradient)" stroke-width="4"/>
                <circle cx="65" cy="120" r="10" fill="url(#dot-gradient)"/>
                <circle cx="105" cy="50" r="10" fill="url(#dot-gradient)"/>
                <circle cx="175" cy="60" r="10" fill="url(#dot-gradient)"/>
                <circle cx="95" cy="110" r="10" fill="url(#dot-gradient)"/>
                <circle cx="140" cy="130" r="10" fill="url(#dot-gradient)"/>
              </g>
              <g>
                <text x="170" y="90" font-family="Montserrat, Arial, sans-serif" font-size="32" font-weight="bold" fill="url(#text-gradient)">CONNECTING</text>
                <text x="170" y="128" font-family="Montserrat, Arial, sans-serif" font-size="32" font-weight="bold" fill="url(#text-gradient)">DOTS</text>
                <text x="170" y="165" font-family="Montserrat, Arial, sans-serif" font-size="20" font-weight="bold" fill="url(#text-gradient)" letter-spacing="5">INNOVATIONS</text>
              </g>
            </svg>
            </div> */}
            <span className="font-bold text-lg md:text-xl tracking-tight">
              Connecting Dots Innovations
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isHashLink = item.path.includes("#");
              const currentPathWithoutHash = location.pathname;

              if (isHashLink) {
                const [pagePath, sectionId] = item.path.split("#");
                const targetPage = pagePath || "/";
                const isCurrentPage = currentPathWithoutHash === targetPage;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      text-sm transition-colors relative 
                      group
                      ${isCurrentPage ? "text-white" : "text-slate-300"}
                    `}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                    <span
                      className="
                        absolute bottom-0 left-0 w-0 h-0.5 
                        bg-gradient-to-r from-indigo-500 to-purple-500 
                        transition-all duration-300 
                        group-hover:w-full
                      "
                    />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    text-sm transition-colors relative 
                    group
                    ${
                      location.pathname === item.path
                        ? "text-white"
                        : "text-slate-300"
                    }
                  `}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                  <span
                    className="
                      absolute bottom-0 left-0 w-0 h-0.5 
                      bg-gradient-to-r from-indigo-500 to-purple-500 
                      transition-all duration-300 
                      group-hover:w-full
                    "
                  />
                </Link>
              );
            })}
            <Link to="/contact" onClick={() => handleNavigation("/contact")}>
              <NeuButton className="px-4 py-2 text-sm">
                Book an Appointment
              </NeuButton>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isHashLink = item.path.includes("#");

                if (isHashLink) {
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="
                        text-sm text-slate-300 hover:text-white 
                        transition-colors relative group py-2
                      "
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavigation(item.path);
                      }}
                    >
                      {item.name}
                      <span
                        className="
                          absolute bottom-0 left-0 w-0 h-0.5 
                          bg-gradient-to-r from-indigo-500 to-purple-500 
                          transition-all duration-300 
                          group-hover:w-full
                        "
                      />
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      text-sm hover:text-white transition-colors 
                      relative group py-2
                      ${
                        location.pathname === item.path
                          ? "text-white"
                          : "text-slate-300"
                      }
                    `}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavigation(item.path);
                    }}
                  >
                    {item.name}
                    <span
                      className="
                        absolute bottom-0 left-0 w-0 h-0.5 
                        bg-gradient-to-r from-indigo-500 to-purple-500 
                        transition-all duration-300 
                        group-hover:w-full
                      "
                    />
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigation("/contact");
                  }}
                >
                  <NeuButton className="w-full justify-center py-3">
                    Book an Appointment
                  </NeuButton>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
