import React from 'react'
import { useEffect, useState } from 'react'

export const FilmsFavourites = () => {

    const [films, setFilms] = useState([])
    const datesPersonal = JSON.parse(localStorage.getItem('usuarioLogado'))
    const userEmail = datesPersonal.email


    //FETCH PARA TRAERNOS LAS PELICULAS FAVORITAS DE CADA USUARIO

    useEffect(() => {

    let emailUser = {
        email: userEmail

    }


    let Metadatos = {
        method: 'POST',
        body: JSON.stringify(emailUser),
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
        },
    };


    fetch("http://localhost:5000/favorites-films", Metadatos)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            setFilms(response);
        })


    }, []);


    return (
        <div>
            
            <div className='perRight'>

                    <h4 className='h1Personal'>Películas favoritas</h4>

                    {films.length > 0 ? films.map((film) => (

                      
                            <div key={film.id_film} className="divFilmsFavo">

                                <p className='pNameFilm'>{film.name_film}</p>
                        

                            </div>
                    

                    ))
                        : <p>"No hay películas guardadas"</p>}
                        
                </div>
        </div>
    )
}
