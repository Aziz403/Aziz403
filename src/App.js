import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'


import { AnimatePresence } from 'framer-motion'

import Index from './pages/index'
import About from './pages/about'
import Study from './pages/study'
import Projects from './pages/projects'

import { Cursor } from './components/Cursor'



function App() {
    //const useLocation = useLocation()


    return ( 
    <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
            <Routes location = { window.location } key = { window.location.pathname }>
                <Route path = '/' element = { <Index/> }/> 
                <Route path = '/about' element = { <About/> }/> 
                <Route path = '/study' element = { <Study/> }/> 
                <Route path = '/projects' element = { <Projects/> }/> 
            </Routes> 
            <Cursor/>
        </AnimatePresence> 
    </BrowserRouter>
    );
}

export default App;