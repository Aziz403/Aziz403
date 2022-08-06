import React from 'react'

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { IoMdArrowDropleft } from 'react-icons/io'



const Title = ({val}) => {
  const navigate = useNavigate()
  
  const navigateBackHandler = ()=>{
    document.getElementById('Cursor').classList.remove('cursor-anim')
    navigate('/')
  }


  return (
    <motion.h1 className='text-emerald-500 flex items-end w-full'
      initial={{opacity:0,translateX:'100vw'}}
      animate={{opacity:1,translateX:0}}
      transition={{type:'spring',stiffness:40}}
    >
        <IoMdArrowDropleft onClick={navigateBackHandler} className="hover-cursor w-8 h-8 md:w-16 md:h-16 p-0 md:pt-3 hover:text-slate-200"/>
        <motion.span className="relative text-5xl md:text-7xl text-8bit-in"
        
        >
          {val}
            <span className="absolute text-slate-200 left-0 text-8bit-out">
              {val}
            </span>
        </motion.span>
    </motion.h1>
  )
}

export default Title