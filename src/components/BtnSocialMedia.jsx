import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const BtnSocialMedia = () => {
    return (
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-green-600 border-2 mb-1 dark:mb-0 dark:border-0 border-green-800'>
              <a className='flex justify-between items-center w-full dark:text-gray-300'
                href="https://www.linkedin.com/in/sandesta-reza-456546203/">
                  Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:bg-gray-600 border-2 dark:border-0 border-green-800'>
              <a className='flex justify-between items-center w-full dark:text-gray-300'
                href="https://github.com/sandestareza">
                  Github <FaGithub size={30}/>
              </a>
            </li>
          </ul>
        </div>
    )
}

export default BtnSocialMedia