import React from "react";
import Image from "next/image";

//
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

//
import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};

const AnimatedLightbulb = () => {
  const MotionImage = motion(Image);

  return (
    <div className=" absolute max-md:hidden md:bottom-0 md:right-7 w-16 right-5 -bottom-[20%]">
      <MotionImage
        src={lightBulb}
        alt="s-kvng"
        className="h-auto w-full"
        variants={animationVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default AnimatedLightbulb;
