import React from "react";
import BallCanvas from "./Ball";
import { technologies } from "@/constants";

const Tech = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="h-28 w-28" key={tech.name}>
          {console.log(tech.name, " ", tech.icon.src)}
          <BallCanvas icon={tech.icon.src} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
