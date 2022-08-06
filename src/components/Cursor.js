import React,{useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom';




export const Cursor = () => {
    const location = useLocation()
    const cursor = useRef()

    const moveHanlder = (e)=>{
        cursor.current.style.left  = e.clientX +"px"
        cursor.current.style.top  = e.clientY +"px"
    }

    const animHandler = (list)=>{
        Array.from(list).forEach((item)=>{
            item.addEventListener('mouseover',()=>{
                cursor.current.classList.add('cursor-anim')
            })
            item.addEventListener('mouseleave',()=>{
                cursor.current.classList.remove('cursor-anim')
            })
        })
    }


    useEffect(()=>{
        document.addEventListener('mousemove',(e)=>{
            moveHanlder(e)
        })
        document.addEventListener('scroll',(e)=>{
            moveHanlder(e)
        })

        animHandler(document.getElementsByClassName('hover-cursor'))
        
        document.addEventListener('click',()=>{
            cursor.current.animate([
                { transform: 'translate(-50%,-50%) scale(1)' },
                { transform: 'translate(-50%,-50%) scale(0.7)' },
                { transform: 'translate(-50%,-50%) scale(1)' },
              ], {
                duration: 500,
              })
        })
    },[location?.pathname])

    return (
        <div ref={cursor} id="Cursor" className="hidden md:block"></div>
    )
}
