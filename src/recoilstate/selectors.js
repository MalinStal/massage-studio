import React from "react";
import { selector } from "recoil";
import { checkNext, getWeekday } from "../utils/datefunction";
import { choiceOfTreatment } from "./atoms";

export const nextDayChecker = selector({
    key: "nextDayChecker",
    get: ({get}) => {
        const bookingInformation = get(choiceOfTreatment)
       
       const bookingDate = choiceOfTreatment.date
       checkNext(bookingDate, 1)
        return
    }
})