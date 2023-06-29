import Link from 'next/link';
import React from 'react';

//components
import Logo from './Logo';
import { useRouter } from 'next/router';

/* 
  window.addEventListener("scroll", function () {
      if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-after-scroll");
      }
      else {
        navbar.classList.remove("navbar-after-scroll");
      }
    })
*/

//icons
import  { TwitterIcon ,GithubIcon, DribbleIcon, LinkedInIcon  } from './icons'

//
import{ motion } from 'framer-motion';

//nav links
const links = [
  {name : "Home",href : "/" ,className: "mr-4"},
  {name : "About",href : "/about", className : "mx-4"},
  {name : "project",href : "/project", className : "mx-4"},
  {name : "articles", href : "/articles", className : "ml-4"}
];

//nav icons
const iconsLinks = [
  {icons :  <TwitterIcon /> , target : "_blank" , href: "/" },
  {icons :<GithubIcon />, target : "_blank" , href: "/" },
  {icons : <DribbleIcon/>, target : "_blank" , href: "/" },
  {icons : <LinkedInIcon />, target : "_blank" , href: "/" },
  // {icons : "T", target : "_blank" , href: "/" },
  // {icons : "T", target : "_blank" , href: "/" },
]

//
const CustomLink = ({ name , href , className }) => {

  const router  = useRouter();
  console.log(router.asPath === href)

  return (
    <Link href={href} className={`${className} relative group`}>
        {name}

        <span 
          className={`h-[1px] bg-black inline-block absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>
          &nbsp;
        </span>
    </Link>
  )
}
 // {icons : "T", target : "_blank" , href: "/" },
  // {icons : "T", target : "_blank" , href: "/" },

const NavBar = () => {
  return (
    <header className=" w-full px-32 py-8 font-medium flex justify-between items-center">
        <nav>
            {links.map((link, index)=>(
               <CustomLink key={index} href={link.href} name={link.name} className={link.className} />
              
            ))}
        </nav>
       
        <nav className=' flex items-center justify-center flex-wrap gap-x-10'>
             {iconsLinks.map((iconLink, index)=>(
              <motion.a className='w-6' href={iconLink.href} target={iconLink.target} whileHover={{ y:-4}} whileTap={{scale:0.9}}>  
                  {iconLink.icons}
              </motion.a>
             ))}
        </nav>
          
        <div className=" absolute left-[50%] top-2 translate-x-[50%]">
          <Logo />
        </div>
        
    </header>
  )
}

export default NavBar