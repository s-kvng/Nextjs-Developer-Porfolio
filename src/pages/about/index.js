import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import Head from "next/head";
import Image from "next/image";

import profile from "../../../public/images/profile/developer-pic-2.jpg";
import Tech from "@/components/Tech";

//Numbers animation
const AnimateNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span className="" ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Nathaniel | about</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex flex-col w-full py-32 dark:py-0 bg-[#f5f5f5]">
        <Layout className="pt-8 md:pt-14  md:px-12 px-1 lg:px-32">
          <AnimatedText
            text={`Passion Fuels Purpose!`}
            className="mb-14 md:!text-6xl !text-5xl"
          />

          <div className=" grid w-full grid-cols-8 gap-10 md:gap-4 lg:gap-16 px-2 md:px-0">
            <div className=" col-span-8 md:col-span-3 lg:col-span-4 flex flex-col items-start justify-start px-3 order-2 md:order-none">
              <h2 className=" text-lg font-bold mb-4 uppercase">Biography</h2>
              <p className=" font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className=" font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className=" font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className=" col-span-8 md:col-span-3 lg:col-span-4 relative h-max   border-2 border-solid
             border-black rounded-2xl p-8 bg-white dark:bg-black order-1 md:order-none"
            >
              <div className=" absolute top-0 -right-3 bg-black dark:bg-white -z-10 w-[102%] h-[103%] rounded-[2rem] " />
              <Image
                src={profile}
                alt="profile"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className=" col-span-8 md:col-span-2 lg:col-span-8 flex flex-row md:flex-col lg:flex-row items-end justify-between order-3 md:order-none">
              <div className="flex flex-col items-end justify-between">
                <span className=" inline-block text-4xl md:text-6xl font-bold">
                  <AnimateNumber value={10} />+
                </span>
                <h2 className=" text-sm md:text-xl font-meduim capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className=" text-4xl md:text-6xl font-bold">
                  <AnimateNumber value={20} />+
                </span>
                <h2 className="text-sm md:text-xl font-meduim capitalize text-dark/75">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className=" text-4xl md:text-6xl font-bold">
                  <AnimateNumber value={2} />+
                </span>
                <div className="text-sm md:text-xl font-meduim capitalize text-dark/75">
                  Years of experience
                </div>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;

/* 

<div className=" py-28 px-20">
      <div className="capitalize text-7xl font-bold text-center text-dark py-5 ">passion fuels purpose!</div>

      <div className="w-full bg-stone-950">
        <div className=" flex w-full bg-green-400 gap-5">
          <div className=" bg-red-400 w-[40%]">sjs</div>
          <div className=" bg-blue-500 w-[30%]">shd</div>
          <div className=" bg-amber-600 w-[30%]">djhsd</div>
        </div>
      </div>

    </div>

*/
