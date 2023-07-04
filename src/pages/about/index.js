import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"


const About = () => {

  return (
    <>

      <Head>
         <title>Nathaniel | about</title>
         <meta name="description"  content="any description" />
      </Head>

      <main className="flex w-full py-32">

        <Layout>

        <AnimatedText text={`Passion Fuels Purpose!`}/>

        </Layout>

      </main>


    </>
  )
}

export default About

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