import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Carrusel from '../Home/Carrusel'
import { EmailRegister } from '../Home/EmailRegister'
import { GenerateFilms } from '../Home/GenerateFilms'
import { Home } from '../Home/Home'
import { Personal } from '../Home/Personal'
import { Questions } from '../Home/Questions'
import { Register } from '../Home/Register'
import { RegisterConfirmed } from '../Home/RegisterConfirmed'
import { Scrap } from '../Home/Scrap'
import { StartSearch } from '../Home/StartSearch'



export const Rutas = () => {

    return (
        <BrowserRouter>
            <div className='routes'>
                <Routes>

                    <Route path="/" element={<Carrusel />} /> 
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/search" element={<Scrap />} />
                    <Route path="/home/register" element={<Register />} />
                    <Route path="/home/personal" element={<Personal />} />
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