import React from "react";

export function saveBooking(id, booking) {
    const obj = booking
    const object = JSON.stringify(obj)
    localStorage.setItem(id, object);
}


   export function getAllInStorage() {
    let storage = []
    let index = 0

    while (localStorage.key(index) !== null) {
        const key = localStorage.key(index);
        storage[key] = JSON.parse(localStorage.getItem(key))
        index += 1
    } 

    return storage;
}

   