import Link from 'next/link';
import React ,{ useEffect , useState  } from 'react';

//components
import Logo from './Logo';
import { useRouter } from 'next/router';
 

//icons
import  { TwitterIcon ,GithubIcon, DribbleIcon, LinkedInIcon  } from './icons'

//animation
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
  return (
    <Link href={ href } onClick={() => {router.asPath === href && window.scrollTo(2 , 2)} } className={`${className} capitalize relative group`}>
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

  const [hasShadow , setHasShadow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  //
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
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
    <header className={`nav w-full px-32 py-8 font-medium flex justify-between items-center fixed top-0 z-50 ${hasShadow && "shadow-lg bg-gradient-to-tl from-sky-200 from-30% via-sky-300 to-sky-400"}`}>
        <nav>
            {links.map((link, index)=>(
               <CustomLink key={index} href={link.href} name={link.name} className={link.className} />
              
            ))}
        </nav>
       
        <nav className=' flex items-center justify-center flex-wrap gap-x-10'>
             {iconsLinks.map((iconLink, index)=>(
              <motion.a key={index} className='w-6' href={iconLink.href} target={iconLink.target} whileHover={{ y:-4}} whileTap={{scale:0.9}}>  
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