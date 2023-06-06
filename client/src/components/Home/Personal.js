import React from 'react'
import { Nav } from '../layout/Nav'
import { FilmsFavourites } from './FilmsFavourites'
import { ModifyUser } from './ModifyUser'
import { DeleteUser } from './DeleteUser'
import { NavLink } from "react-router-dom";


export const Personal = () => {



    const datesPersonal = JSON.parse(localStorage.getItem("correoRegistrado"))
    console.log(datesPersonal);




    return (
        <div >
            <Nav />

            <div className='divTotalPersonal'>

                {<ModifyUser />}
                {<FilmsFavourites />}

            </div>

            <div className='divResetFilm'>

                {/* <button className='butReStart' onClick={() => returnGame()}>QUIERO BUSCAR OTRA PELÍCULA</button> */}
                <li className='butReStart'> <NavLink to="/questions">Buscar otra película</NavLink></li>
                
            </div>


            <div className='divDeletePrin'>
                {<DeleteUser />}
            </div>


        </div >
    )
}
