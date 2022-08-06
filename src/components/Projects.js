import React from 'react'

import Link from './Link'


const Projects = () => {
  return (
    <section className="overflow-hidden bg-cyan-700">      
      <header className="p-2 md:p-4">
        <h1 className="hover-cursor text-fipps text-2xl md:text-6xl text-slate-200">
          Projects
        </h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">

        </div>
        <main className="w-full md:w-1/3 p-4 md:p-8">
            <p className="text-8bit-in text-gray-200 text-4xl md:text-5xl">
              &emsp;Le Lorem . de l', quand un  pas fait que survivre cinq sicles, mais s'est aussi adapté  la bureautique informatique, sans que son contenu n'en soit modifié. Il a été po applications de mise en page de texte, comme Aldus PageMaker.
              <Link path='projects' title="See More..."/>
            </p>
        </main>
      </main>
    </section>
  )
}

export default Projects