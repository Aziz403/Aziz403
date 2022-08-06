import {useState} from 'react'

import {BsSearch} from 'react-icons/bs'

import Project from './Project'
import Modal from './Modal'
import ProjectDetails from './ProjectDetails'

import {projects} from '../Consts'


const ProjectList = () => {
    const [project,setProject] = useState()

    const SelectItem = (id)=>{
        setProject(projects.filter(p=>p.id==id)[0])
    }


    return ( 
    <div className="w-full">
        <HeaderSearchList/>
        <main className="flex flex-wrap justify-center gap-5">
            {
                projects.map((p)=>(
                    <Project key={p.id} project={p} openFun={SelectItem}/>
                ))
            }
        </main>
        {
            project &&
            <Modal closeFun={()=>setProject(null)}>
                <ProjectDetails project={project}/>
            </Modal>
        }
    </div>
    )
}

export default ProjectList









const HeaderSearchList = ()=>{
    return(
        <header className="flex justify-center md:justify-end px-2 md:px-10 my-4">
            <form className="w-full max-w-[360px] relative">
                <label>
                    <BsSearch className="w-6 h-6 text-slate-400 absolute ml-[0.35rem] my-[0.6rem]"/>
                </label>
                <input placeholder="Search..." className="hover-cursor w-full bg-transparent rounded-lg border-2 border-slate-600 hover:border-slate-500 py-2 pl-10 focus:border-emerald-500 placeholder:text-slate-400 text-slate-300"/>
            </form>
        </header>
    )
}


