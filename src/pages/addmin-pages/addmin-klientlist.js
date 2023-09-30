import React from 'react'
import { getUsersState } from '../../recoilstate/atoms'
import { useRecoilState } from 'recoil'

export default function Klientlist() {
    const [users,setUsres] = useRecoilState(getUsersState);
    console.log(users)
    const usersList = users.map((info, index) => {
            return ( 
            <tr key={index}>
                <td>{info.id}</td>
                <td>{info.firstName}</td>
                <td>{info.lastName}</td>
                <td>{info.email}</td>
                <td>{info.phone}</td>
                <td>{info.address.address}</td>
                <td>{info.address.postalCode}</td>
                <td>{info.address.city}</td>
            </tr>
            )
        })
        console.log(usersList)
  return (
    <>
    <label>Sök klient</label>
    <input/>
      <table className=" table-bookings">
      <thead>
        <tr>
            <th></th>
          <th>Namn</th>
          <th>EfterNamn</th>
          <th>Mail</th>
          <th>Telefon</th>
          <th>Adress</th>
          <th>Postkod</th>
          <th>Stad</th>
        </tr>
        </thead>
        <tbody>
            {usersList}
        </tbody>
       
      </table>
    </>
  )
}
