import React, { useEffect, useState } from 'react'
import { getRandomInt } from '../../helpers/numberRandoom';
import { CardFilm } from './CardFilm';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'


export const GenerateFilms = () => {


    const [film, setFilm] = useState([]);
    const [filmUrl, setFilmUrl] = useState([]);
    const [pelis, setPelis] = useState([]);
    const [results, setResults] = useState(false);

    //tokens para acceder a la api:
    // const token1 = 'k_vxrfdfi8'
    //token cuenta mery21 - mery1234
    const token2 = 'k_86200214'
    // const token3 = 'k_jliqwuub'
    // const token4 = "k_r9znpzwm"
    //token cuenta maria21 - maria1234
    // const token5 = 'k_gugfs9gw'
    //constante para hacer la peticion de los trailers a la api
    const url = `https://imdb-api.com/en/API/YouTubeTrailer/${token2}`

    //Guardamos en el local las respuestas por el usuario
    const answer = JSON.parse(localStorage.getItem('quizAnswers'))
    //Guardamos en una constante el genero seleccionado
    const genres = answer.map(ans => ans.value);
    let acess = false;



    //Fetch para hacer peticion a la api por géneros
    useEffect(() => {

        if (acess == true) return;

        acess = true

        fetch(`https://imdb-api.com/es/API/AdvancedSearch/${token2}/?genres=${genres}`)
            .then((response) => response.json())
            .then(({ results }) => {
                filtrarPelis(results);
            })

    }, [])


    //Función para guardar las pelis favoritas en la base de datos.
    function save(title) {
        console.log(title)
        
        const dates = JSON.parse(localStorage.getItem("correoRegistrado") || [])
        console.log(dates);

        let FilmDates = {
            name_film: title,
            email: dates.email
        }

        setFilm(FilmDates)


        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(FilmDates),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };


        fetch("http://localhost:5000/insertFilm", Metadatos)
            .then((res) => console.log(res))
            .then((res) => console.log(res)
              
            );

 
    }



    async function fetchTrailers(pelis) {
        return Promise.all(
            pelis.map(peli => {
                return fetch(`${url}/${peli.id}`).then((response) => response.json())
            })
        );
    }


    async function filtrarPelis(data) {

        let listaFiltrada = filtrarPorDuracion(data)
        listaFiltrada = filtrarPorNota(listaFiltrada)

        if (listaFiltrada.length < 2) {
            setResults(true)
            return;
        }

        const pelisAMostrar = 2;
        const numAleatorios = [];

        while (numAleatorios.length < pelisAMostrar) {
            const nRandom = getRandomInt(listaFiltrada.length);

            if (!numAleatorios.includes(nRandom))
                numAleatorios.push(nRandom)
        }



        let pelisARenderizar = [];
        //Unimos varios arrays en una misma constante para facilitarnos la busqueda del trailer a posteriori.
        pelisARenderizar = pelisARenderizar.concat(listaFiltrada[numAleatorios[0]], listaFiltrada[numAleatorios[1]])
        console.log(pelisARenderizar)
        let trailers = await fetchTrailers(pelisARenderizar);
        console.log(trailers)

        //añadimos una propiedad a nuestro objeto para poder sacar el trailer que viene de otro fetch
        const pelisAllInfo = pelisARenderizar.map(peli => {
            const peliTrailer = trailers.find(trailer => peli.id === trailer.imDbId)
            return { ...peli, trailerUrl: peliTrailer.videoUrl }
        })

        const urlPeli = pelisARenderizar.map(peli => {
            const peliTrailer = trailers.find(trailer => peli.id === trailer.imDbId)
            return { trailerUrl: peliTrailer.videoUrl }
        })

        //Obtenemos mediante un split el identificador único de cada trailer que necesita el "iframe" para poder visualizarlo en pantalla
        const urlUnico = urlPeli.map(trailerUnico => {
            const urlDeCadaPeli = trailerUnico.trailerUrl.split("=")[1];
            return { urlDeCadaPeli }
        })

        setPelis(pelisAllInfo)
        setFilmUrl(urlUnico)

        console.log(urlUnico)
    }


    //filtramos por duración
    function filtrarPorDuracion(pelis) {
        const listaFiltrada = []

        pelis.forEach(peli => {
            if (peli.runtimeStr) {
                //Obtenemos la duración de cada película mediante un split
                const duracion = parseInt(peli.runtimeStr.split(" ")[0]);
                //Obtenemos la respuesta del usuario del LocalStorage
                const answerDuration = JSON.parse(localStorage.getItem("quizAnswers"))
                //Obtenmos la respuesta del usuario
                const answerSelection = answerDuration[1].value

                switch (answerSelection) {
                    case 1:
                        if (duracion <= 60)
                            listaFiltrada.push(peli)
                        break;
                    case 2:
                        if (duracion > 60 && duracion <= 120) {
                            listaFiltrada.push(peli)
                        }
                        break;
                    case 3:
                        if (duracion > 120) {
                            listaFiltrada.push(peli)
                        }
                        break;

                }
            }

        });

        return listaFiltrada;
    }


    //filtramos por nota
    function filtrarPorNota(pelis) {

        const listaFiltrada = []

        pelis.forEach(peli => {
            if (peli.imDbRating) {
                //convertimos el valor en número
                const nota = parseFloat(peli.imDbRating);
                //Obtenemos la respuesta del usuario
                const answerNotes = JSON.parse(localStorage.getItem("quizAnswers"))
                //Obtenemos la respuesta del usuario
                const answerSelection = answerNotes[2].value

                switch (answerSelection) {
                    case 1:
                        if (nota <= 6.8)
                            listaFiltrada.push(peli)
                        break;
                    case 2:
                        if (nota > 5 && nota <= 9.5) {
                            listaFiltrada.push(peli)
                        }
                        break;
                    case 3:
                        if (nota > 6.8) {
                            listaFiltrada.push(peli)
                        }
                        break;

                }
            }

        })

        return listaFiltrada;
    }




    return (

        <div>
            <NavBar />


            <div className='divTrailersYou'>

                {
                    filmUrl.length > 0 ? filmUrl.map((trailer, i) => (

                        <div key={i}>

                            <iframe width="800" height="400" className='iframes' src={`https://www.youtube.com/embed/${trailer.urlDeCadaPeli}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                        </div>

                    )) : ""
                }

            </div >

            <div className='divTotalfilm'>

                {pelis.length > 0 ? pelis.map((film, i) => (

                    <div key={i} className="boxFilm">

                        <CardFilm urlPoster={film.image} sinopsis={film.plot} title={film.title} time={film.runtimeStr} rating={film.imDbRating} votes={film.imDbRatingVotes} />
                        <input value="❤️" readOnly className='btnFav' onClick={() => save(film.title)} />

                    </div>

                )) : <div className='divNoResults'>
                    {results && <p className='pNoResults'>No se han encontrado películas</p>}
                    <div className="loader"></div>
                </div>}

            </div>


            <div className='divReturn'>

                <button className="butNav"><Link to='/questions'>QUIERO BUSCAR OTRA PELÍCULA</Link></button>
                <button className="butNav"><Link to='/home/personal'>VOLVER A MI ÁREA PERSONAL</Link></button>

            </div>

        </div >

    )
}
