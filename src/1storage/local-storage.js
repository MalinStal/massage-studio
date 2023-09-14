import React from "react";
//local storage kan bara spara ett id och ett värde som måste vara string/json format 
export function saveBooking(id, booking) {
    localStorage.setItem(id, JSON.stringify(booking));
}

export function fetchBooking() {
    
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
    values.push( localStorage.getItem(keys[i]) );
        }

        return values;
    }
   
