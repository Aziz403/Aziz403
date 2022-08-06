import React from 'react'

import { motion } from 'framer-motion'

import {IoMdArrowDropleft} from 'react-icons/io'


const skillVariants = {
/*   hidden:{
    translateY:'-100vh',
    opacity:0
  },
  visible:{
    translateY:0,
    opacity:1,
  }, */
  hover:{
    scale:1.05,
    transition:{
      duration:0.2
    }
  },
  click:{
    scale:0.99    
  },
}



const Skill = ({skill,Handler,selected}) => {




  return (
    <motion.li className="px-2 py-3 space-y-2 list-none"
      variants={skillVariants}
      initial={{opacity:0,translateX:'80vh'}}
      animate={{opacity:1,translateX:0,transition:{duration:0.8}}}
      exit={{opacity:0,translateX:selected?'-80vh':'80vh'}}
      whileHover="hover"
      whileTap="click"
      onClick={Handler}
      id={skill?.name}
    >
      {
        skill ?
        <>
          <div id={skill.name} className="flex space-x-1 select-none">
            <h1 id={skill.name} className={`text-fipps text-xs md:text-xl text-slate-300`}>{skill.name}</h1>
            <p id={skill.name} className={`text-slate-400 text-xs md:text-md pt-2 md:pt-5 w-20 md:w-60 /* h-6 md:h-10 overflow-hidden */`}>
              {
                skill?.other?.map((s,i)=>(
                  <span id={skill.name} key={i}>{s.name}, </span>
                ))
              }
            </p>
          </div>
          <div id={skill.name} className="relative">
            <span id={skill.name} className="block w-full h-4 bg-slate-600"></span>
            <span id={skill.name} className={`absolute top-0 block h-4 bg-slate-300`} style={{width:`${skill.val}%`}}></span>
          </div>
        </>
        :
        <div className="flex">
          <IoMdArrowDropleft onClick={Handler} className="hover-cursor w-8 h-8 md:w-11 md:h-11 hover:text-slate-200"/>
          <h1 className={`text-fipps text-xs md:text-xl text-slate-300`}>Back</h1>
        </div>
      }
    </motion.li>
  )
}

export default Skill