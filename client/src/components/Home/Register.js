import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import filmNomNav from '../../image/filmnowNav.png'
import Footer from './Footer';



export const Register = () => {



  const registerUser = async e => {

    e.preventDefault();

    let UserDates = {
      name_user: e.target.name_user.value,
      year_user: e.target.year_user.value,
      email: e.target.email.value,
      pass: e.target.pass.value
    }


    let UserDatesLocal = {
      usuario: e.target.name_user.value,
      email: e.target.email.value,
      year: e.target.year_user.value,
      // pass: e.target.pass.value

    }


    let Metadatos = {
      method: 'POST',
      body: JSON.stringify(UserDates),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:5000/register", Metadatos)
      .then((res) => console.log('1', res))
      .then((res) => {
        console.log('2', res);
        localStorage.setItem("correoRegistrado", JSON.stringify(UserDatesLocal))
        window.location.replace("/registerConfirmed")


      });



  }


  return (
    <div>
      <NavBar />

      <form onSubmit={registerUser} className='formRegister'>

        <img src={filmNomNav} className="ImgLogoFilm2" />

        <p className='datesRegister'>Nombre de usuario</p>

        <input type="text" name='name_user' className='inputRegister' required ></input>

        <p className='datesRegister'>Año de nacimiento</p>

        <input type="text" name='year_user' className='inputRegister' required />

        <p className='datesRegister' > Correo electrónico</p>

        <input type="email" name='email' className='inputRegister' required />

        <p className='datesRegister'>Contraseña</p>

        <input type="password" name='pass' className='inputRegister' required />
        <br />
        <input type="submit" className="btnInfo" />
        <br />
        <p className='pRegister'>¿Ya tienes cuenta?<Link to='/home'>Accede</Link></p>

      </form>
      <div className='divFooter'>
      <Footer/>
      </div>
    </div>
  )
}
