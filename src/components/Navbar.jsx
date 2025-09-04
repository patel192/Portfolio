import { motion } from "framer-motion";
import { useState,useEffect } from "react";
export const Navbar = () => {
    const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">MyPortfolio</h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => handleScroll(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
