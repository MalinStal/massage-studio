import React from "react";
import { useState } from "react";
import { fetchBooking, getAllInStorage } from "../../storage/local-storage";


export default function Addminpage() {
  const bookings = fetchBooking(1);

  const [data, setData] = useState(bookings);
 
 console.log(data)
 const renderData = data.map(value => {
    return <li>{value.treatment}</li>
  }) 
// håller på att få localstorage att erndera ut alla objekt på samma gång. fungar inte i nuläget men att rendera ut på 1 id går bra med 
//renderdata. jobba ev bara vidare med detta och få ut alla iden kankse går att loppa på annat sätt i fetchen googla. 
  /*  
  
   const [allstor,setAllstor] = useState(allinstorager)
 console.log(allinstorager)

  const renderallinstor = allstor.map(value => {
    return <li>{value.treatment}</li>
  }) */


  return (
    <div>
      <ul> {renderData}</ul>
      
    
      
   

      <table className="table-pricelist">
        <tr>
          <th>Behandling</th>
          <th>längd</th>
          <th>datum</th>
          <th>tid</th>
        </tr>
        <tbody>
          <td> Djup Klassisk Massage</td>
          <td>30 min</td>
          <td>2023-10-07</td>
          <td>17:00</td>
        </tbody>
        <tbody>
          <td> Djup Klassisk Massage</td>
          <td>30 min</td>
          <td>2023-10-07</td>
          <td>17:00</td>
        </tbody>
        <tbody>
          <td> Djup Klassisk Massage</td>
          <td>30 min</td>
          <td>2023-10-07</td>
          <td>17:00</td>
        </tbody>
      </table>
    </div>
  );
}
