import React from 'react'



const Modal = ({closeFun,children}) => {
  return (
    <div onClick={closeFun} className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  )
}

export default Modal