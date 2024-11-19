'use client';
import { motion } from "framer-motion";
import { useState } from "react";

const bounceVariants = {
  initial: { y: 0 },
  animate: {
    y: 50, // Mindre hopp
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      duration: 1.5,
    },
  },
};

export default function LandingPage() {
  const [isRedirecting] = useState(false);

  const words = ["HOS ", "ANDREJ"];

  return (
    <section className="fullscreen-section">
      <div className="mx-auto max-w-3xl flex-1 text-center relative z-4">
        {/* Main container for flex layout */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {/* Left image with fade-up animation */}
          <motion.img
            src="vete_revert.svg"
            alt="Your image"
            className="w-full h-auto max-w-[5vw] max-h-[20vh] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeOut",
            }}
          />

          {/* Text animation for words */}
          <div className="flex space-x-4">
            {words.map((word, wordIndex) => (
              <div key={wordIndex} className="flex space-x-4">
                {word.split("").map((letter, index) => (
                  <motion.div
                    key={`${wordIndex}-${index}`}
                    className="text-black font-bold items-center"
                    style={{
                      fontSize: "5vw",
                      lineHeight: "5vw",
                    }}
                    initial={{ scale: 1 }}
                    animate={{
                      scale: [1, 0.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeatDelay: 0.5,
                      delay: index * 0.2,
                    }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Right image with fade-up animation */}
          <motion.img
            src="vete.svg"
            alt="Your image"
            className="w-full h-auto max-w-[5vw] max-h-[20vh] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeOut",
            }}
          />
        </div>

        <div className="flex justify-center items-center space-x-4">
        <div className="flex justify-center items-center space-x-4">
  {/* First button */}
  <motion.div
    className="relative px-4 py-2 rounded-full text-black bg-gradient-to-r from-blue-500 to-green-400 shadow-lg hover:shadow-2xl cursor-pointer text-sm"
    variants={bounceVariants}
    initial="initial"
    animate="animate"
  >
    Beställ Online
    {/* Spegelreflektion */}
    <div className="absolute inset-x-0 bottom-[-10px] h-8 bg-gradient-to-t from-blue-500 to-green-400 opacity-25 rounded-full transform scale-y-[-1]"></div>
  </motion.div>

  {/* Second button */}
  <motion.div
    className="relative px-4 py-2 rounded-full text-black bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg hover:shadow-2xl cursor-pointer text-sm"
    variants={bounceVariants}
    initial="initial"
    animate="animate"
  >
    Meny
    {/* Spegelreflektion */}
    <div className="absolute inset-x-0 bottom-[-10px] h-8 bg-gradient-to-t from-purple-500 to-pink-400 opacity-25 rounded-full transform scale-y-[-1]"></div>
  </motion.div>

  {/* Third button */}
  <motion.div
    className="relative px-4 py-2 rounded-full text-black bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg hover:shadow-2xl cursor-pointer text-sm"
    variants={bounceVariants}
    initial="initial"
    animate="animate"
  >
    Ring och beställ
    {/* Spegelreflektion */}
    <div className="absolute inset-x-0 bottom-[-10px] h-8 bg-gradient-to-t from-red-500 to-yellow-400 opacity-25 rounded-full transform scale-y-[-1]"></div>
  </motion.div>
</div>

</div>

      </div>
    </section>
  );
}
