import React from "react";
import { motion } from "framer-motion";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 text-center px-4">
      <motion.h1
        className="text-6xl font-bold text-green-600 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {error.status === 404 ? "404" : "Oops!"}
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {error.status === 404
          ? "Page Not Found – But stay healthy 🍎"
          : "Something went wrong – grab a fruit while we fix it!"}
      </motion.p>

      <motion.div
        className="flex gap-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <FloatingImage src="https://cdn-icons-png.flaticon.com/512/415/415682.png" alt="Broccoli" />
        <FloatingImage src="https://cdn-icons-png.flaticon.com/512/2909/2909767.png" alt="Avocado" />
        <FloatingImage src="https://cdn-icons-png.flaticon.com/512/6972/6972182.png" alt="Carrot" />
      </motion.div>

      <p className="mt-6 text-gray-500 text-sm">
        {error.statusText || error.message}
      </p>
    </div>
  );
}

// Floating animation component
function FloatingImage({ src, alt }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-20 h-20"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
