import React from 'react'
import Layout from './Layout'
import  Link  from 'next/link'

const Footer = () => {
  return (
    <footer className=" text-lg text-gray-300 bg-dark font-medium">

        <Layout className={` flex justify-between items-center px-32 py-8 w-full `}>

            <span className=' capitalize'>{ new Date().getFullYear()} &copy; All rights reserved.</span>
            <Link href="#">Built with <span className=' text-pink-500 text-xl'>&#9825;</span> By&nbsp; <span className=''> s-kvng </span> </Link>
            <div href="#">Dont be shy to say <Link href="#" target={`_blank`}><span className='underline underline-offset-4'>Hi!</span></Link></div>
        </Layout>

    </footer>
  )
}

export default Footer