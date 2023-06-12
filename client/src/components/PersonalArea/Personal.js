import React from 'react'
import { FilmsFavourites } from './FilmsFavourites'
import { NavLink } from "react-router-dom";
import NavBar from '../Layout/NavBar'
import { DeleteUser } from './DeleteUser';
import { ModifyUser } from './ModifyUser';


export const Personal = () => {

    const datesPersonal = JSON.parse(localStorage.getItem("emailUsuarioLogado"))
    console.log(datesPersonal);


    return (
        <div >
            <NavBar></NavBar>

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
