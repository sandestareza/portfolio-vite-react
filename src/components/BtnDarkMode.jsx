import React, { useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { Tooltip } from './Tooltip'

function BtnDarkMode({showScroll}) {

    const [darkMode, setDarkMode] = useState(typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark' ? true : false)

    const root = window.document.documentElement
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }
    if (theme === lightTheme || theme === darkTheme) {
        root.classList.add(theme);
    } else {
        root.classList.add(lightTheme)
    }

    const handleDarkMode = () => {
        
        if (theme === darkTheme) {
            root.classList.replace(darkTheme, lightTheme);
            localStorage.setItem("theme", "light");
            theme = lightTheme
            setDarkMode(false)
        } else {
            root.classList.replace(lightTheme, darkTheme)
            localStorage.setItem("theme", 'dark')
            setDarkMode(true)
        }
    }

    return (
        <div className={`flex fixed flex-col right-5 transition-all duration-300 ease-in ${showScroll ? ' bottom-[4.1rem]' : ' bottom-5'}`}>
            <Tooltip tooltipMessage={!darkMode ? 'Dark' : 'Light'}>
                <button className='rounded-full p-3 bg-green-800 dark:bg-green-600 text-md text-white font-bold hover:bg-green-900 group' onClick={handleDarkMode}>
                    {
                        darkMode ?
                        <BsFillSunFill className='group-hover:text-slate-300'/>
                        :
                        <BsFillMoonFill className='group-hover:text-slate-300'/>
                    }
                </button>
            </Tooltip>
        </div>
    )
}

export default BtnDarkMode