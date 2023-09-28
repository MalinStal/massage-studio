import React from 'react'
import style from './Main.css'
import headpic from '../../pictures/massage.avif'

import { Navigate, useNavigate } from 'react-router-dom'


export default function Main() {

  const navigate = useNavigate();
  const handelClick = () => {navigate("/boka")}

  return (
   <main>
   
        <img src={headpic} className='head-pic' alt='massage picture'/>
        <h2 className='head-text'>Make time for yourself!</h2>
        <h3 className='head-text2'> </h3>
        
        <button className="boka-btn" onClick={handelClick}>Boka massage</button>
   
   </main>
  )
}

