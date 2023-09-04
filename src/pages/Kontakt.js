import React from 'react'
import { useEffect, useState } from 'react';
import style from './Kontakt.css'
import Main from '../components/Main'

export default function Kontakt() {

  const [namn, setNamn] = useState("");
  const [mail, setMail] = useState("");
  const [text,setText] = useState("");

  const [skicka, setSkicka] = useState([]);

  const sendForm = () => {
      setSkicka(...skicka, {namn, mail, text})
      setNamn("");
      setMail("");
      setText("");
      console.log(skicka) }

  return (
    <>
      <Main/>
      <section className='form-section'>
        <h3 className='headline'>Kontakt Oss</h3>
        <form className='contact-form'>
           <label className='form-label'>Namn</label>
            <input
            className='input'
            value={namn}
            onChange={(event) => {setNamn(event.target.value)}}/>
            
            <label className='form-label'>Mail</label>
            <input 
            className='input'
            value={mail}
            onChange={(event => {setMail(event.target.value)})}/>
            <label className='form-label'> Ditt meddelande</label>
           
          
          <textarea 
          id="text-area" 
          cols="30" 
          rows="50"
          value={text}
          onChange={(event) => {setText(event.target.value)}}
          ></textarea>
            <button 
            className='send-btn'
            onClick={sendForm}
            > Skicka</button>
        </form>
        
        
    </section>
    </>
  )
}
