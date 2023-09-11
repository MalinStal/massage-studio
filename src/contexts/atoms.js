import React from "react";
import { atom } from "recoil";
import { dateFunction } from "../utils/datefunction";


export const kontaktInformation = atom({
    key: "kontaktInformation",
    default: "",

})
export const choiceOfTreatment = atom({
    key: "choiceOfTreatment",
    default: {treatment:"Djup Klassisk Massage", time:"60 minuter", date:dateFunction()}
});


export const bookingInformation = atom({
    key: "bookingInformation",
    default: []
});
