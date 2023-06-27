import Link from 'next/link';
import React from 'react';

//nav links
const links = [
  {name : "Home",href : "/"},
  {name : "About",href : "/about"},
  {name : "project",href : "/project"},
  {name : "articles", href : "/articles"}
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

const NavBar = () => {
  return (
    <header className=" w-full px-32 py-8 font-medium flex justify-between items-center">
        <nav>
            {links.map((link, index)=>(
              <Link key={index} href={link.href}>{link.name}</Link>
            ))}
        </nav>
        <h2>logo</h2>
        <nav>
             {iconsLinks.map((iconLink, index)=>(
              <Link href={iconLink.href} target={iconLink.target}>  
                  {iconLink.icons}
              </Link>
             ))}
        </nav>
    </header>
  )
}

export default NavBar