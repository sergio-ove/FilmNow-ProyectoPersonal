import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Carrusel from '../Home/Carrusel'
import { EmailRegister } from '../Home/EmailRegister'
import { GenerateFilms } from '../Home/GenerateFilms'
import { Personal } from '../Home/Personal'
import { Questions } from '../Home/Questions'
import { Register } from '../Home/Register'
import { RegisterConfirmed } from '../Home/RegisterConfirmed'
import { Scrap } from '../Home/Scrap'
import { StartSearch } from '../Home/StartSearch'
import { Login } from '../Home/Login'




export const Rutas = () => {

    return (
        <BrowserRouter>
            <div className='routes'>
                <Routes>

                    <Route path="/" element={<Carrusel />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Scrap />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login/personal" element={<Personal />} />
                    <Route path="/registerConfirmed" element={<RegisterConfirmed />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/generate" element={<GenerateFilms />} />
                    <Route path="/start" element={<StartSearch />} />
                    <Route path="/emailConfirmed" element={<EmailRegister />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}