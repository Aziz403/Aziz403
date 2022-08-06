import React,{useState,useEffect} from 'react'

import { motion } from 'framer-motion'

import Title from '../components/Title'
import ProjectList from '../components/ProjectList'
import Loading from '../components/Loading'
import Error from '../components/Error'


const Projects = () => {
  const [loading,setLoading] = useState()
  const [projects,setProjects] = useState()
  const [error,setError] = useState()

  useEffect(()=>{
    setProjects({})
  },[])


  return (
    <div className="min-h-screen bg-slate-700 p-2 text-slate-200 flex flex-col overflow-hidden">
      <Title val="Projects"/>
      <motion.div className="h-main pt-6 flex flex-col md:flex-row"
        initial={{opacity:0,translateY:'50vh'}}
        animate={{opacity:1,translateY:0}}
        transition={{duration:1,delay:0.5}}
      >
        {
          loading &&
          <Loading />
        }
        {
          projects &&
          <ProjectList projects={projects} />
        }
        {
          error &&
          <Error msg={error.msg} />
        }
      </motion.div>
    </div>
  )
}

export default Projects