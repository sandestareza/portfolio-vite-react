import React from 'react'
import { PORTFOLIOS } from '../data'

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full md:h-screen bg-slate-100 dark:bg-slate-900 dark:text-gray-300 text-green-800 '>
        <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 dark:border-green-600 border-green-800'>Portfolio</p>
                <p className='py-6'>Here are some of the projects I've worked on</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
                {
                    PORTFOLIOS.map(item => (
                        <div key={item.id} style={{backgroundImage:`url(${item.img})`}} className='shadow-lg dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div z-auto'>                    
                            <div className='opacity-0 group-hover:opacity-100 p-5'>
                                <p className='text-2xl text-center font-bold dark:text-slate-100 text-green-600 tracking-wider'>
                                    {item.title}
                                </p>
                                <p className='text-sm text-center tracking-wider dark:text-gray-200'>
                                    {item.desc}
                                </p>
                                <div className='pt-8 text-center'>
                                    {
                                        item.link.demo ?
                                        <a href={item.link.demo} target="_blank" rel="noopener noreferrer">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Demo</button>
                                        </a>
                                        :
                                        null

                                    }
                                    {
                                        item.link.github ?
                                        <a href={item.link.github} target="_blank" rel="noopener noreferrer">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Github</button>
                                        </a>
                                        :
                                        null

                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }               
            </div>
        </div>
    </div>
  )
}

export default Portfolio