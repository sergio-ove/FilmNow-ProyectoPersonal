import React from 'react'

export const CardFilm = ({ title, urlPoster, time, rating, votes, sinopsis, actors }) => {
  return (
    <div className='divFilms'>

      <img src={urlPoster} className="imgFilm" alt='imagen del Poster'></img>

      <div className='divInfoFilms'>

        <p className='tiFilmRo'>{title}</p>

        <p className='pTime'>{sinopsis}</p>

        <p className='pTime'>Duración: {time}</p>

        <p className='pPunt'>Puntuación: {rating}</p>

        <p className='pTime'>Votos:{votes}</p>

      </div>
    </div>
  )
}
