import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SquircleLoader } from "react-awesome-loaders";
export const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
     <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        >
          {/* Squircle Loader */}
          <SquircleLoader
            boxSize={50}
            duration={2000}
            colors={["#3B82F6", "#60A5FA", "#2563EB"]}
          />

          {/* Loading Text */}
          <p className="mt-6 text-lg font-medium text-gray-300 tracking-widest">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
