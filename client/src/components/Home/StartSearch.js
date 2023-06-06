import React, { useEffect, useState } from 'react'

export const StartSearch = () => {

    const [user, setUser] = useState("")

    const userEmail = JSON.parse(localStorage.getItem('correoRegistrado'))
    console.log(userEmail);

    useEffect(() => {

        fetch(`http://localhost:5000/get-user/${userEmail}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setUser(response)})


        localStorage.setItem("usuarioLogado", JSON.stringify(userEmail))


    }, [])


    function goToHome() {
        window.location = '/questions'
    }

    return (
        <div>
            <div className='start'>
                <p className='pStart1'>¡Hola, {user && user.usuario}!</p>
                <p className='pStart'>A continuación, te haremos unas preguntas para encontrar la película que estás buscando</p>
                <button onClick={() => goToHome()} className="butStart">COMENZAR</button>
            </div>
        </div>
    )
}
