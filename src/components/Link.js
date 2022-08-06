import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const _Link = ({title,color,path}) => {
  const navigate = useNavigate();

  const delayAndGo = (e)=>{
    e.preventDefault()
    setTimeout(()=>navigate(path),500)
  }


  return (
    <Link to={path} onClick={delayAndGo} className={`text-${color ? color : 'cyan-400'} link`}>
      {title}
    </Link>
  )
}

export default _Link