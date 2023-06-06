import React from 'react'

export const ModifyUser = () => {

    const datesPersonal = JSON.parse(localStorage.getItem("correoRegistrado"))
    const userEmail = datesPersonal.email
    const userName = datesPersonal.usuario
    const userYear = datesPersonal.year

    //FETCH  PARA MODIFICAR USUARIO
    const updateUser = async e => {

        e.preventDefault();

        let infoUpdate = {
            name_user: e.target.usuario.value,
            year_user: e.target.year.value,
            newEmail: e.target.email.value,
            email: userEmail
        }

        let infoUpdateLocal = {
            name_user: e.target.usuario.value,
            year_user: e.target.year.value,
            newEmail: e.target.email.value,
            email: e.target.email.value
        }

        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(infoUpdate),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("http://localhost:5000/update-user", Metadatos)
            .then((res) => console.log(res))
            .then((res) => {
                localStorage.setItem("usuarioLogado", JSON.stringify(infoUpdateLocal))

            });
    }


    return (

        <div>

            <div className='perLeft'>

                <form onSubmit={updateUser} className='formPersonal'>
                    <h4>Nombre de usuario:</h4>
                    <input type="text" defaultValue={userName} name="usuario" />
                    <h4>Correo electrónico:</h4>
                    <input type="text" defaultValue={userEmail} name="email" />
                    <h4>Año de nacimiento:</h4>
                    <input type="text" defaultValue={userYear} name="year" />
                    <br />
                    <input type="submit" className="btnUpdate" defaultValue="Modificar Usuario" />
                </form>

            </div>
        </div>
    )
}

