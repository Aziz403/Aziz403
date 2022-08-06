import React from 'react'

import { motion } from 'framer-motion'



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
    scale:0.98,
    transition:{
      duration:0.2
    }
  },
}



const Info = ({item}) => {




  return (
    <motion.li className="px-2 py-3 space-y-4 list-none"
      variants={skillVariants}
      initial={{opacity:0,translateX:'80vh'}}
      animate={{opacity:1,translateX:0,transition:{duration:0.8}}}
      whileHover="hover"
    >
      <div className="flex space-x-1 select-none">
        <h1 className={`text-fipps text-xs md:text-lg text-slate-300`}>
          {item.name}
        </h1>
      </div>
      <div className="relative">
        <span className="w-full text-slate-200 font-bold flex justify-between">
          <span>
            {item.school}
          </span>
          <span>
            {item.date}
          </span>
        </span>
      </div>
    </motion.li>
  )
}

export default Info