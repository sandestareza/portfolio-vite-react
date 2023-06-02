import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from "react-scroll";
// import BtnChatAI from './BtnChatAI';
import BtnDarkMode from './BtnDarkMode';
import BtnScrollTop from './BtnScrollTop';
import BtnSocialMedia from './BtnSocialMedia';
import Logo from "../assets/mylogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isShow, setIsShow] = useState(false)  

  const clickHamburger = () => setNav(!nav)


  useEffect(() => {
      
    window.addEventListener('scroll', function(){
      if(window.scrollY > 400) setIsShow(true)
      else setIsShow(false)
    })


  }, [])

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-100 dark:bg-slate-900 shadow-md'>
        <div className='bottom-3 p-3 text-green-800 dark:text-slate-300 font-bold text-xl z-20'>
           <img src={Logo} alt='my-logo' className='w-10 h-10 md:w-14 md:h-14'/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex transition-all duration-150 ease-linear'>
          <li><LinkScroll to='home' activeClass='text-green-800 dark:text-green-500 font-bold' spy={true} smooth={true} className={'dark:text-slate-300 hover:text-green-800 dark:hover:text-green-500 hover:font-bold '} >Home</LinkScroll></li>
          <li><LinkScroll to='about' activeClass='text-green-800 dark:text-green-500 font-bold' spy={true} smooth={true} className={'dark:text-slate-300 hover:text-green-800 dark:hover:text-green-500 hover:font-bold '} >About</LinkScroll></li>
          <li><LinkScroll to='skills' activeClass='text-green-800 dark:text-green-500 font-bold' spy={true} smooth={true} className={'dark:text-slate-300 hover:text-green-800 dark:hover:text-green-500 hover:font-bold '} >Skills</LinkScroll></li>
          <li><LinkScroll to='portfolio' activeClass='text-green-800 dark:text-green-500 font-bold' spy={true} smooth={true} className={'dark:text-slate-300 hover:text-green-800 dark:hover:text-green-500 hover:font-bold '} >Portfolio</LinkScroll></li>
          <li><LinkScroll to='contact' activeClass='text-green-800 dark:text-green-500 font-bold' spy={true} smooth={true} className={'dark:text-slate-300 hover:text-green-800 dark:hover:text-green-500 hover:font-bold '} >Contact</LinkScroll></li>          
        </ul>

        {/* Hambuger */}
        <div onClick={clickHamburger} className='md:hidden z-20 cursor-pointer text-green-800 dark:text-slate-300'>
          { !nav ? <FaBars /> : <FaTimes />}          
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-200 dark:bg-slate-900 opacity-95 flex flex-col justify-center items-center transition-all duration-150 ease-linear z-10 '}>
          <li className='py-6 text-3xl'><LinkScroll to='home' activeClass='text-green-800 dark:text-green-400 font-bold' spy={true} smooth={true} className={'dark:text-slate-300  hover:text-green-800 dark:hover:text-green-400 hover:font-bold '} >Home</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='about' activeClass='text-green-800 dark:text-green-400 font-bold' spy={true} smooth={true} className={'dark:text-slate-300  hover:text-green-800 dark:hover:text-green-400 hover:font-bold '} >About</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='skills' activeClass='text-green-800 dark:text-green-400 font-bold' spy={true} smooth={true} className={'dark:text-slate-300  hover:text-green-800 dark:hover:text-green-400 hover:font-bold '} >Skills</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='portfolio' activeClass='text-green-800 dark:text-green-400 font-bold' spy={true} smooth={true} className={'dark:text-slate-300  hover:text-green-800 dark:hover:text-green-400 hover:font-bold '} >Portfolio</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='contact' activeClass='text-green-800 dark:text-green-400 font-bold' spy={true} smooth={true} className={'dark:text-slate-300  hover:text-green-800 dark:hover:text-green-400 hover:font-bold '} >Contact</LinkScroll></li>
        </ul>

        {/* Social Media */}
        <BtnSocialMedia/>

        {/* Dark Mode */}
        <BtnDarkMode
          showScroll={isShow}
        />

        {/* Dark Mode */}
        {/* <BtnChatAI
          showScroll={isShow}
        /> */}

        {
            isShow &&
            <BtnScrollTop/>
        }
    </div>
  )
}

export default Navbar