import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'



export const MostPopular = () => {

    const [popular, setPopular] = useState([]);
    const token2 = 'k_86200214'
    // const token6 = 'k_46720ug0'
    // const token4 = "k_r9znpzwm"
    // token cuenta lyvegama - lyvegama@gmail.com 12345678

    useEffect(() => {

        fetch(`https://imdb-api.com/en/API/MostPopularMovies/${token2}`)
            .then((response) => response.json())
            .then((response) => {
                setPopular(response.items);
                console.log(response.items)
            })

    }, [])
   



    return (

        <div>

        
            <div >

                <motion.div className='slider-container'>
                    <div className='menuFormation'>

                    </div>
                    
                    <motion.div className='slider' drag='x'
                        dragConstraints={{ right: 0, left: -5880 }} >

                        {popular.length > 0 ? popular.slice(0, 40).map((film, i) => (
                            <div key={i} >

                                <motion.div className='imageCarrusel'>

                                    <img src={film.image} className="imgTop" alt="imágenes top 40"></img>

                                </motion.div>
                            </div>

                        )) : "Cargando..."}

                    </motion.div>

                </motion.div>
            </div>

        </div>
    )

}