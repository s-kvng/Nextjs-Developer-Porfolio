import Link from 'next/link'
import React from 'react';

//framer motion animation
import { motion } from 'framer-motion';

const MotionLink  = motion(Link) 

const Logo = () => {
  return (
    <div className=' flex justify-center items-center mt-2'>
       <MotionLink href="/"
          whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)" , "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)"],
            transition:{duration:1, repeat: Infinity}
        }}
       className=" h-16 w-16 bg-dark text-light flex justify-center items-center rounded-full shadow-md shadow-dark">
            NEA
       </MotionLink>
    </div>
  )
}

export default Logo;