import React from 'react'

import { motion } from 'framer-motion'

import Info from './Info'


const InfoList = ({data}) => {
  return (
    <motion.ul className="max-w-xl w-full divide-y divide-slate-600 border-y border-slate-600"
      initial={{opacity:0,translateX:'-80vh'}}
      animate={{opacity:1,translateX:0}}
      transition={{duration:0.8,delay:0.2}}
      exit={{opacity:0,translateX:'80vh'}}
    >
      {
        data &&
        data.map((item,index)=>(
          <Info item={item} key={index}/>
        ))
      }
    </motion.ul>
  )
}

export default InfoList