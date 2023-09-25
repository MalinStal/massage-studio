import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import style from "./Boka.css";

import {
  choiceOfTreatment,
  freeTimes30WeekDay,
  freeTimes60WeekDay,
  freeTimes90WeekDay,
  freeTimes30Saturday,
  freeTimes60Saturday,
  freeTimes90Saturday,
} from '../../recoilstate/atoms'

import { GetTimeScadual  } from "../../components/booking-schedule";
import { getWeekday, nextDay } from "../../utils/datefunction";
import Boka from "./Boka";



export default function Boka2() {
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);
  const [count, setCount] = useState(1)
  const time30 = useRecoilValue(freeTimes30WeekDay);
  const time60 = useRecoilValue(freeTimes60WeekDay);
  const time90 = useRecoilValue(freeTimes90WeekDay);
  const time30S = useRecoilValue(freeTimes30Saturday);
  const time60S = useRecoilValue(freeTimes60Saturday);
  const time90S = useRecoilValue(freeTimes90Saturday);

  const chDate= bookingInfo.date

  function changeDay() {
     
  setCount(count + 1);
  
    setBookingInfo((info) => ({
      ...info,
      ["date"]: nextDay(chDate,count)
      
    })); 
    
    setBookingInfo((info) => ({
      ...info,
       ["day"]: getWeekday(bookingInfo.date)
    }));
    
    console.log(bookingInfo)
   
  }
 const nextDayClick = (() => {
  setCount( count+ 1);
  console.log(count)
  console.log(bookingInfo)
   return changeDay()
  })
  //-------------- time scadual ---------

  return (
    <div className="div-booking-schedule">
     {/*<Boka style={"booking-serch-2"}/>*/}
      <section>
        <h3 className="booking-date-headline">
          {bookingInfo.day + " " + bookingInfo.date}{" "}
        </h3>
        <button onClick={nextDayClick}>next day</button> 
        <ul className="render-booking-ul">{GetTimeScadual()}</ul>
      </section>

      </div>
  );
}
