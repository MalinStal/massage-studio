import React from "react";




export function bookingSchedule(time) {
 
 const time60 = ["12", "13","14","15", "16", "17"]
 const time30 = ["12","12:30","13","13:30","14","14:30","15","15:30","16","16:30","17","17:30",]
 
  return 
}

 /* * bokningsbara tider ska vara mellan klockan 8-18 måndag till fredag, mellan klockan 10-17 fredag 
 och lördag, söndag stängt. 
 
 
 *tänker att alla tider ska innehålla en boolen som vissar sant eller falskt 
 beroend på om det är bokade. 
 * är tiden bokad ska den försvina från listan.
* när man söker ska en lista renderas ut på alla bokningsbara tider den dag som kund har sökt.  */
