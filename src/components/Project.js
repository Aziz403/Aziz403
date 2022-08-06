import React,{useEffect} from 'react'

import { motion } from 'framer-motion'


const Project = ({project,openFun}) => {

  return (
    <motion.a className="relative bg-slate-800 border border-slate-600 w-full md:w-[300px] max-w-[500px] h-72 rounded-md group"
      initial={{opacity:0}}
      animate={{opacity:1}}
      whileTap={{scale:[1,0.95,1.05,1]}}
      onClick={()=>openFun(project.id)}
    >
      <img/>
      <motion.main className="bg-gradient-to-t from-slate-900 absolute bottom-0 w-full h-full p-4 flex flex-col justify-between rounded-md"
        initial={{opacity:0}}
        whileHover={{opacity:1}}
      >
        <Icons techniques={project.techniques}/>
        <div>
          <h2 className="font-bold text-slate-300">
            {project.title}
          </h2>
          <p className="text-slate-400">
            {project.desc}
          </p>
        </div>
      </motion.main>
    </motion.a>
  )
}

export default Project



const Icons = ({techniques})=>{
  let trans = [0,15,30,46,60].slice(0,techniques.length)
  return(
    <div className="flex justify-end items-center">
      {
        techniques.map((technique,index)=>(
          <img key={index} className={`bg-slate-900 border border-slate-700 shadow-2xl w-11 h-11 rounded-full translate-x-`} style={{transform:`translateX(${trans[(trans.length-1)-index]}px)`}} src={require(`../icons/${technique}.png`)}/>
        ))
      }
    </div>
  )
}