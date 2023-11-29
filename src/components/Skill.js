import React from "react";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className=" sm:bg-dark sm:dark:bg-white py-1 px-2 md:py-2 md:px-3 rounded-full sm:text-white sm:dark:text-dark text-[9px] md:text-[13px] sm:font-semibold 
        flex items-center justify-center sm:shadow-sm sm:shadow-dark hover:cursor-pointer absolute bg-transparent dark:bg-transparent font-bold text-dark dark:text-white"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    </>
  );
};

export default Skill;
