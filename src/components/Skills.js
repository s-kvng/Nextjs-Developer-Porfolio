import React from "react";

import { motion } from 'framer-motion';

import Skill from "./Skill";

const skillList = [
  {name : "HTML" , x:"-20vw" , y:"-17vw"},
  {name : "CSS" , x:"-3vw" , y:"-8vw"},
  {name : "Javascript" , x:"20vw" , y:"2vw"},
  {name : "ReactJS" , x:"0vw" , y:"12vw"},
  {name : "NextJS" , x:"-10vw" , y:"-15vw"},
  {name : "Tailwindcss" , x:"0vw" , y:"-20vw"},
  {name : "Bootstrap" , x:"15vw" , y:"-13vw"},
  {name : "Firebase" , x:" -20vw" , y:" 2vw"},
  {name : "Django" , x:"0vw" , y:" 8vw"},
  {name : "Laravel" , x:"-15vw" , y:"14vw"},
]

const Skills = () => {
  return (
    <>
      <h2 className="text-7xl font-bold mt-64 w-full text-center">Skills</h2>
      <div className=" w-full relative h-screen flex  items-center justify-center bg-circularLight ">
        <motion.div className=" bg-dark p-8 rounded-full text-white font-semibold flex items-center justify-center shadow-sm shadow-dark hover:cursor-pointer"
          whileHover={
            {scale:1.05}
          }
        >
          web
        </motion.div>
      {/* <Skill name="css" x="-5vw" y="-10vw" /> */}
      {
        skillList.map((skill , index)=>(
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y}  />
        ))
      }
      </div>

     
    </>
  );
};

export default Skills;
