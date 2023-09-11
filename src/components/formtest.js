import React from 'react'
import { useState } from 'react'

export function Formtest(props) {
    
  const handelChange= (event => {
    const { name, value } = event.target;
   props.onChange
    
  })
 
//handelSubmit kallas som props och får referas till en ny const med vad man faktsit vill ska hända i formuläret.
  const HandelSubmit = event => {
   event.preventDefault() 
    props.onSubmit
  }
 
  return (

    <div>
      {props.children}
    </div>
  )
}
