import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

export const StartSearch = () => {

    const [user, setUser] = useState("")

    const email = JSON.parse(localStorage.getItem('emailUsuarioLogado'))
  


    useEffect(() => {

        fetch(`http://localhost:5000/get-user/${email}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setUser(response)
            })

    }, [])

    localStorage.setItem("usuarioLogado", JSON.stringify(user))

    return (
        <div>
            <div className='start'>

                {user.length > 0 ? user.map((usuario) => (

                    <div key={usuario.id_user}>
                        <p className='pStart1'>¡Hola, {usuario.name_user}!</p>
                    </div>

                )) : <p></p>}

                <p className='pStart'>A continuación, te haremos unas preguntas para encontrar la película que estás buscando</p>
                <li className='butStart'> <NavLink to="/questions">COMENZAR</NavLink></li>
            </div>
        </div>
    )
}
