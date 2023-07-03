import React from "react";
import Image from "next/image";

//
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

//
import { motion } from "framer-motion";




const animationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  





const AnimatedLightbulb = () => {

    const MotionImage = motion(Image);


  return (
    <div className=" absolute bottom-0 right-7 w-16">
      <MotionImage src={lightBulb} alt="s-kvng" className="h-auto w-full" variants={animationVariants} initial="initial" animate="animate"/>
     
    </div>
  );
};

export default AnimatedLightbulb;
