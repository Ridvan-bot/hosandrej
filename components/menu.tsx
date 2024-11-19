'use client';
import { motion } from "framer-motion";

export default function Menu() {
  // Animationens varianter
  const bounceVariants = {
    initial: { y: 0 }, // Ursprungsläge
    animate: {
      y: -20, // Hoppar upp
      transition: {
        y: {
          type: "spring", // Studseffekt
          stiffness: 300, // Hur mycket motstånd i fjädern
          damping: 10, // Dämpning för att stoppa studsen
          duration: 0.5, // Tidslängd
          repeat: Infinity, // Upprepar animationen
          repeatType: "reverse", // Går fram och tillbaka
        },
      },
    },
  };

  return (
    <section className="fullscreen-section flex justify-center items-center gap-4 h-screen bg-gray-100">
      {/* Knapp 1 */}
      <motion.div
        className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-green-400 shadow-md cursor-pointer"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      >
        Knapp 1
      </motion.div>

      {/* Knapp 2 */}
      <motion.div
        className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-400 shadow-md cursor-pointer"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      >
        Knapp 2
      </motion.div>
    </section>
  );
}
