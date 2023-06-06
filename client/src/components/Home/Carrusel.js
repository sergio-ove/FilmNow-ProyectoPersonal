import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lewobsky from '../../image/lewobsky.jpg'
import padrino from '../../image/padrino.jpg'
import terminator from '../../image/terminator.jpg'
import Footer from './Footer';
import { MostPopular } from './MostPopular';
import NavBar from './NavBar';




const Carrusel = () => {
  const [index, setIndex] = useState(0);
  // const [popular, setPopular] = useState([]);
  // const token2 = 'k_86200214'
  // const token6 = 'k_46720ug0'
  // const token4 = "k_r9znpzwm"
  // token cuenta lyvegama - lyvegama@gmail.com 12345678

  // useEffect(() => {
  //   fetch(`https://imdb-api.com/en/API/Top250Movies/${token4}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setPopular(response.items);
  //       console.log(response.items)
  //     })

  // }, [])

  // console.log(popular)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='divCarDiv'>
      <NavBar></NavBar>
 
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>

            <div className='divImageCarrusel' >
              <img
                className="d-block w-100"
                src={terminator}
                alt="First slide"
              />
            
            </div>
             
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
        
           <div className='divImageCarrusel' >
            <img
              className="d-block w-100"
              src={lewobsky}
              alt="Second slide"
            />
            </div>
          

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          
             <div className='divImageCarrusel' >
            <img
              className="d-block w-100"
              src={padrino}
              alt="Third slide"
            />
            </div>
         

            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <MostPopular></MostPopular>
      <div className='divFooter'>
      <Footer/>
      </div>
    </div>
  );
}

export default Carrusel;

