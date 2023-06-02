import React from 'react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'

const Contacts = () => {
  return (
    <div id='contact' className='w-full h-screen bg-slate-100 dark:bg-slate-900 dark:text-gray-300 text-green-800'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 dark:border-green-600 border-green-800'>
                        Contact
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='flex justify-evenly md:justify-around'>
                    <div className='group'>
                        <a href='mailto:sandesta24@gmail.com?subject=Requreitment' className='flex flex-col items-center py-5'>
                            <div className='w-20 h-20 dark:bg-green-600 bg-green-800 text-gray-100 mb-3 p-4 rounded-full'><MdOutlineMailOutline className='text-5xl'/></div>
                            <p className='text-sm font-sans cursor-pointer group-hover:underline'>sandesta24@gmail.com</p>
                        </a>
                    </div>
                    <div className='group'>
                        <a href='https://wa.link/9ujjhc' className='flex flex-col items-center py-5'>
                            <div className='w-20 h-20 dark:bg-green-600 bg-green-800 text-gray-100 mb-3 p-5 rounded-full'><BsTelephoneFill className='text-4xl'/></div>
                            <p className='text-sm font-sans cursor-pointer group-hover:underline'>Contact me</p>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-left'>My Address</p>                  
                    <p className='font-light font-sans text-center md:text-left'>Jl. Palembang-Sp.Padang KM.19 Desa Sako Kec. Rambutan, Banyuasin, Sumatera Selatan, Indonesia</p>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts