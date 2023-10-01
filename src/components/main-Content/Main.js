import React from 'react'
import style from './Main.css'
import headpic from '../../pictures/massage.avif'

import { Navigate, useNavigate } from 'react-router-dom'
import { ImageSquare } from '@phosphor-icons/react/dist/ssr';


export default function Main() {

  const navigate = useNavigate();
  const handelClick = () => {navigate("/boka")}

  return (
   <main>
   
        <div className='head-pic'></div>
        <h2 className='head-text'>Make time for yourself!</h2>
        <h3 className='head-text2'></h3>
        
        <button className="boka-btn" onClick={handelClick}>Boka online</button>
   
   </main>
  )
}

