import React from "react";
// get the current date 
export function dateFunction() {
  const newDate = new Date(); 
  const day = newDate.getDate().toString().padStart(2, 0);
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0);
  const year = newDate.getFullYear();
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
}

// get the weekday
export function getWeekday(dateFormat) {
  let newDate = new Date(dateFormat);

  const weekday = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];
  let day = weekday[newDate.getDay()];

  return day;
}
