import React from 'react'
import { EXPERIENCE } from '../data'

const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-slate-100 dark:bg-slate-900 dark:text-gray-300 text-green-800'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 dark:border-green-600 border-green-800'>
                        About
                    </p>
                </div>
                <div>                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Education</p>
                </div>
                <div>
                    <p className='font-sans '>Information System (S1) - 2020</p>                    
                    <p className='font-bold text-xl text-green-600 dark:text-gray-300'>Indo Global Mandiri University</p>                    
                    <p className='font-sans text-sm font-light'>Grade 3.38</p>                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Experience</p>
                </div>
                
                <div>
                    {
                        EXPERIENCE.map(item => (
                            <div key={item.id} className="mt-3">
                                <p className='font-sans'>{item.position}, {item.dateWork} {item.type}</p>                    
                                <p className='font-bold text-xl text-green-600 dark:text-gray-300'>{item.company}</p>                    
                                <p className='font-sans text-sm font-light'>{item.desc}</p>                    
                            </div>
                        ))
                    }             
                </div>
            </div>
        </div>
    </div>
  )
}

export default About