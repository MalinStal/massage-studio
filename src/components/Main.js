import React from 'react'
import style from './Main.css'
import headpic from './pictures/massage.avif'
import Button from './Button'

export default function Main() {
  return (
   <main>
    <section>
        <img src={headpic} className='head-pic'/>
        <h2 className='head-text'>Make time for yourself!</h2>
        <h3 className='head-text2'> </h3>
        
        <button className="boka-btn">Boka massage tid</button>
       
    </section>
   </main>
  )
}

// <Button btnClassName="boka-btn" title="Boka Nu!"/>