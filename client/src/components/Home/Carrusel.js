import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lewobsky from '../../image/lewobsky.jpg'
import padrino from '../../image/padrino.jpg'
import terminator from '../../image/terminator.jpg'
import Footer from './Footer';
import { MostPopular } from './MostPopular';
import NavBar from './NavBar';
import { NavLink } from "react-router-dom";



const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const datesLocal = JSON.parse(localStorage.getItem('usuarioLogado'))

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='divCarDiv'>
      <NavBar></NavBar>

      {datesLocal ? <li className='butRecomendador'> <NavLink to="/questions">Recomiéndame una película</NavLink></li> : <li className='butRecomendador'><NavLink to="/login">Logueate si quieres acceder al recomendador</NavLink></li>}

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
        <Footer />
      </div>
    </div>
  );
}

export default Carrusel;

