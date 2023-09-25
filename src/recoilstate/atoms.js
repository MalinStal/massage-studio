import React from "react";
import { atom } from "recoil";
import { dateFunction, getWeekday, getLocalTime } from "../utils/datefunction";

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
  },
});
// ------------handeling tretment choise------------
export const choiceOfTreatment = atom({
  key: "choiceOfTreatment",
  default: {
    treatment: "Djup Klassisk Massage",
    length: "60 minuter",
    date: dateFunction(),
    day: getWeekday(dateFunction()),
    time: getLocalTime()
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
// -------- fetch state --------
export const getCommentsState = atom ({
  key: "getComments",
  default: []
})
export const getUsersState = atom ({
  key: "getUsers",
  default: []
})
// ------------time states------------

export const freeTimes30WeekDay = atom({
  key: "freeTimes30WeekDay",
  default: [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ],
});

export const freeTimes60WeekDay = atom({
  key: "freeTimes60WeekDay",
  default: [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ],
});
export const freeTimes90WeekDay = atom({
  key: "freeTimes90WeekDay",
  default: [
    "8:00",
    "9:30",
    "10:00",
    "11:30",
    "13:00",
    "14:30",
    "16:00",
    "17:30",
  ],
});

export const freeTimes30Saturday = atom({
  key: "freeTimes30Saturday",
  default: [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ],
});

export const freeTimes60Saturday = atom({
  key: "freeTimes60Saturday",
  default: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
});
export const freeTimes90Saturday = atom({
  key: "freeTimes90Saturday",
  default: ["10:00", "11:30", "13:30", "14:30", "15:30"],
});
