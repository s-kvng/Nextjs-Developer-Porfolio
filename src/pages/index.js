import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";

//
import { useEffect } from "react";

//
import Typed from "typed.js";

import Link from "next/link";

//icons
import { LinkArrow } from "@/components/icons";

//images
import ProfilePic from "../../public/images/profile/port3.png";


//components
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import AnimatedLightbulb from "@/components/AnimatedLightbulb";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  //  useEffect(() => {
  //   new Typed('.developerText', {
  //     strings: ['Developer'],
  //     loop: true,
  //     typeSpeed: 120,
  //     backSpeed: 80,
  //     backDelay: 1500,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title className=" font-bold">Nathaniel E. Adama</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-black w-full min-h-screen  bg-blue-gradient ">
        <Layout className={`py-24 px-32`}>
          <div className={`flex justify-between items-center w-full `}>
            <div className=" w-1/2 ">
              <Image src={ProfilePic} alt="nathan" className=" w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center  h-[100%]">
           
              <AnimatedText text={" I am a full stack developer"} className=" py-7 !text-6xl !text-left pl-0"/>
              <p className="my-2 text-base font-medium mb-2">
                As a skilled full-stack <span className="developerText">Developer</span>, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
                <div className="flex items-center self-start gap-x-4"> 
                  <Link href="/dummy.pdf" target={"_blank"} download={true}
                    className=" bg-gray-900 text-white text-lg font-semibold p-3 rounded-lg shadow-xl hover:bg-gray-800 flex items-center ">
                    Resume <LinkArrow className="w-7 ml-1" />
                    
                  </Link>
                  <Link href="kvngnathan8420@gmail.com" className=" capitalize font-semibold text-lg underline underline-offset-4">
                    Contact
                  </Link>
                </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <AnimatedLightbulb/>
      </main>
    </>
  );
}
