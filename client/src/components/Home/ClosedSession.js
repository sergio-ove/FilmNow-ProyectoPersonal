import React, { useEffect } from 'react'

export const ClosedSession = () => {

    useEffect(() => {
      localStorage.removeItem("usuarioLogado");
    })
    

  return (

    <div>
    <div className='sesionClosed'>Se ha cerrado la sesión</div>
    </div>
    
  )
}
