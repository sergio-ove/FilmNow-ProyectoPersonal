
export const localStorage = (clave, usuario) => {
  
    //CONSEGUIMOS LO QUE TENEMOS GUARDADO EN EL LOCAL
    let usuarios = JSON.parse(localStorage.getItem(clave))

    //COMPROBAMOS SI LO QUE TRAEMOS DEL LOCAL ES UN ARRAY.SI LO ES HACEMOS PUSH Y SI NO LO CREAMOS.
    if (Array.isArray(usuarios)) {
        usuarios.push(usuario)
    } else {
        usuarios = [usuario]
    }

    //GUARDAMOS EN EL LOCAL DE NUEVO
    localStorage.setItem(clave, JSON.stringify(usuarios))



    return usuarios;
}
