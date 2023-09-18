import React from 'react'
import Main from '../components/Main'
import style from './Hem-Behandling.css'
export default function Behandling() {
  return (
    <main className='behandling-priser'>
    
     <h3 className=''>Behandling och Priser</h3> 
     <section className='home-section'>
     <table className='table-pricelist'>
     <tr>
    <th>Behandling</th>
    <th>tid</th>
    <th>pris</th>
  </tr>
  <tr>
    <td> Djup Klassisk Massage</td>
    <td>30 min</td>
    <td>590 kr</td>
  </tr>
  <tr>
    <td> Djup Klassisk Massage</td>
    <td>60 min</td>
    <td>960 kr</td>
  </tr>
  <tr>
    <td>Djup Klassisk Massage </td>
    <td>90 min</td>
    <td>1350 kr</td>
  </tr>
  <tr>
    <td> Triggerpunkt Massage</td>
    <td>30 min</td>
    <td>590 kr</td>
  </tr>
  <tr>
    <td> Triggerpunkt Massage</td>
    <td>60 min</td>
    <td>960 kr</td>
  </tr>
  <tr>
    <td>Triggerpunkt Massage </td>
    <td>90 min</td>
    <td>1350 kr</td>
  </tr>
  <tr>
    <td> Avslappnande Massage </td>
    <td>30 min</td>
    <td>590 kr</td>
  </tr>
  <tr>
    <td>Avslappnande Massage </td>
    <td>60 min</td>
    <td>960 kr</td>
  </tr>
  <tr>
    <td>Avslappnande Massage </td>
    <td>90 min</td>
    <td>1350 kr</td>
  </tr>
 
  
     </table>
     </section>

     <section className='home-section'>
     <article className='home-artical'>
            Djup Klassisk Massage
          </article>
          <article className='home-artical'>
            Triggerpunkt Massage
          </article>
          <article className='home-artical'>
           Avslappnande Massage 
          </article>
     </section>
   
    </main>
  )
}
