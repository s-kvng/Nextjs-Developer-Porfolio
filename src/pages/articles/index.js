import React from "react";

import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Nathaniel | Articles</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex flex-col mb-16 items-center justify-center overflow-hidden sm:min-h-[74.9vh] 2xl:min-h-[80.9vh]">
        <Layout className="pt-24">
          <AnimatedText text={"Articles"} />
          <ul>
            <li></li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
