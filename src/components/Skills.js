import React from "react";

import { motion } from "framer-motion";

import Skill from "./Skill";

const skillList = [
  { name: "HTML", x: "-20vw", y: "-20vw" },
  { name: "CSS", x: "-5vw", y: "-15vw" },
  { name: "Javascript", x: "28vw", y: "2vw" },
  { name: "ReactJS", x: "0vw", y: "21vw" },
  { name: "NextJS", x: "-20vw", y: "-15vw" },
  { name: "Tailwindcss", x: "0vw", y: "-22vw" },
  { name: "Bootstrap", x: "15vw", y: "-13vw" },
  { name: "Firebase", x: " -20vw", y: " 2vw" },
  { name: "Django", x: "0vw", y: " 12vw" },
  { name: "Laravel", x: "-15vw", y: "18vw" },
];

const Skills = () => {
  return (
    <>
      <h2 className="text-5xl md:text-7xl font-bold mt-32 md:mt-60 mb-10 w-full text-center">
        Skills
      </h2>
      <div className=" w-full relative sm:h-screen h-[60vh]  flex  items-center justify-center bg-circularLightSm dark:bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd lg:bg-circularLight lg:dark:bg-circularDark mb-10">
        <motion.div
          className=" bg-dark p-4 md:p-8 rounded-full text-white font-semibold 
          flex items-center justify-center shadow-sm shadow-dark 
          hover:cursor-pointer dark:bg-white dark:text-dark text text-xs sm:text-sm "
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        {/* <Skill name="css" x="-5vw" y="-10vw" /> */}
        {skillList.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
