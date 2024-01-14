import Link from "next/link";
import React, { useEffect, useState } from "react";

//components
import Logo from "./Logo";
import { useRouter } from "next/router";

//icons
import {
  TwitterIcon,
  GithubIcon,
  DribbleIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./icons";

//animation
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

//nav links
const links = [
  { name: "Home", href: "/", className: "mr-4" },
  { name: "About", href: "/about", className: "mx-4" },
  { name: "projects", href: "/projects", className: "mx-4" },
  { name: "articles", href: "/articles", className: "ml-4" },
];

//mobile links
const mobileLinks = [
  { name: "Home", href: "/", className: "" },
  { name: "About", href: "/about", className: "" },
  { name: "projects", href: "/projects", className: "" },
  { name: "articles", href: "/articles", className: "" },
];

//nav icons
const iconsLinks = [
  {
    icons: <TwitterIcon />,
    target: "_blank",
    href: "https://twitter.com/sirr_nathan",
  },
  {
    icons: <GithubIcon />,
    target: "_blank",
    href: "https://github.com/s-kvng",
  },
  { icons: <DribbleIcon />, target: "_blank", href: "/" },
  {
    icons: <LinkedInIcon />,
    target: "_blank",
    href: "https://www.linkedin.com/in/nathaniel-e-adama-93802a234/",
  },
  // {icons : "T", target : "_blank" , href: "/" },
  // {icons : "T", target : "_blank" , href: "/" },
];

//
const CustomLink = ({ name, href, className }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.asPath === href && window.scrollTo(2, 2);
      }}
      className={`${className} capitalize relative group`}
    >
      {name}
      <span
        className={`h-[1px] bg-black dark:bg-white inline-block absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ name, href, className, toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
    router.asPath === href && window.scrollTo(2, 2);
  };
  return (
    <button
      href={href}
      onClick={handleClick}
      className={`${className} capitalize relative group my-2`}
    >
      {name}
      <span
        className={`h-[1px] bg-white dark:bg-black inline-block absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();

  //
  const handleClick = () => {
    setOpen(isOpen === true ? false : true);
  };

  //
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  //
  useEffect(() => {
    if (scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  }, [scrollY]);

  return (
    <header
      className={`nav w-full lg:px-32 px-8 py-8 font-medium flex lg:justify-between items-center fixed top-0 z-40 dark:bg-dark dark:text-white ${
        hasShadow &&
        "shadow-lg dark:bg-gradient-to-tl dark:from-zinc-700 dark:from-30% dark:via-zinc-800 dark:to-dark bg-gradient-to-tl from-sky-200 from-30% via-sky-300 to-sky-400 "
      }`}
    >
      <button
        className="flex flex-col justify-center items-start lg:hidden "
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white block w-6 h-0.5 rounded-sm transition-all duration-300 ease-in-out ${
            isOpen ? " rotate-45 translate-y-1 " : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-black dark:bg-white block w-4 h-0.5 rounded-sm transition-all duration-300 ease-in-out my-0.5 ${
            isOpen ? " opacity-0" : " opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block  h-0.5 rounded-sm transition-all duration-300 ease-in-out  ${
            isOpen ? "w-6 -rotate-45 -translate-y-1 " : "w-2 translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* desktop Nav */}
      <div className=" w-full lg:flex justify-between items-center hidden">
        <nav>
          {links.map((link, index) => (
            <CustomLink
              key={index}
              href={link.href}
              name={link.name}
              className={link.className}
            />
          ))}
        </nav>

        <nav className=" flex items-center justify-center flex-wrap gap-x-10">
          {iconsLinks.map((iconLink, index) => (
            <motion.a
              key={index}
              className="w-6"
              href={iconLink.href}
              target={iconLink.target}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              {iconLink.icons}
            </motion.a>
          ))}
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-black"} />
            )}
          </button>
        </nav>
      </div>

      {/* responsive nav */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 bg-dark/90 text-white dark:bg-light/90 dark:text-black rounded-lg py-32 transition-all duration-300 ease-in-out "
        >
          <nav className=" flex flex-col justify-between items-center">
            {mobileLinks.map((link, index) => (
              <CustomMobileLink
                key={index}
                href={link.href}
                name={link.name}
                className={link.className}
                toggle={handleClick}
              />
            ))}
          </nav>

          <nav className=" flex items-center justify-center flex-wrap gap-x-5 md:gap-x-7 mt-6">
            {iconsLinks.map((iconLink, index) => (
              <motion.a
                key={index}
                className="w-6"
                href={iconLink.href}
                target={iconLink.target}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                {iconLink.icons}
              </motion.a>
            ))}
            <button
              className="w-6"
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-black"} />
              ) : (
                <MoonIcon className={"fill-black"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className=" absolute md:left-[50%] md:top-2 md:translate-x-[50%] translate-x-[40%] left-[40%] right-auto">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
