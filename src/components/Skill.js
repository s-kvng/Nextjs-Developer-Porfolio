import React from 'react';

import { motion } from 'framer-motion';

const Skill = ({ name , x , y }) => {

  return (
    <>
         <motion.div className=" bg-dark py-2 px-3 rounded-full text-white text-[13px] font-semibold flex items-center justify-center shadow-sm
          shadow-dark hover:cursor-pointer absolute"
          whileHover={{scale:1.05}}
          iynitial={{x:0,y:0}}
          whileInView={{x:x,y:y}}
          transition={{duration : 1.5}}
          viewport={{ once : true }}
        >
          {name}
        </motion.div>
    </>
  )
}

export default Skill