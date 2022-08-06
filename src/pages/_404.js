import React from 'react'

import { motion } from 'framer-motion'


const _404 = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center"
      initial={{opacity:0}}
      animate={{opacity:1}}
    >
      <span className="relative text-5xl md:text-7xl text-8bit-in">
        404 | Page Not Found
        <span className="absolute text-slate-200 left-0 text-8bit-out">
          404 | Page Not Found
        </span>
      </span>
      <button>
        Back to Home
      </button>
    </motion.div>
  )
}

export default _404