import React from 'react'

import Link from './Link'

import {
  about,
} from '../Consts'


const About = () => {
  

  return (
    <section className="overflow-hidden bg-slate-700 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3">

      </div>      
      <main className="w-full md:w-2/3 p-3 md:px-16"
      >
        <p className="text-slate-300 text-4xl text-8bit-in">
          &emsp;
          {about}
          .
          <Link path='about' title="See More..."/>
        </p>
      </main>
    </section>
  )
}

export default About