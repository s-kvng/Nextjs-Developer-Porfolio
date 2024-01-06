import React from "react";

import Tabs from "@/components/Tabs";

import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Nathaniel | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex flex-col items-center justify-center md:px-32 px-3 w-full pt-24 pb-5  h-[80vh]  bg-white dark:bg-dark">
        <Tabs />
      </main>
    </>
  );
};

export default Projects;
