import React from "react";
import { atom } from "recoil";
import { dateFunction } from "../3utils/datefunction";

// ------------time kontakt infomrmation------------
export const kontaktInformation = atom({
  key: "kontaktInformation",
  default: "",
});

export const bookingInformationPerson = atom({
  key: "bookingInformationPerson",
  default: {
  namn: "",
  efternamn: "",
  mail: "",
  telefon: "",
  adress: "",
  postnummer: "",
  stad: "",

}
})
// ------------handeling tretment choise------------
export const choiceOfTreatment = atom({
  key: "choiceOfTreatment",
  default: {
    treatment: "Djup Klassisk Massage",
    time: "60 minuter",
    date: dateFunction(),
  },
});


export const bookingInformation = atom({
  key: "bookingInformation",
  default: [],
});

// ------------modal states------------

export const modalIsOpen = atom({
  key: "modalIsOpen",
  default: false,
});

// ------------time states------------


export const freeTimes30 = atom({
  key: "freeTimes30",
  default: [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]
,});

export const freeTimes60 = atom({
  key: "freeTime60",
  default:["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
})
export const freeTimes90 = atom({
  key: "freeTimes90",
  default: [{id:"1",time: "12:00"}, 
  {id:"2",time: "13:30"}, 
  {id:"3",time: "15:00"}, 
  {id:"4",time: "16:30"}]
})
