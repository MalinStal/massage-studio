import React from "react";
//local storage kan bara spara ett id och ett värde som måste vara string/json format 
export function saveBooking(id, booking) {
    const obj = booking
    const object = JSON.stringify(obj)
    localStorage.setItem(id, object );
}
// skriver ut en lista med ett objkt beroende på vilket id du söker i localstorage  
export function fetchBooking(id) {
    const key = localStorage.getItem(id) 
    let value = JSON.parse(key) 
    let list = [value]
     return list

    }
   export function getAllInStorage() {
     let values = [],
      keys = Object.keys(localStorage),
       i = keys.length
    
         while ( i-- ) {
   let json = localStorage.getItem(keys[i]);
   let obj= JSON.parse(json)
   
   values.push(obj); 
          //denna kod fungerar inte, går inte att få in parse i denna kod innan du renderar ut listan inte heller går det att få ut i renderingen av functionen
 
        }
        
//this (i--) condition means  = that if (i = i - 1) is bigger than 0, continue looping, other wise quit
  
       
        return values;
   }
/*skriver ut allt ur local storage 
       let values = [],
      keys = Object.keys(localStorage),
       i = keys.length
    
         while ( i-- ) {
    values.push(localStorage.getItem(keys[i]) );
        }
        
//this (i--) condition means  = that if (i = i - 1) is bigger than 0, continue looping, other wise quit
  
       
        return values;
 skriver ut vald id
    const json = JSON.stringify(localStorage)
    const list = []
 const key = localStorage.getItem(id)
 let value = JSON.parse(key) 
  return value
 */