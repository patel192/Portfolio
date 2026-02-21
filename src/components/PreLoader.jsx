import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50"
        >
          {/* Brand / Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-wide"
          >
            Muhammad Patel
          </motion.h1>

          <p className="mt-2 text-slate-400 text-sm">
            MERN Stack Developer
          </p>

          {/* Progress Bar */}
          <div className="mt-10 w-64 h-1 bg-slate-800 rounded overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="mt-4 text-xs text-slate-500 tracking-widest"
          >
            INITIALIZING PORTFOLIO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};