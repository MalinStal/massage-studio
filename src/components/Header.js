import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  return (
   <header>
    <nav>
        <ul>
            <li>
                <Link to="/Hem">Hem</Link>
            </li>
            <li>
                <Link to="/Behandling">Behandling  & Priser</Link>
            </li>
            <li>
                <Link to="/Boka"> Boka Tid</Link>
            </li>
            <li>
                <Link to="/Kontakt">Kontakta Oss</Link>
            </li>
        </ul>
    </nav>
   </header>
  )
}
