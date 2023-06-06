import React from 'react'
import { useState } from 'react';
import NavBar from './NavBar';
import play from '../../image/play.png'



export const Scrap = () => {

    const [dates, setDates] = useState(false);

    const scraping = async e => {

        e.preventDefault();

        let loginDates = {
            dates: e.target.dates.value,
        }



        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(loginDates),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };


        fetch("http://localhost:5000/scrap", Metadatos)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setDates(response.arrayPelis)
            })
    }



    return (


        <div>
            <NavBar />

            <form className='formRegister2' onSubmit={scraping}>

                <input className='inputLogin2' placeholder='Introduce tu peli' type="text" name='dates' />
                <input className='inputLoginSearch' type="submit" value=" Buscar Película" />

            </form>
            <div className='divScrapFilms'>

                {dates.length > 0 ? dates.map((peli, i) => (

                    <div key={i}>

                        <img src={peli.img} className='imgCard' />

                        <div className='infoCardScrap'>

                            <p className='pTtiScrap'><i>{peli.tit}</i></p>
                            <p className='pSinScrap'><i>{peli.sin}</i></p>
                            <p className='pPltScrap'>{peli.plt}<img src={play}/></p>
                    

                        </div>


                    </div>

                )) : ""}

            </div>

        </div>
    )
}
