import React from 'react'
import { fetchBooking } from '../1storage/local-storage'

//rederar ut alla bokningar i local storage
export default function Addminpage() {
  return (
    <div>
     { fetchBooking()}
    </div>
  )
}
