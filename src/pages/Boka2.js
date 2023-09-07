import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';


//ATT GÖRA I DENNA FIL 
//här ska det finnas en lista på alla lediga tider samt en knapp för att boka/välja den tid du ser.
//kommer behöva skapa en lista med alla bokningsbara tider som finns på en dag..... samt vilka dagar 
// behöver på något sätt gemföra alla tider med dagar på en vecka samt om alla 
//
//
export default function Boka2() {

  const [ifAvailable,setIfAvailable] = useState({})

  const navigate = useNavigate();
const handelClick = e => {navigate("/Boka3")}

  
  return (
    <main>
      <section>

      </section>
      <button onClick={handelClick}>Boka3</button>
    </main>
  )
}
