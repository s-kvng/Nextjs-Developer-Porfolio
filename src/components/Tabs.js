import { useState } from "react";
import { Tab } from "@headlessui/react";

import ProjectCard from "./ProjectCard";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ projPic1 }) {
  console.log("first => ", Project1.src);

  let [categories] = useState({
    React: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        img: Project1,
        date: "5h ago",
        github: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        img: Project1,
        date: "2h ago",
        github: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "So you've bought coffee... now what?",
        img: Project1,
        date: "2h ago",
        github: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "So you've bought coffee... now what?",
        img: Project1,
        date: "2h ago",
        github: 3,
        shareCount: 2,
      },
    ],
    Nextjs: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        img: Project1,
        date: "Jan 7",
        github: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        img: Project1,
        date: "Mar 19",
        github: 24,
        shareCount: 12,
      },
    ],
    Django: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        img: Project1,
        date: "2d ago",
        github: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        img: Project1,
        date: "40d ago",
        github: 1,
        shareCount: 2,
      },
    ],
    Laravel: [
      {
        id: 1,
        title: "Ask Me Anything: 20 answers to your questions about coffee",
        img: Project1,
        date: "2d ago",
        github: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        img: Project1,
        date: "16d ago",
        github: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full flex flex-col  px-2 py-[27px] sm:px-0 bg-blue-500">
      <Tab.Group>
        <Tab.List className="flex space-x-1 self-center rounded-xl bg-blue-900/20 p-1 w-1/2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                "rounded-xl bg-white h-72 overflow-y-scroll py-3 px-10",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className=" grid grid-cols-3 text-white gap-20">
                {posts.map((post) => (
                  <ProjectCard
                    post={post}
                    title={post.title}
                    img={post.img}
                    link="/"
                    github="/"
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
