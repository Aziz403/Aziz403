import React from 'react'

const ProjectDetails = () => {
  return (
    <article className="w-full md:max-w-4xl h-full bg-slate-900 rounded-xl border border-slate-600 p-2 drop-shadow-2xl h-pd">
      <header className="flex justify-between p-2">
        <h1>Title</h1>
        <span>x</span>
      </header>
      <main className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">

        </div>
        <div className="w-full md:w-3/5">
          <p>
            qsdfsedf dsf ze fsdef zefzefizeopfj zefijzedfàze fzeiopfjze
            q sd dsqf sedfez fsdfezf fsdfssdf ezf edf dsf ze fsdef zefzefizeopfj zefijzedfàze fzeiopfjze
          </p>
          <div>
            github
          </div>
        </div>
      </main>
    </article>
  )
}

export default ProjectDetails