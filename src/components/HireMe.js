import React from "react";

//icons
import { CircularText } from "./icons";

//
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="  fixed md:left-6 md:bottom-[73px] md:right-auto md:top-auto flex justify-center top-0 left-auto bottom-auto right-1 z-50">
      <div className=" h-auto md:w-44 w-24 flex overflow-hidden items-center justify-center relative">
        <CircularText className="fill-black animate-spin-slow" />
        <Link
          href="mailto:nathanieladama8420@gmail.com"
          target={`_blank`}
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-black md:h-20 md:w-20 h-12 w-12 rounded-full text-white flex items-center justify-center shadow-lg shadow-dark text-[10px] md:text-lg"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
