import React from "react";
//local storage kan bara spara ett id och ett värde som måste vara string/json format 
export function saveBooking(id, booking) {
    const object = JSON.stringify(booking)
    localStorage.setItem(id, object );
}
// en function som skriver ut all data som finns i localstorage och lägger det i en array eftersom att vi inte kan hantera objekt på ett bra sätt  
export function fetchBooking(id) {
   
 let values = [],
      keys = Object.keys(localStorage),
       i = keys.length
    
         while ( i-- ) {
    values.push(localStorage.getItem(keys[i]) );
        }
        
//this (i--) condition means  = that if (i = i - 1) is bigger than 0, continue looping, other wise quit
  
       
        return values;
    }
   
/*skriver ut allt ur local storage 
   
 
    const json = JSON.stringify(localStorage)
    const list = []
 const key = localStorage.getItem("booking"+id)
 let value = JSON.parse(key) 
  return 
 */