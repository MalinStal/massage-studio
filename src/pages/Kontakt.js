import React from 'react'
import { useEffect, useState } from 'react';
import style from './Kontakt.css'
import Main from '../components/Main'
import Modal from '../components/modal'

//ATT GÖRA I DENNA FIL 
 /* ` ev skriva ut detta i modalen 
Name: ${formData.name}, E-mail: ${formData.mail} Medelande: ${formData.text}.
`)*/



export default function Kontakt() {
  //state till modalen 
  const [isOpen, setIsOpen] = useState(false);

// ------------state and event for the form -----------------
  const [formData, setFormData] = useState({name: "", mail: "", text: ""});
  const [message, setMessage] = useState([]);  
  const handelChange= (event => {
    const { name, value } = event.target;
    setFormData((formData) => ({...formData, [name]: value}))
    
  })
 

  const HandelSubmit = event => {
   event.preventDefault() 
    setMessage([...message, formData ]);
    console.log(message)
   setFormData({name: "", mail: "", text: ""})
   setIsOpen(true)
  }

// ---------------------retrun ---------------------
  return (
    <>
     <Modal open={isOpen} onClose={()=> setIsOpen(false)}  
     meddelade='Tack för ditt medelande,'
     meddelade3='Vi svarar oftast inom 24 timmar' 
     btnmeddelande='Stäng'/>


      <section className='form-section'>
        <h3 className='headline'>Kontakt Oss</h3>
        <form className='contact-form' 
        onSubmit={HandelSubmit}>
           <label className='form-label'>Namn</label>
            <input
            className='form-input'
            type="text"
            name="name"
            value={formData.name}
            onChange={handelChange}/>
            
            <label className='form-label'>Mail</label>
            <input 
            className='form-input'
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handelChange}/>
            <label className='form-label'> Ditt meddelande</label>
           
          
          <textarea 
          id="text-area" 
          className='form-input'
          cols="30" 
          rows="50"
          value={formData.text}
          type="text"
          name="text"
          onChange={handelChange}
          ></textarea>
            <button 
            className='send-btn boka-btn'
           type='submit'
            > Skicka</button>
        </form>
        
        
    </section>
    </>
  )
}
