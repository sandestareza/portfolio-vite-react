import React from 'react'
import { SKILLS } from '../data'

const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-slate-100 dark:bg-slate-900 dark:text-gray-300 text-green-800'>
        {/* Container */}
        <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 dark:border-green-600 border-green-800'>Skills</p>
                <p className='py-4'>These are the Thechnologies I've worked with</p>
            </div>
            {/* Icon */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-10'>
                {
                    SKILLS.map(item=>(
                        <div key={item.id} className='shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={item.img} alt={item.title} />
                            <p className='my-4'>{item.title}</p>
                        </div>                
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills