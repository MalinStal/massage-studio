import React from 'react'
import { useState } from 'react'

export default function Formtest() {

    const [data, setData] = useState({
        namn:"",
        email: "",
        telefon: "",
        adress: "",
        zipkod: "",

    })

    const handelSubmit = e => {
        e.preventDefult()
        console.log(data)
    }
  return (

    <div>
      
    </div>
  )
}
