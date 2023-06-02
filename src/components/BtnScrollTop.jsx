import React from 'react';
import { FaArrowUp } from 'react-icons/fa' 
import { animateScroll as scroll } from "react-scroll";
import { Tooltip } from './Tooltip';

const BtnScrollTop = () => {

    const onTop = () =>  scroll.scrollToTop()    

    return (
        <div className='flex fixed flex-col right-5 bottom-5 transition-all'>
            <Tooltip tooltipMessage="To Top">
                <button onClick={onTop} className='rounded-full p-3 bg-green-800 dark:bg-green-600 text-md text-white font-bold transition-all hover:-translate-y-1'><FaArrowUp/></button>
            </Tooltip>
        </div>
    )
}

export default BtnScrollTop