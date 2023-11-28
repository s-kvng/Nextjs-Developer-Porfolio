import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./icons";

const ProjectCard = ({ post, type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative bg-white h-64 min-h-64 max-h-64 rounded-xl flex flex-col
     items-center justify-center p-4 border border-solid border-dark text-dark shadow-xl shadow-dark"
    >
      {/* <div className=" absolute top-0 -right-3 bg-black w-[102%] h-[103%] rounded-[2rem] -z-[5]" /> */}

      <Link href={link} target="_blank">
        <Image src={img} alt="profile" className="w-full h-auto rounded-xl" />
      </Link>

      <div className="mt-2">
        <span></span>
        <Link
          className="hover:underline underline-offset-1"
          href={link}
          target="_blank"
        >
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>

        <div className="flex items-center justify-between">
          <Link
            className=" flex justify-center items-center 
            text-[12px] underline"
            href={link}
            target="_blank"
          >
            Visit
          </Link>

          <Link href={github} target="_blank">
            <GithubIcon className=" w-4 md:w-8" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
