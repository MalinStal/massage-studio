import React from "react";
import { useState } from "react";

import { useRecoilState } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import style from "./Boka.css";
//import { bokningsInformation } from '../contexts/atoms';
import { choiceOfTreatment, bookingInformationPerson } from "../2recoilstate/atoms";

import { Main } from "../components/Main";
import Boka2 from "./Boka2";
import { getWeekday } from "../3utils/datefunction";

export default function Boka() {
  //choiceOfTreatment default värde är ett objekt med treatment time & date.
  const [treatment, setTreatment] = useRecoilState(choiceOfTreatment);

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

  const handelChange = (e) => {
    const { name, value } = e.target;

    setTreatment((option) => ({ ...option, [name]: value }));
    console.log(treatment);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/Boka2");
  
  };
  
  

  // ----- return ------
  return (
    <main>
      <form className="boknings-form" onSubmit={handelSubmit}>
        {getWeekday(treatment.date)}
        <label className="form-label"> Välj datum: </label>
        <input
          className="form-date form-label"
          type="date"
          name="date"
          value={treatment.date}
          onChange={handelChange}
        />

        <label className="form-label"> Välj behandling:</label>
        <select
          className="form-label"
          name="treatment"
          value={treatment.treatment}
          onChange={handelChange}
        >
          {chooseTreatment}
        </select>
        <label className="form-label"> Välj behandlings längd:</label>
        <select
          className="form-label"
          name="time"
          value={treatment.time}
          onChange={handelChange}
        >
          {chooseTime}
        </select>
        <button
          type="submit"
          className="boka-btn serch-btn"
         
        >
          Sök
        </button>
      </form>
    </main>
  );
}
