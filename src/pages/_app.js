//components
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
//styles
import "@/styles/globals.css";
//fonts
import { Montserrat } from "next/font/google";
//nextjs components
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  style: "italic",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={` ${montserrat.variable}  font-mont  w-full min-h-screen  dark:bg-dark`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
