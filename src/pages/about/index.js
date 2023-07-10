import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import Head from "next/head";
import Image from "next/image";

import profile from "../../../public/images/profile/developer-pic-2.jpg";


//Numbers animation
const AnimateNumber = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration : 3000 })
  const isInView = useInView(ref, { once : true })

  useEffect(()=>{
    if(isInView){
      motionValue.set(value)
    }
  },[isInView , value , motionValue])

  useEffect(()=>{
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  },[ springValue , value ])

  return <span className="" ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Nathaniel | about</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="flex flex-col w-full py-32 bg-[#f5f5f5]">
        <Layout className=" pt-14  px-32">
          <AnimatedText text={`Passion Fuels Purpose!`} className="mb-14" />

          <div className=" grid grid-cols-8 gap-4">
            <div className=" col-span-3 flex flex-col items-start justify-start px-3">
              <h2 className=" text-lg font-bold mb-4 uppercase">Biography</h2>
              <p className=" font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className=" font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className=" font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className=" col-span-3 relative h-max w-full border-2 border-solid
             border-black rounded-2xl p-8 bg-white "
            >
              <div className=" absolute top-0 -right-3 bg-black -z-10 w-[102%] h-[103%] rounded-[2rem] " />
              <Image
                src={profile}
                alt="profile"
                className="w-full h-auto rounded-2xl"
              />
            </div>

              <div className=" col-span-2 flex flex-col items-end justify-between">
                <div className="flex flex-col items-end justify-between">
                  <span className=" inline-block text-6xl font-bold"><AnimateNumber value={10}/>+</span>
                  <h2 className=" text-xl font-meduim capitalize text-dark/75">Satisfied Clients</h2>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className=" text-6xl font-bold"><AnimateNumber value={20}/>+</span>
                  <h2 className=" text-xl font-meduim capitalize text-dark/75">Projects completed</h2>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className=" text-6xl font-bold"><AnimateNumber value={2}/>+</span>
                  <div className=" text-xl font-meduim capitalize text-dark/75">Years of experience</div>
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
