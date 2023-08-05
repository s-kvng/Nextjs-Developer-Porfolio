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
      <main className="flex flex-col items-center justify-cente px-32 w-full pt-24 pb-5 bg-[#551e1e]">
        <Tabs />
      </main>
    </>
  );
};

export default Projects;
