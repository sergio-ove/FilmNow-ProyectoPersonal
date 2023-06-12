import React, { useState } from 'react';
import filmNomNav from '../../image/filmnowNav.png'
import { NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBInputGroup,
} from 'mdb-react-ui-kit';

export default function NavBar() {

  const [showNavSecond, setShowNavSecond] = useState(false);

  const [dates, setDates] = useState(false);

  const datesLocal = JSON.parse(localStorage.getItem('usuarioLogado'))

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
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <div className='divNavImage'>
          <MDBNavbarBrand href='/'><img src={filmNomNav} alt="logo" /></MDBNavbarBrand>
          
        </div>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/register'>Registro</MDBNavbarLink>
            {!datesLocal &&  <MDBNavbarLink href='/login'>Login</MDBNavbarLink>}
            {/* <MDBNavbarLink href='/login'>Login</MDBNavbarLink> */}
            <MDBNavbarLink href='/search'>Buscador por pelicula</MDBNavbarLink>
            {datesLocal &&  <MDBNavbarLink href='/login/personal'>Área Personal</MDBNavbarLink>} 
            <div className='divSesionNav'>
            {datesLocal && <p className='pNav'>Sesion inicidad con: {datesLocal[0].email}</p>}
            {datesLocal && <li className='liClosed' onClick={()=> localStorage.removeItem("usuarioLogado")}><NavLink to="/">Cerrar sesión</NavLink></li>} 
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
       
        </MDBInputGroup>
        
      </MDBContainer>
      
    </MDBNavbar>
    
  );
}