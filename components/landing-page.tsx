'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingPage() {
  const [isRedirecting] = useState(false);

  const words = ["HOS", "ANDREJ"];

  return (
    <section className="fullscreen-section">
      <div className="mx-auto max-w-3xl flex-1 text-center relative z-4">
        {/* Main container for flex layout */}
        <div className="flex items-center justify-center space-x-4">
          {/* Left image with fade-up animation */}
          <motion.img
            src="vete_revert.svg" // Replace with your image path
            alt="Your image"
            className="w-full h-auto max-w-[5vw] max-h-[20vh] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1, // Delay the fade-up by 2 seconds
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
            src="vete.svg" // Replace with your image path
            alt="Your image"
            className="w-full h-auto max-w-[5vw] max-h-[20vh] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1, // Delay the fade-up by 2 seconds
              duration: 1,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};
