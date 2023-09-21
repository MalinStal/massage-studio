import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
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
import style from "./Boka.css";

import { getWeekday } from "../../utils/datefunction";

//ATT GÖRA I DENNA FIL
//här ska det finnas en lista på alla lediga tider samt en knapp för att boka/välja den tid du ser.
//kommer behöva skapa en lista med alla bokningsbara tider som finns på en dag..... samt vilka dagar
// behöver på något sätt gemföra alla tider med dagar på en vecka samt om alla
//
//

export default function Boka2() {
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);
  const time30 = useRecoilValue(freeTimes30WeekDay);
  const time60 = useRecoilValue(freeTimes60WeekDay);
  const time90 = useRecoilValue(freeTimes90WeekDay);
  const time30S = useRecoilValue(freeTimes30Saturday);
  const time60S = useRecoilValue(freeTimes60Saturday);
  const time90S = useRecoilValue(freeTimes90Saturday);

  const navigate = useNavigate();

  const handelClick = (time) => {
    setBookingInfo(time);

    navigate("/Boka3");
  };

  //-------------- time scadual ---------

  return (
    <div className="div-booking-schedule">
      <section>
        <h3 className="booking-date-headline">
          {getWeekday(bookingInfo.date) + " " + bookingInfo.date}{" "}
        </h3>
        <ul className="render-booking-ul">{GetTimeScadual()}</ul>
      </section>
    </div>
  );
}
