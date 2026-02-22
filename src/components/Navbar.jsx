import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png"
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const offset = 80;
    const top = el.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = link.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-sm border-b"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo + Name */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img src={logo} alt="logo" className="h-15 w-auto" />
            <span className="font-bold text-slate-900 hidden sm:block">
              Muhammad Patel
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative cursor-pointer px-3 py-2"
              >
                <span
                  className={`transition ${
                    active === link.id
                      ? "text-indigo-600"
                      : "hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </span>

                {/* Active underline */}
                {active === link.id && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-indigo-600 rounded"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/Muhammad__Fullstack_developer_2026.pdf"
              target="_blank"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left font-medium hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <a
                href="/Muhammad__Fullstack_developer_2026.pdf"
                target="_blank"
                className="mt-auto px-4 py-3 bg-indigo-600 text-white rounded-lg text-center font-semibold"
              >
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};