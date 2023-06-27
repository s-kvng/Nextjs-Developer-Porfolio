import Link from 'next/link';
import React from 'react';

//components
import Logo from './Logo';
import { useRouter } from 'next/router';

//nav links
const links = [
  {name : "Home",href : "/" ,className: "mr-4"},
  {name : "About",href : "/about", className : "mx-4"},
  {name : "project",href : "/project", className : "mx-4"},
  {name : "articles", href : "/articles", className : "ml-4"}
];

//nav icons
const iconsLinks = [
  {icons : "T", target : "_blank" , href: "/" },
  {icons : "T", target : "_blank" , href: "/" },
  {icons : "T", target : "_blank" , href: "/" },
  {icons : "T", target : "_blank" , href: "/" },
  {icons : "T", target : "_blank" , href: "/" },
  {icons : "T", target : "_blank" , href: "/" },
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


const NavBar = () => {
  return (
    <header className=" w-full px-32 py-8 font-medium flex justify-between items-center">
        <nav>
            {links.map((link, index)=>(
               <CustomLink key={index} href={link.href} name={link.name} className={link.className} />
              
            ))}
        </nav>
       
        <nav>
             {iconsLinks.map((iconLink, index)=>(
              <Link href={iconLink.href} target={iconLink.target}>  
                  {iconLink.icons}
              </Link>
             ))}
        </nav>

        <div className=" absolute left-[50%] top-2 translate-x-[50%]">
          <Logo />
        </div>
    </header>
  )
}

export default NavBar