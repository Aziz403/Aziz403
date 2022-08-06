import React from 'react'



const Contact = () => {

  const submitHandler = (e)=>{

  }


  return (
    <section className="overflow-hidden bg-pink-600 flex flex-col md:flex-row">
      <main className="w-full md:w-5/12 py-0 px-2 md:p-8 flex justify-center items-center">
        <form onSubmit={submitHandler} className="space-y-4 pt-4 px-3 flex flex-col items-center w-full">
          <input className="hover-cursor box-content px-4 py-2 hover:ring-4 hover:ring-slate-300 transition-all duration-500 focus:ring-4 focus:ring-slate-600 rounded-md bg-pink-500 w-full max-w-[28rem] placeholder-pink-700 text-slate-200" placeholder="email..." type="email"/>
          <textarea className="hover-cursor box-content px-4 py-2 hover:ring-4 hover:ring-slate-300 transition-all duration-500 focus:ring-4 focus:ring-slate-600 rounded-md bg-pink-500 w-full max-w-[28rem] placeholder-pink-700 text-slate-200 resize-none" placeholder="message..." rows="10"></textarea>
          <button type='submit' className="hover-cursor relative -top-6 select-none text-5xl md:text-7xl text-center text-8bit-out text-slate-200 hover:text-slate-600 focus:text-slate-600 active:translate-x-1 translate-x-0 active:translate-y-1 translate-y-0 active:text-transparent transition-all duration-300">
            Contact me
            <span className="absolute top-0  select-none left-0 right-0 text-5xl md:text-7xl text-center text-8bit-in text-emerald-600">
              Contact me
            </span>
          </button>
        </form>
      </main>
      <div className="w-full md:w-7/12 p-2 md:p-8">
          <main >
            <p className="text-8bit-in text-3xl md:text-5xl text-slate-300">
              &emsp;rem . de l', quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survies, mais s'est aussinformatique, san.
            </p>
          </main>
      </div>
    </section>
  )
}

export default Contact