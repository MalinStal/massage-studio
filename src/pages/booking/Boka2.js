import React from "react";
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

import { GetTimeScadual } from "../../components/booking-schedule";
import { getWeekday } from "../../utils/datefunction";
import Boka from "./Boka";


export default function Boka2() {
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);
  const time30 = useRecoilValue(freeTimes30WeekDay);
  const time60 = useRecoilValue(freeTimes60WeekDay);
  const time90 = useRecoilValue(freeTimes90WeekDay);
  const time30S = useRecoilValue(freeTimes30Saturday);
  const time60S = useRecoilValue(freeTimes60Saturday);
  const time90S = useRecoilValue(freeTimes90Saturday);

  //-------------- time scadual ---------


  return (
    <div className="div-booking-schedule">
     <Boka style={"booking-serch-2"}/>
      <section>
        <h3 className="booking-date-headline">
          {getWeekday(bookingInfo.date) + " " + bookingInfo.date}{" "}
        </h3>
        <ul className="render-booking-ul">{GetTimeScadual()}</ul>
      </section>
     
    </div>
  );
}
