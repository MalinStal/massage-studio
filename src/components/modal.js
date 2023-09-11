import React from 'react'
import useState from 'react'
import style from './modal.css'

export default function Modal({open,
    onClose,
    meddelade,
    meddelade2, 
    meddelade3,
    btnmeddelande,
    loga}) {
    if (!open) return null

    return (
        <>
        <div className="overlay" onClick={onClose}></div>
        <div className="modal-open">
        <img src={loga} className='logo' />
         <div>{meddelade}</div>
         <div className='modal-text2'>{meddelade2}</div>
         <div>{meddelade3}</div>
         <button onClick={onClose} className='close-modal-btn boka-btn'> {btnmeddelande}</button>
        </div>
        </>
    )}
   
    
  
