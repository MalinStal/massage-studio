import React from "react";
import { useState } from "react";

import { useRecoilState } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import style from "./Boka.css";
//import { bokningsInformation } from '../contexts/atoms';
import {
  choiceOfTreatment} from '../../recoilstate/atoms'

import Boka2 from "./Boka2";
import { getWeekday } from "../../utils/datefunction";



export default function Boka() {
  //choiceOfTreatment default värde är ett objekt med treatment time & date.
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);

  const navigate = useNavigate();
  console.log("boka1", bookingInfo);
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

  const handelChange = (e) => {
    const { name, value } = e.target;

    setBookingInfo((option) => ({
      ...option,
      [name]: value,
      ["day"]: getWeekday(bookingInfo.date),
    }));

    console.log(bookingInfo);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/Boka2");
  };

  // ----- return ------
  return (
    <main>
      <form className="boknings-form" onSubmit={handelSubmit}>
        {getWeekday(bookingInfo.date)}
        <label className="form-label"> Välj datum: </label>
        <input
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
