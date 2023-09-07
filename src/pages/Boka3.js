import React from 'react'
import { useState
 } from 'react'


//ATT GÖRA I DENNA FIL 
//skapa ett formulär för den valda tiden att boka med kontakt uppgifter 
//gör den funktionel och spara kunden i lokalstorage elelr spara bara den bokade tiden i local storge. det viktga är att den bokade tiden försvinner från kaländenr. 
export default function Boka3() {
  const [data,setData] = useState({namn:"", efternamn:"", mail: "", telefon:"", adress:"", postnummer:"", stad:""})
 const handelChange = (e)=> {}
  return (
    <main>
      <form>
        <label>Namn</label>
        <input
        name='namn'
        value={data.namn}
        onChange={handelChange}/>
         <label>Efternamn</label>
        <input
        name='efternamn'
        value={data.efternamn}
        onChange={handelChange}/>
         <label>E-mail</label>
        <input
        name='mail'
        value={data.mail}
        onChange={handelChange}/>
         <label>Adress</label>
        <input
        name='adress'
        value={data.adress}
        onChange={handelChange}/>
         <label>Postnummer</label>
        <input
        name='postnummer'
        value={data.postnummer}
        onChange={handelChange}/>
         <label>Stad</label>
        <input
        name='stad'
        value={data.stad}
        onChange={handelChange}/>
      <select>
      <option> Välj betalmetod</option>
        <option>Kontokort</option>
        <option>Swish</option>
        <option>Epassi</option>
        <option>Rabattkort</option>
      </select>
       <button>boka</button>
      </form>
    </main>
  )
}
