import React from 'react'
import { NavLink } from "react-router-dom";

export const Nav = () => {

    const usersLocal = JSON.parse(localStorage.getItem("correoRegistrado"));

    return (
        <nav className="nav">
            <ul className="ulNav">
                <li className="liNav" onClick={()=> localStorage.removeItem("correoRegistrado")}><NavLink to="/">Cerrar sesión</NavLink></li>
                <li className="liNav">Sesión iniciada con: {usersLocal.email}</li>
            </ul>
        </nav>

    )
}
