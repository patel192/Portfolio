import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export const PreLoader = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay (2s), you can adjust
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
     <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
          {/* Animated Text / Logo */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-3xl md:text-5xl font-bold text-blue-400 tracking-wide"
          >
            MyPortfolio 🚀
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
