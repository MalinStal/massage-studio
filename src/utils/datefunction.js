import React from "react";

export function dateFunction() {
  const newDate = new Date();
  const day = newDate.getDate().toString().padStart(2, 0);
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0);
  const year = newDate.getFullYear();
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
}


export function getWeekday(dateFormat) {
  let d = new Date(dateFormat);

  const weekday = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];

  let day = weekday[d.getDay()];

  return day;
}
