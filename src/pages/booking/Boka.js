import React from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import style from "./Boka.css";
import {choiceOfTreatment} from '../../recoilstate/atoms'
import { getWeekday, dateFunction  } from "../../utils/datefunction";
import { chooseTime, chooseTreatment } from "../../utils/constants";


export default function Boka({style}) {

  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);

  const todayDate = dateFunction();
  const maxDate = "2023-12-31";
  
  const navigate = useNavigate();
 
  //-------handel change and submit ------------
  const handelChangeDay = (e) => {
    const { name, value } = e.target;

    setBookingInfo((option) => ({
      ...option,
      [name]: value,
      ["day"]: (getWeekday(value)),
    }));
  };
  const handelChange = (e) => {
    const { name, value } = e.target;

    setBookingInfo((option) => ({
      ...option,
      [name]: value
     
    }));
  };
  
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/Boka2");
  };
 
  return (
    <>
    <main  className={style} >
      <form className={"boknings-form"} onSubmit={handelSubmit}>
        {getWeekday(bookingInfo.date)}
        <label className="form-label"> Välj datum: </label>
        <input  
          min={todayDate}
          max={maxDate}
          className="form-date form-label"
          type="date"
          name="date"
          value={bookingInfo.date}
          onChange={handelChangeDay}
        />

        <label className="form-label"> Välj behandling:</label>
        <select
          className="form-label"
          name="treatment"
          value={bookingInfo.treatment}
          onChange={handelChange}
        >
          {chooseTreatment}
        </select>
        <label className="form-label"> Välj behandlings längd:</label>
        <select
          className="form-label"
          name="length"
          value={bookingInfo.length}
          onChange={handelChange}
        >
          {chooseTime}
        </select>
        <button type="submit" className="boka-btn serch-btn">
          Sök
        </button>
      </form>
    </main>
    </>
  );
}
