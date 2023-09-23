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



export function nextDay(date, one){
  getWeekday()
  const weekdays = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];
  const newDate = new Date(date);
 
  const day = (newDate.getDate()+ one).toString().padStart(2, 0);
  const weekday  =(newDate.getDay()+ 1)
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0);
  const year = newDate.getFullYear();
  const anotherday = `  ${year}-${month}-${day}`;

return anotherday;
}


// date lägger in datumet vi sökt på sätter en tid 1 dygn fram i tiden för att returera nästa dags datum
 // var dt = new Date(date);
//dt.setTime(dt.getTime() + (24 * 60 * 60 *  1000));