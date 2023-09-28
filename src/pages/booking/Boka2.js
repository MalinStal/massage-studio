import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import style from "./Boka.css";

import { choiceOfTreatment } from '../../recoilstate/atoms'
import { GetTimeScadual  } from "../../components/booking-schedule";
import { getWeekday, nextDay } from "../../utils/datefunction";
import Boka from "./Boka";



export default function Boka2() {
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);
  const [count, setCount] = useState(1)

 const nextDay = (() => {
  setBookingInfo((option) => ({
    ...option,
    ["date"]: nextDay(bookingInfo.date, count),
  
  })); 
  })

  return (  
  <>
    <Boka style={"booking-search-page2"}/>
  { <div className="div-booking-schedule">
      <section>
        <h3 className="booking-date-headline">
          {bookingInfo.day + " " + bookingInfo.date}{" "}
        </h3>
        <ul className="render-booking-ul">{GetTimeScadual()}</ul>
      </section>
    </div>
  }
  </>
  );
}
