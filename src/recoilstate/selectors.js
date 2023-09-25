import React from "react";
import { selector } from "recoil";
import { checkNext, getWeekday, getLocalTime } from "../utils/datefunction";
import { choiceOfTreatment,  } from "./atoms";

export const nextDayChecker = selector({
    key: "nextDayChecker",
    get: ({get}) => {
        const bookingInformation = get(choiceOfTreatment)
       
       const bookingDate = bookingInformation.date
       checkNext(bookingDate, 1)
        return
    }
})