import { useState } from "react";
import { Tab } from "@headlessui/react";

import ProjectCard from "./ProjectCard";
import Project1 from "../../public/images/projects/apps4.png";
import Project2 from "../../public/images/projects/apps3m.png";
import Project3 from "../../public/images/projects/apps2m.png";
import NeaPixels from "../../public/images/projects/nea-pixels1.png";
import Bookmark from "../../public/images/projects/bookmark_project.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ projPic1 }) {
  console.log("first => ", Project1.src);

  let [categories] = useState({
    React: [
      {
        id: 1,
        title: "React Portfolio",
        img: Project2,
        date: "5h ago",
        github: "https://github.com/s-kvng/Github-Portforlio",
        link: "/",
      },
      {
        id: 2,
        title: "Pokemon Verse",
        img: Project3,
        date: "2h ago",
        github: "https://github.com/s-kvng/Pokemon-verse",
        link: "https://pokemon-verse.netlify.app/",
      },
      {
        id: 3,
        title: "Xolace(Social Media web app)",
        img: Project1,
        date: "2h ago",
        github: "https://github.com/s-kvng/Witstone",
        link: "http://xolace.online/",
      },
      {
        id: 4,
        title: "Nea-Pixels(Simple E-commerce)",
        img: NeaPixels,
        date: "2h ago",
        github: "https://github.com/s-kvng/NEA-Pixels",
        link: "https://nea-pixels.pycode-camp.com/",
      },
    ],
    Nextjs: [
      {
        id: 1,
        title: "Bitbard-blogs",
        img: NeaPixels,
        date: "2h ago",
        github: "https://github.com/s-kvng/bitbard-blogs",
        link: "https://bit-bard-blogs.vercel.app/",
      },
    ],
    Django: [
      {
        id: 1,
        title: "Bookmark",
        img: Bookmark,
        date: "2h ago",
        github: "https://github.com/s-kvng/NEA-Pixels",
        link: "#",
      },
    ],
    Laravel: [
      {
        id: 1,
        title: "Xolace(Social Media web app)",
        img: Project1,
        date: "2h ago",
        github: "#",
        link: "http://xolace.online/",
      },
    ],
  });

  return (
    <div className="w-full flex flex-col  px-2 py-[27px] sm:px-0 bg-blue-500 dark:bg-dark rounded-lg">
      <Tab.Group>
        <Tab.List className="flex space-x-1 self-center rounded-xl bg-blue-900/20 p-1 lg:w-1/2 w-full">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow dark:text-black"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white dark:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-[31px]">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white dark:bg-dark h-72 overflow-y-scroll py-3 px-10",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  text-white gap-20 ">
                {posts.map((post) => (
                  <ProjectCard
                    post={post}
                    title={post.title}
                    img={post.img}
                    link="/"
                    github={post.github}
                    key={post.id}
                  />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
