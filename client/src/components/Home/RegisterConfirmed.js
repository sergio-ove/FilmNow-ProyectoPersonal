import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterConfirmed = () => {

  let nameUserRegister = JSON.parse(localStorage.getItem("correoRegistrado"));

  const confirmedEmail = async e => {

    e.preventDefault();

    let emailRegister = {
      email: e.target.email.value,

    }

    let Metadatos = {
      method: 'POST',
      body: JSON.stringify(emailRegister),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:5000/register-email", Metadatos)
      .then((res) => console.log('Email Enviado', res))
      .then((res) => {
        console.log('Correo enviado', res);

      });

    window.location = '/emailConfirmed'

  }


  return (
    <div>
      <form onSubmit={confirmedEmail} className='formConfirmed'>
        <p className='pUserRegister'>Casi hemos terminado!</p>
        <p className='pUserRegister2'>Se enviará un correo a la siguiente dirección para confirmar el registro:</p>
        <input type="text" defaultValue={nameUserRegister.email} readonly="readonly" className='inputUserRegister' name='email' />
        <input type="submit" className="btnEmailCon" value="Confirmar" />
      </form>

    </div>
  )
}
