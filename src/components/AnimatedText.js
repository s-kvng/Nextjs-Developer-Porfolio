import React, { useEffect } from "react";

//
import { animate, motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="flex items-center justify-center text-center w-full mx-auto py-2 overflow-hidden">
      <motion.hi
        className={` text-7xl capitalize font-bold text-dark dark:text-white ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={`inline-block text-gradient `}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.hi>
    </div>
  );
};

export default AnimatedText;
