import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./icons";

const ProjectCard = ({ post, type, title, summary, img, link, github }) => {
  return (
    <div
      className=" bg-white h-64 min-h-64 max-h-64 rounded-xl flex flex-col
     items-center justify-center p-4 border border-solid border-dark text-dark"
    >
      <Link href={link} target="_blank">
        <Image src={img} alt="profile" className="w-full h-auto rounded-xl" />
      </Link>

      <div className="mt-2">
        <span></span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>

        <div className="flex gap-2 items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-8" />
          </Link>
          <Link
            className=" flex bg-dark justify-center items-center px-3 
            py-1 text-[11px] text-white rounded-[4px]"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
