import React, { useEffect } from "react";
import { useState } from "react";

import { useRecoilState } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";

import style from "./Boka.css";
//import { bokningsInformation } from '../contexts/atoms';
import {
  choiceOfTreatment} from '../../recoilstate/atoms'

import Boka2 from "./Boka2";
import { getWeekday, getWeekday2, dateFunction  } from "../../utils/datefunction";



export default function Boka({style}) {

  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);

  const todayDate = dateFunction();
  const maxDate = "2023-12-31";
  
  const navigate = useNavigate();
 
  //------------------------- treatment option-------------------
  const treatments = [
    "Djup Klassisk Massage",
    "Triggerpunkt Massage",
    "Avslappnande Massage",
  ];
  const timeOption = ["30 minuter", "60 minuter", "90 minuter"];

  const chooseTreatment = treatments.map((option, key) => {
    return (
      <option value={option} key={key}>
        {option}
      </option>
    );
  });

  const chooseTime = timeOption.map((option, key) => {
    return (
      <option value={option} key={key}>
        {option}
      </option>
    );
  });

  //-------handel change and submit ------------

  console.log(bookingInfo)

  const handelChange = (e) => {
    const { name, value } = e.target;


    setBookingInfo((option) => ({
      ...option,
      [name]: value,
      ["day"]: (getWeekday(value)),
    }));

   
    
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/Boka2");
  };

  // ----- return ------
  return (
    <main  className={style} >
      <form  className={"boknings-form"} onSubmit={handelSubmit}>
        {getWeekday(bookingInfo.date)}
       
        
        <label className="form-label"> Välj datum: </label>
        <input
          
          min={todayDate}
          max={maxDate}
          className="form-date form-label"
          type="date"
          name="date"
          value={bookingInfo.date}
          onChange={handelChange}
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
  );
}
