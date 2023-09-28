import React from 'react'
import style from './Header-Footer.css'
import { Link } from 'react-router-dom'
import Form from '../Form'
import logo from '../../pictures/massage-logo.png'

import { FacebookLogo, InstagramLogo, LinkedinLogo} from '@phosphor-icons/react'


export default function Footer() {
  return (
   <footer className='footer'>
     <nav className='navbar'>
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link className='nav-link' to="/">Hem</Link>
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
      <div>
  
        <a href="https://www.facebook.com/instagram" target="_blank"><FacebookLogo size={32} color='black'/> </a>
        <a href="https://www.instagram.com/" target="_blank"> <InstagramLogo size={32} color='black'/></a>
        <a href="https://www.linkedin.com/" target="_blank"> <LinkedinLogo size={32} color='black'/></a>
    
      </div>
      <img src={logo} className="logo-aside" alt='loga' />
     
      <section className="section , open-hours">

        <h3>Öppetider:</h3>
        <ul >
          <li >Måndag: 8-19</li>
          <li>Tisdag: 8-19</li>
          <li>Onsdag: 8-19</li>
          <li>Torsdag: 8-19</li>
          <li>Fredag: 8-19</li>
          <li>Lördag: 10-17</li>
          <li>Söndag: stängt</li>
        </ul>

      </section>
      <section className="section , news-letter">
      <label>Namn:</label>
      <input/>
      <label>Email:</label>
      <input/>
      <button>Skicka</button>
      </section>
   </footer>
  )
}
