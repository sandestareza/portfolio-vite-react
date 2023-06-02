import React from 'react'
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";

const Home = () => {

  return (
    <div id='home' className='w-full h-screen bg-slate-100 dark:bg-slate-900'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='dark:text-green-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold dark:text-slate-300 text-green-600'>Sandesta Reza</h1>
          <h2 className='text-4xl sm:text-7xl font-bold dark:text-slate-500 text-green-800'>I'm Frontend Developer</h2>
          <p className='dark:text-slate-500 py-4 max-w-[700px]'>I'm a developer who has responsive web design skills and beautiful UI, I like to learn new things according to my field and I can work in a team</p>
          <div>
            <LinkScroll to='contact' activeClass='text-green-400 font-bold' spy={true} smooth={true}>
              <button className='dark:text-white border-2 border-green-800 dark:border-slate-100 hover:bg-green-800 hover:text-white px-6 py-3 my-2 flex items-center dark:hover:bg-green-600 dark:hover:border-green-600 rounded-md'>Hire me <HiArrowNarrowDown className='ml-3'/></button>
            </LinkScroll>            
          </div>
        </div>
    </div>
  )
}

export default Home