import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
          {/* Loader: bouncing dots */}
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-4 h-4 bg-blue-500 rounded-full"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          <p className="mt-6 text-lg font-medium text-gray-300 tracking-widest">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
