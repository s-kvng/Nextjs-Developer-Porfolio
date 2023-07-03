import React from 'react'

//icons
import { CircularText } from './icons'

//
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='  fixed left-6 bottom-[73px] flex justify-center'> 

        <div className=' h-auto w-44 flex overflow-hidden items-center justify-center relative'>
          <CircularText className="fill-black animate-spin-slow" />
          <Link href="mailto:kvngnathan8420@gmail.com" target={`_blank`} className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-black h-20 w-20 rounded-full text-white flex items-center justify-center shadow-lg shadow-dark'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe