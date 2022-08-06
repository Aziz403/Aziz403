import React from 'react'


import { motion } from 'framer-motion'

import Title from '../components/Title'
import InfoList from '../components/InfoList'

import {
  autoInfo
} from '../Consts'




const Study = () => {
  return (
    <motion.div className="relative min-h-screen bg-slate-700 p-2 text-slate-200 flex flex-col overflow-hidden"
      animate={{translateX:0,opacity:1}}
      exit={{translateX:'100vw',opacity:0}}
    >
      <Title val="Study"/>
      <motion.div className="h-main pt-6 flex flex-col md:flex-row"
        initial={{opacity:0,translateY:'50vh'}}
        animate={{opacity:1,translateY:0}}
        transition={{duration:1,delay:0.5}}
      >
        <div className="w-full md:w-1/2">
          <h1 className='text-purple-500 flex w-full justify-center'>
            <span className="relative text-5xl md:text-6xl text-8bit-in">
              Auto-Info
                <span className="absolute text-slate-200 left-0 text-8bit-out">
                  Auto-Info
                </span>
            </span>
          </h1>
          <div className="relative w-full h-study flex flex-col items-center space-y-10">
            <p className="text-8bit-in text-xl md:text-3xl text-center text-slate-300">
              lorem sdqfkza dqsfikzef mdfszerjgikzref dsfkzeiofj sdfez ezd fzefiosdujfze fez fdgresdf fsdgrze ds .
            </p>
            <main className="w-full max-w-xl h-full overflow-hidden overflow-y-auto">
              <InfoList data={autoInfo}/>
            </main>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0">
          <h1 className='text-purple-500 flex w-full justify-center'>
            <span className="relative text-5xl md:text-6xl text-8bit-in">
              School
                <span className="absolute text-slate-200 left-0 text-8bit-out">
                  School
                </span>
            </span>
          </h1>
          <div className="w-full h-study">
            <p className="text-8bit-in text-xl md:text-3xl text-slate-300">
              lorem sdqfkza dqsfikzef mdfs zerjgikzref dsfkzeiofj sdfez ezd fzefiosdujfze fez fdgres df fsdgrze ds .
              lo rem sdqfkza dqsfikzef mdfszerjgi kzref dsfkzeiofj sdfez ezd fzefios sdqfsd dujfze fez fdgresdf fsdgrze ds .
              lo rem sdqfkza dqsfikzef mdfszerj gikzref dsfkzeiofj sdfez ezd  osdujfze fez fdgresdf fsdgrze ds .
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Study