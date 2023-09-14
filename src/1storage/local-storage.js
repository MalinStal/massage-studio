import React from "react";

export function saveBooking(booking) {
    localStorage.setItem("booking", JSON.stringify(booking));
}

export function loadUsers() {
    let json = localStorage.getItem("booking");
    if (json === null) {
        return [];
    } else {
        return JSON.parse(json);
    }
}
