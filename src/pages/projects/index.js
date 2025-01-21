import React from "react";

import Tabs from "@/components/Tabs";

import Head from "next/head";
import { BackgroundGradientAnimation } from "@/components/aceternity-ui/background-gradient-animation";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Nathaniel | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <BackgroundGradientAnimation className="flex flex-col items-center justify-center md:px-32 px-3 w-full pt-28 pb-5  h-[100vh]   dark:bg-dark">
        <Tabs />
      </BackgroundGradientAnimation>
    </>
  );
};

export default Projects;
