import React from 'react'
import style from './Header-Footer.css'
import { Link } from 'react-router-dom'
import logo from './pictures/massage-logo.png'

export default function Header() {


  return (
   <header className='header'>
    <img src={logo} className='logo' />
    <h1>Massage studio</h1>
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
   </header>
  )
}
