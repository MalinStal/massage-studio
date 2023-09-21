import React from 'react'
import { useState } from 'react'

export function Formtest(props) {
    
  const handelChange= (event => {
    const { name, value } = event.target;

    props.setData((option) => ({ ...option, [name]: value }));
    console.log(props.Data);
    
  })
 
//handelSubmit kallas som props och får referas till en ny const med vad man faktsit vill ska hända i formuläret.
  const HandelSubmit = event => {
   event.preventDefault() 
    props.onSubmit()
    console.log(props.sub)
  }
 
  return (

    <div>
      {props.children}
    </div>
  )
}
