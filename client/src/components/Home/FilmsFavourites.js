import React from 'react'
import { useEffect, useState } from 'react'

export const FilmsFavourites = () => {

    const [films, setFilms] = useState([])
    const [filmDelete, setFilmDelete] = useState()
    const datesPersonal = JSON.parse(localStorage.getItem('usuarioLogado'))
    const userEmail = datesPersonal[0].email


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


    }, [filmDelete]);



    const deleteEveryFilm = async e => {

        e.preventDefault();


        let infoDelete = {
            email: userEmail,
            film: e.target.film.value

        }

        let Metadatos = {
            method: 'DELETE',
            body: JSON.stringify(infoDelete),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("http://localhost:5000/delete-films", Metadatos)
            .then((res) => console.log(res))
            .then((res) => {
               
            });

            setFilmDelete(films)

    }



    return (
        <div>

            <div className='perRight'>

                <h4 className='h1Personal'>Películas Guardadas</h4>

                {films.length > 0 ? films.map((film) => (


                    <div key={film.id_film} className="divFilmsFavo">

                        <p className='pNameFilm'>{film.name_film}</p>
                        <form onSubmit={deleteEveryFilm}>
                            <input type="submit" value={film.name_film} name='film' />
                        </form>


                    </div>


                ))
                    : <p>"No hay películas guardadas"</p>}

            </div>
        </div>
    )
}
