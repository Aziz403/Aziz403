import React from 'react'

import { motion } from 'framer-motion'

import Skill from './Skill'


const SkillList = ({skills,selectHandler,selected}) => {
  return (
    <motion.ul className="max-w-xl w-full"
      initial={{opacity:0,translateX:selected?'80vh':'-80vh'}}
      animate={{opacity:1,translateX:0}}
      transition={{duration:0.8,delay:0.2}}
      exit={{opacity:0,translateX:selected?'-80vh':'80vh'}}
    >
      {
        skills &&
        skills.map((skill,index)=>(
          <Skill skill={skill} Handler={selectHandler} key={index}/>
        ))
      }
    </motion.ul>
  )
}

export default SkillList