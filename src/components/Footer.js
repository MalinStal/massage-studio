import React from 'react'
import style from './Header-Footer.css'
import { Link } from 'react-router-dom'
import Form from './Form'
import logo from './pictures/massage-logo.png'


export default function Footer() {
  return (
   <footer className='footer'>
     <nav className='navbar'>
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link className='nav-link' to="/Hem">Hem</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/Behandling">Behandling & Priser</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/Boka"> Boka Tid</Link>
            </li>
            <li className='nav-li'>
                <Link className='nav-link' to="/Kontakt">Kontakta Oss</Link>
            </li>
        </ul>
    </nav>
    <img src={logo} className="logo-aside" />
      <section className="section , search-section">

        <label>SÖK</label>
        <input />
      </section>
      <section className="section , open-hours">
        <h3>Öppetider:</h3>

        <ul >
          <li >Måndag: 12-20</li>
          <li>Tisdag: 8-18</li>
          <li>Onsdag: 8-18</li>
          <li>Torsdag: 12-20</li>
          <li>Fredag: 8-17</li>
          <li>Lördag: 10-17</li>
          <li>Söndag: stängt</li>
        </ul>
      </section>
      <section className="section , news-letter">
        <Form 
        titel1={"Namn:"} 
        titel2={"E-mail:"} 
        btntitel={"Prenumerera"}
        btnClassName={"news-letter-btn"}
        className="news-letter-form"/>
      </section>
   </footer>
  )
}
