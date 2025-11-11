import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/public/digital_tech_book_logo_design_template-removebg-preview.png"; // ✅ your logo path (adjust as needed)

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const offset = 70;
    const top = section.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollY = () => {
      setScrolled(window.scrollY > 50);
      let current = "home";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = link.id;
          }
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* ✅ Logo (replaces text) */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-15 w-auto object-contain sm:h-12 md:h-10 transition-transform hover:scale-105"
            style={{height:"30px",width:"30px"}}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`relative cursor-pointer group transition ${
                active === link.id ? "text-blue-400" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-400 transition-all ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-2/3 bg-black/95 backdrop-blur-md shadow-lg z-40 flex flex-col items-center justify-center space-y-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-xl cursor-pointer transition ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
                onClick={() => handleScroll(link.id)}
              >
                {link.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
