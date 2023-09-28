import React from "react";
import { useState } from "react";
import { fetchBooking, getAllInStorage } from "../../storage/local-storage";
import style from './addminpage.css'

export default function Addminpage() {
  const bookings = getAllInStorage;
  const [data, setData] = useState(bookings);

  const renderData = data.map((value, index) => {
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
      <table className="table-pricelist table-bookings">
        <thead>
        <tr>
          <th>tid</th>
          <th>datum</th>
          <th>längd</th>
          <th>Behandling</th>
          <th>kund</th>
        </tr>
        </thead>

        {renderData}
      </table>


    </div>
  );
}
