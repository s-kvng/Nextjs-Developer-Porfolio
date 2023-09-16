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
      <main className="flex flex-col items-center justify-cente md:px-32 px-3 w-full pt-24 pb-5  ">
        <Tabs />
      </main>
    </>
  );
};

export default Projects;
