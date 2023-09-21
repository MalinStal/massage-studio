import React from "react";
import { useState } from "react";
import { fetchBooking } from "../../storage/local-storage";

//rederar ut alla bokningar i local storage
export default function Addminpage() {
  const bookings = fetchBooking();
  const [data, setData] = useState(bookings);
  //får ite denna JSON pars att fungera
  //const newData= JSON.parse(data)
  console.log(data);

  //const leta =  JSON.parse(data)

  return (
    <div>
      <ul> {data}</ul>

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
