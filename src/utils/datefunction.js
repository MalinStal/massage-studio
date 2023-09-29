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
//get the time 
export function getLocalTime() {
  const newDate= new Date()
  const hours = newDate.getHours().toString().padStart(2,0);
  const minutes = newDate.getMinutes().toString().padStart(2,0);
  const timeIs= `${hours} ${minutes}`
  return timeIs
}

//code to change date to the next day
export function nextDay(date, one){

  const newDate = new Date(date);

  const day = (newDate.getDate()+ one).toString().padStart(2, 0);
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0);
  const year = newDate.getFullYear();
  const anotherday = `  ${year}-${month}-${day}`;

return anotherday;
}
