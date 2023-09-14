import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue,useRecoilState } from "recoil";
import { choiceOfTreatment, freeTimes30, freeTimes60, freeTimes90  } from "../2recoilstate/atoms";


import { style } from "./booking-schedule-style.css";
import malin from "./malin.jpg";

import { getWeekday } from "../3utils/datefunction";

//ATT GÖRA I DENNA FIL
//här ska det finnas en lista på alla lediga tider samt en knapp för att boka/välja den tid du ser.
//kommer behöva skapa en lista med alla bokningsbara tider som finns på en dag..... samt vilka dagar
// behöver på något sätt gemföra alla tider med dagar på en vecka samt om alla
//
//

export default function Boka2() {
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);
  const [time30, setTime30] = useRecoilState(freeTimes30)
  const [time60, setTime60] = useRecoilState(freeTimes60)
  const [time90, setTime90] = useRecoilState(freeTimes90)

  const navigate = useNavigate();
  const handelClick = (id) => {
  
    navigate("/Boka3");
  };
  const handelClick90 = (id) => {
    
      console.log(bookingInfo);
      //navigate("/Boka3");
    };
  const style = {
    width: "20px",
    hight: "25px",
    borderRadius: "50px",
  };

  //-------------- time scedual ---------
  function gettimeSced() {
   

    if (bookingInfo.time === "30 minuter") {
      const timeList30 = time30.map((time) => {
        return (
          <li className="render-booking-li">
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.time}</span>
            <span>
              Malin S <img src={malin} style={style} />
            </span>
            <button className="render-booking-btn" onClick={handelClick}>
              {" "}
              Boka
            </button>
          </li>
        );
      });

      return timeList30;
    } else if (bookingInfo.time === "60 minuter") {
      const timeList60 = time60.map((time) => {
        return (
          <li className="render-booking-li">
            <span>{time} </span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.time}</span>
            <span>
              Malin S <img src={malin} style={style} />
            </span>
            <button className="render-booking-btn" onClick={handelClick}>
              {" "}
              Boka
            </button>
          </li>
        );
      });

      return timeList60;
    }
    else if (bookingInfo.time === "90 minuter") {
      const timeList90 = time90.map((time) => {
        return (
          <li className="render-booking-li" key={time.id}>
            <span>{time.time} </span>
            <span>{time.id}</span>
            <span>{bookingInfo.treatment}</span>
            <span>{bookingInfo.time}</span>
            <span>
              Malin S <img src={malin} style={style} />
            </span>
            <button className="render-booking-btn" onClick={handelClick90}>
              {" "}
              Boka
            </button>
          </li>
        );
      });

      return timeList90;
    }
  }

  return (
    <div className="div-booking-schedule">
      <section>
        <h3 className="booking-date-headline">
          Bokningsbara tider:{" "}
          {bookingInfo.date + " " + getWeekday(bookingInfo.date)}{" "}
        </h3>
        <ul className="render-booking-ul">{gettimeSced()}</ul>
      </section>
    </div>
  );
}
