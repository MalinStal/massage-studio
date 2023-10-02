import React from "react";
import { useState } from "react";
import { getAllInStorage } from "../../storage/local-storage";
import style from './addminpage.css'
import { useNavigate } from "react-router-dom";

export default function Addminpage() {
  const bookings = getAllInStorage;
  const [data, setData] = useState(bookings);
 
 
  const data2=data.sort((a,b) =>{ return new Date(a.date) - new Date(b.date);})

  const navigate = useNavigate();
  const handelClick= () => { navigate('/klientlist')}

  const renderData = data2.map((value, index) => {
   return (
      <tr key={index}>
        <td>{value?.time}</td>
        <td>{value?.date}</td>
        <td>{value?.length}</td>
        <td> {value?.treatment}</td>
        <td >
          <ul className="kund-info-ul">
            <li>Namn: {value?.namn}</li>
            <li>Efternamn: {value?.efternamn}</li>
            <li>Telefon:{value?.telefon}</li>
          </ul>
        </td>
      </tr>
    );
  });
 
  return (
    <div className="addminpage">

      <h2 className="addminpage-bookings"> Klient bokningar </h2>
      <table className=" table-bookings">
        <thead>
        <tr>
          <th>tid</th>
          <th>datum</th>
          <th>längd</th>
          <th>Behandling</th>
          <th>kund</th>
        </tr>
        </thead>
        <tbody>
          {renderData}
        </tbody>
       
      </table>
      
      <button onClick={handelClick} className="button-render-klientlist">Sök kund</button>
    </div>
  );
}
