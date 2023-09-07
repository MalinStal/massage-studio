import React from 'react'
import style from './Boka.css'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Main from '../components/Main';

  /*const newDate = new Date() ;
  const day = newDate.getDate().toString().padStart(2,0);
  const month = (newDate.getMonth() +1).toString().padStart(2,0);
  const year = newDate.getFullYear();
  const currentDate= `${year}-${month}-${day}`
  return currentDate*/
function getDate() {
const today = new Date();
const date = today.setDate(today.getDate()); 
const defaultValue = new Date(date).toISOString().split('T')[0] 
return defaultValue
}


export default function Boka() {
// -------------------------treatment option----------------------
  const [behandling,setBehandling] =useState({behandling:""});
  const behandlingar = ["Djup Klassisk Massage", "Triggerpunkt Massage", "Avslappnande Massage",]
 
  const väljBehandlig= behandlingar.map((option, key)=> {
         return <option value={option} key={key}>
          {option}</option>
   })
 
   const handelChangeB = (e)=> {
    const {name, value} = e.target;

    setBehandling((option) => ({...option, [name]:value}))
   } 
   //------------------------- time option-------------------
   const [time, setTime] = useState({time:""})
   const timeOption = ["30 minuter", "60 minuter", "75 minuter"];

   const väljTime= timeOption.map((option, key)=> {
    return <option value={option} key={key}>
     {option}</option>
})

const handelChangeT = (e)=> {
const {name, value} = e.target;

setTime((option) => ({...option, [name]:value}))
} 
//-------handel submit ------------
const [formData,setFormData] = useState([]); 

const handelSubmit = () => {
setFormData([...formData, {behandling, time}])
console.log(formData)
}
// --------------- navigate to new page ---------------------------------
const navigate = useNavigate();
const handelClick = e => {navigate("/Boka2")}

  // ----- return ------
  return (
    <main>
      <h3 className='headline'>Boka Tid:</h3>
      <form className='boknings-form' onSubmit={handelSubmit}>
        <label className='form-label'> Välj datum: </label>
        <input 
        className='form-date form-label'
        type='date'
        defaultValue={getDate()}
     />
        <label className='form-label'> Välj behandling form </label>
        <select className='form-label'
        name= "behandling"
        value={behandling.behandling}
        onChange={handelChangeB}
        >
          <option value={""} disabled>
           Välj en Behandling
          </option>
          {väljBehandlig}
          </select>
        <label className='form-label'> Välj behandling längd</label>
        <select
        className='form-label'
        name= "time"
        value={time.time}
        onChange={handelChangeT}
        >
          <option value={""} disabled>
           Välj en behandlings längd
          </option>
          {väljTime}
          </select>
        <button type="submit" className='boka-btn serch-btn'onClick={handelClick} >Sök</button>
      
      
      
      </form>
    </main>
  )
}
