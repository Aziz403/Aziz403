import React,{useState} from 'react'

import { motion,AnimatePresence } from 'framer-motion'

import Title from '../components/Title'
import SkillList from '../components/SkillList'
import Skill from '../components/Skill'

import Map from '../imgs/map.png'
import {
  about,
  skills
} from '../Consts'




const About = () => {
  const [data,setData] = useState()

  const SelectedSkillHandler = (e)=>{
    setData(skills.filter(skill=>skill.name==e.target.id)[0].other)
  }

  const BackHandler = ()=>{
    setData(null)
  }





  return (
    <div className="relative min-h-screen bg-slate-700 p-2 text-slate-200 flex flex-col overflow-hidden">
      <Title val="About Me"/>
      <motion.div className="h-main pt-6 flex flex-col md:flex-row"
        initial={{opacity:0,translateY:'50vh'}}
        animate={{opacity:1,translateY:0}}
        transition={{duration:1,delay:0.5}}
      >
        <div className="w-full md:w-7/12 flex flex-col flex-shrink-0 items-center space-y-10">
          <div className="font-bold max-w-xl">
            <p className="first-letter:text-emerald-400 first-letter:font-extrabold first-letter:text-3xl text-xl">
              {about}.
            </p>
          </div>
          <img className="rounded drop-shadow-2xl w-full max-w-xl" src={Map}/>
        </div>
        <div className="w-full md:w-5/12 flex-shrink-0 h-skills overflow-y-auto overflow-x-hidden flex flex-col items-center">
          <h1 className='text-emerald-500 flex w-full justify-center'>
            <span className="relative text-5xl md:text-6xl text-8bit-in">
              Skills
                <span className="absolute text-slate-200 left-0 text-8bit-out">
                  Skills
                </span>
            </span>
          </h1>
          <AnimatePresence>
            {
              data ?
              <>
                <Skill selected Handler={BackHandler}/>
                <SkillList selected skills={data}/>
              </>
              :
              <SkillList selectHandler={SelectedSkillHandler} skills={skills}/>
            }
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default About

