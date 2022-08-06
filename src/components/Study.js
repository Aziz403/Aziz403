import React from 'react'

import Link from './Link'


const Study = () => {
  return (
    <section className="overflow-hidden bg-teal-500 flex flex-col md:flex-row">      
      <main className="w-full md:w-1/2 p-2 md:p-8">
        <header className="relative p-1 md:p-4 h-12 md:h-32">
          <h1 className="hover-cursor text-fipps text-2xl md:text-6xl text-slate-800">
            Bac + 2
          </h1>
        </header>
        <main className="p-2 md:pt-4">
          <p className="text-8bit-in text-slate-700 text-4xl md:text-5xl">
            &emsp;Le Lorem Ipsum est sim et la mise en page avante mise en page de texte, comme Aldus PageMaker en page de texte, comme Aldus PageMaker,
            <Link path='study' title="See More..."/>
          </p>
        </main>
      </main>
      <div className="w-full md:w-1/2">

      </div>
    </section>
  )
}

export default Study