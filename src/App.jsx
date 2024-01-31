import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
import Form from './Components/Form'
import Login from './Components/Login'
export default function App() {
    const [Online , setOnline]=useState(false);
    return (

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home Online={Online} setOnline={setOnline}/>}/>
                <Route path="/login" element={<Login setOnline={setOnline}/>} />
            </Routes>

        </BrowserRouter>
    )
}
