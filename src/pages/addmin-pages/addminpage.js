import React from "react";
import { useState } from "react";
import { fetchBooking, getAllInStorage } from "../../storage/local-storage";

export default function Addminpage() {
  const bookings = getAllInStorage;
  const [data, setData] = useState(bookings);
//skapa en unik key
  const renderData = data.map((value, key) => {
    return (
      <tr key={value.id}>
        <td>{value?.time}</td>
        <td>{value?.date}</td>
        <td>{value?.length}</td>
        <td> {value?.treatment}</td>
        <td>{`Namn: ${value?.namn}  
       Efternamn: ${value?.efternamn}
      Telefon:${value?.telefon}`}</td>
      </tr>
    );
  });

  //const sortData = renderData.sort((date) =>{})

  return (
    <div>
      <table className="table-pricelist table-bookings">
        <tr>
          <th>tid</th>
          <th>datum</th>
          <th>längd</th>
          <th>Behandling</th>
          <th>kund</th>
        </tr>

        {renderData}
      </table>
    </div>
  );
}
