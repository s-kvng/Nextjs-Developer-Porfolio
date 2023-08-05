import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./icons";

const ProjectCard = ({ post, type, title, summary, img, link, github }) => {
  return (
    <div className=" bg-black h-64 min-h-64 max-h-64 rounded-xl">
      <Link href={link} target="_blank">
        <Image src={img} alt="profile" className="w-full h-auto rounded-xl" />
      </Link>

      <div>
        <span></span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>

        <div className="flex">
          <Link href={github} target="_blank">
            <GithubIcon className="w-6" />
          </Link>
          <Link href={link} target="_blank">
            Visit Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
