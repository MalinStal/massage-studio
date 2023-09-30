import React, { useState } from 'react'
import { getUsersState } from '../../recoilstate/atoms'
import { useRecoilState } from 'recoil'

export default function Klientlist() {
    const [users, setUsres] = useRecoilState(getUsersState);
    const [input, setInput] = useState("")
    


    function filterTheList() {
        return users.filter((users => {
            return input.toLowerCase() === "" ? users : users.phone.toLowerCase().includes(input)
        }))

    }
    const filterList = filterTheList()
    const usersList = filterList.map((info, index) => {
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

    return (
        <>
            <div className="addminpage">
                <div className='input-div-klient-search'>

                    <input
                        className='input-klient-search'
                        placeholder='sök klient här'
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                </div>
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
            </div>
        </>
    )
}
