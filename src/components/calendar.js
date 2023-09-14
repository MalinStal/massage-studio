import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Calendar() {
  
    const [value, setValue] = useState(new Date());
    const [newDate,setNewDate] = useState("")
    const[datepicker,setDatepicker] = useState(new Date());

    const handelDateChange = (date) => {
        setDatepicker(date)
        console.log(date)
      } 
     return (
    <div>
       <Calendar selected={datepicker}
     onChange={handelDateChange} 
      minDate={value}
      maxDate={new Date("2023-12-31")} 
     />
    </div>
  )
}
