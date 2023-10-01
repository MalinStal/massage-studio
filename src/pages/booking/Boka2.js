import React, { useState } from "react";
import {  useRecoilValue } from "recoil";
import style from "./Boka.css";
import { choiceOfTreatment } from '../../recoilstate/atoms'
import { GetTimeScadual  } from "../../components/booking-schedule";
import Boka from "./Boka";
import { changeDateOutput } from "../../utils/constants";


export default function Boka2() {
  const bookingInfo = useRecoilValue(choiceOfTreatment);

  return (  
  <>
    <Boka style={"booking-search-page2"}/>
  { <div className="div-booking-schedule">
      <section>
        <h3 className="booking-date-headline">
          {bookingInfo.day + " " + changeDateOutput(bookingInfo.date)}{" "}
        </h3>
        <ul className="render-booking-ul">{GetTimeScadual()}</ul>
      </section>
    </div>
  }
  </>
  );
}
