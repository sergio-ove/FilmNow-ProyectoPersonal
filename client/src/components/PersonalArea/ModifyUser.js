import React from 'react'

export const ModifyUser = () => {

    const datesPersonal = JSON.parse(localStorage.getItem("usuarioLogado"))


    //FETCH  PARA MODIFICAR USUARIO
    const updateUser = async e => {

        e.preventDefault();

        let infoUpdate = {
            name_user: e.target.usuario.value,
            year_user: e.target.year.value,
            newEmail: e.target.email.value,
            email: datesPersonal.email
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

                    {datesPersonal ? datesPersonal.map((everyUser)=>(
                        
                        <div key={everyUser.id_user}>
                        <input type="text" defaultValue={everyUser.name_user} name="usuario" />
                        <h4>Correo electrónico:</h4>
                        <input type="text" defaultValue={everyUser.email} name="email" />
                        <h4>Año de nacimiento:</h4>
                        <input type="text" defaultValue={everyUser.year_user} name="year" />
                        </div>

                    )):""}
                    
                    <input type="submit" className="btnUpdate" value="Modificar Usuario" />
                </form>

            </div>
        </div>
    )
}

