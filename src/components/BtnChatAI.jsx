import React, { useState } from 'react'
import { FaRobot, FaTimes, FaUser } from 'react-icons/fa'
import { BiSend } from 'react-icons/bi'
import { Tooltip } from './Tooltip'

import ChatGPTRequest from '../api/chatGPTRequest'

function BtnChatAI({showScroll}) {

    const [isShow, setIsShow] = useState(false)
    const [promt, setPromt] = useState("")
    const [messages, setMessages] = useState([])
    const [isError, setIsError] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    
    const handleChange =  e => {
        const { value } = e.target
        setPromt(value.trimStart())               
    }

    const handleSubmit = async () => {

        if (promt) {
            
            setMessages((prev=>[
                ...prev,
                {
                    type:'question',
                    content: promt,
                    loading: true
                }
            ]))
    
            setIsLoading(true)
    
            const { data, error } = await ChatGPTRequest(promt)
    
            setMessages((prev=>[
                ...prev,
                {
                    type:'answer',
                    content: data,
                    loading:false
                }
            ]))
    
            setIsLoading(false)
    
            setIsError(error)
    
            setPromt("")

            document.getElementById('boxMsg').addEventListener("DOMNodeInserted", e => {                           
                e.currentTarget.scroll({
                    top: e.currentTarget.scrollHeight,
                    behavior: 'smooth'
                })
            })

        }

    }
    

    return (
        <div className={`fixed text-end right-5 transition-all duration-300 ease-in ${showScroll ? ' bottom-[7rem]' : ' bottom-[4.1rem]'}`}>
            <div className='flex flex-col items-end'>
                {
                    isShow &&
                    <div className='w-[250px] h-[300px] bg-zinc-100 dark:bg-slate-900 rounded-md relative shadow-md dark:shadow-[#040c16]'>
                        <div className='W-full h-10 py-2 bg-green-800 dark:bg-green-600 rounded-t-md'>
                            <div className='flex justify-between items-center px-2'>
                                <p className='text-center font-bold w-full text-slate-100'>Chat AI</p>
                                <button type='button' className='focus:outline-none text-slate-100' onClick={()=>setIsShow(false)}><FaTimes /></button>
                            </div>

                            <div className='text-black mt-2 mx-2 max-h-[215px] overflow-auto text-xs' id='boxMsg'>
                                <div className='w-full flex gap-1 p-1'>
                                    <div className='h-full bg-green-200 rounded-full flex justify-center items-center p-2'>
                                        <FaRobot size={15} className="text-green-600"/>
                                    </div>
                                    <div className='w-full bg-green-300 rounded-sm p-2'>
                                        Can I help you? Please just ask
                                    </div>
                                </div>                                                            
                                {          
                                                                                               
                                    isError ?
                                    <div className='w-full flex gap-1 p-1'>
                                        <div className='h-full bg-green-200 rounded-full flex justify-center items-center p-2'>
                                            <FaRobot size={15} className="text-green-600"/>
                                        </div>
                                        <div className='w-full bg-green-300 rounded-sm p-2'>
                                            {isError}
                                        </div>
                                    </div>
                                    :
                                    messages.map((message,i)=>(
                                        <div key={i} className='w-full flex gap-1 p-1'>
                                            {                                                
                                                message.type === 'answer' ? 
                                                <div className='h-full bg-green-200 rounded-full flex justify-center items-center p-2'>
                                                    <FaRobot size={15} className="text-green-600"/>
                                                </div>
                                                :
                                                null
                                            }
                                            
                                            <div className={`w-full rounded-sm p-2 ${message.type === 'answer' ? 'bg-green-300' : 'bg-green-600 text-green-200' }`}>                                                        
                                                {
                                                    
                                                    i === messages.length - 1 ? 
                                                        message.type === 'answer' ?                                                            
                                                            message.content
                                                        :
                                                            message.content
                                                    :
                                                    message.content
                                                }
                                            </div>
                                                
                                            {
                                                message.type === 'question' ?
                                                <div className='h-full bg-green-200 rounded-full flex justify-center items-center p-2'>
                                                    <FaUser size={15} className="text-green-600"/>
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                    ))                                                                                                            
                                }
                                {
                                    isLoading &&
                                    <div className='w-full flex gap-1 p-1'>
                                        <div className='h-full bg-green-200 rounded-full flex justify-center items-center p-2'>
                                            <FaRobot size={15} className="text-green-600"/>
                                        </div>
                                        <div className='w-full bg-green-300 rounded-sm p-2'>
                                            I'm thinking...
                                        </div>
                                    </div>
                                }
                               
                                
                            </div>

                            <div className='w-full p-2 bg-green-200 dark:bg-slate-800 absolute bottom-0'>
                                <div className='flex justify-between gap-1'>
                                    <input 
                                        type="text" 
                                        className='px-3 py-1 w-full text-xs rounded-full text-black focus:outline-green-200 border-0 focus:border-0' 
                                        placeholder='Ask something here...' 
                                        onChange={handleChange}
                                        value={promt}
                                        onKeyUp={(e)=>{
                                            if (e.keyCode === 13) handleSubmit()
                                        }}
                                    />
                                    <button 
                                        type='button' 
                                        className='bg-green-600 rounded-full p-2 text-xs focus:outline-green-200'
                                        onClick={handleSubmit}
                                    >
                                        <BiSend /> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                }
                <Tooltip tooltipMessage="Chat AI">
                    <button className='w-10 h-10 rounded-full p-3 bg-green-800 dark:bg-green-600 text-md text-white font-bold hover:bg-green-900 group' onClick={()=>setIsShow(!isShow)}>
                        <FaRobot className='group-hover:text-slate-300'/>
                    </button>
                </Tooltip>
            </div>
        </div>
    )
}

export default BtnChatAI