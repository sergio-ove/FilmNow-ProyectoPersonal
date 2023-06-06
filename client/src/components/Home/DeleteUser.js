import React from 'react'

export const DeleteUser = () => {

    const datesPersonal = JSON.parse(localStorage.getItem("correoRegistrado"))

    const deleteDates = async e => {

        e.preventDefault();

        const emailRegister = datesPersonal.email

        let infoDelete = {
            email: emailRegister

        }

        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(infoDelete),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("http://localhost:5000/delete-user", Metadatos)
            .then((res) => console.log(res))
            .then((res) => {

            });

        localStorage.removeItem("usuarios");
        window.location = '/';

    }
  return (
    <div >
        <h1>Eliminar Cuenta</h1>
         <form onSubmit={deleteDates}>
                <input type="submit" className="btnDelete" defaultValue={datesPersonal.email} name="email" />
            </form>
    </div>
  )
}
