import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" md:text-lg text-base text-gray-300 bg-dark font-medium">
      <Layout
        className={` flex md-flex-row flex-col justify-between items-center md:px-32 py-8  w-full px-5 `}
      >
        <span className=" capitalize">
          {new Date().getFullYear()} &copy; All rights reserved.
        </span>
        <div className="flex items-center py-2 md:py-0">
          Built with <span className=" text-pink-500 text-xl">&#9825;</span>{" "}
          By&nbsp;{" "}
          <Link
            href="https://lead.pycode-camp.com"
            className="underline underline-offset-2"
          >
            s-kvng
          </Link>{" "}
        </div>
        <div href="#">
          Dont be shy to say{" "}
          <Link href="#" target={`_blank`}>
            <span className="underline underline-offset-4">Hi!</span>
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
