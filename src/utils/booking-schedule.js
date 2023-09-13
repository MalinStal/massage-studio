import React from "react";




export default function BookingSchedule() {
 
  
  /* * bokningsbara tider ska vara mellan klockan 8-18 måndag till fredag, mellan klockan 10-17 fredag 
 och lördag, söndag stängt. 
 
 *tänker att alla tider ska innehålla en boolen som vissar sant eller falskt 
 beroend på om det är bokade. 
 * är tiden bokad ska den försvina från listan.
* när man söker ska en lista renderas ut på alla bokningsbara tider den dag som kund har sökt.  */
return 
}
//section 2 ska rendera ut bokningsbara tider för dagen efter samt att man ska kunna kolla 3 dagar från de valda datumet 
/* 
function isValidDate(inputDate) {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(inputDate)) return false;
  var parts = inputDate.split('/'); //12 01 1994
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  return day > 0 && day <= monthLength[month - 1];
}
class Inputdate extends React.Component {
  state = {
    inputDate: '',
    day: '',
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          name="date"
          type="text"
          value={this.state.value}
          placeholder="dd-mm-yyyy"
          onChange={(e) => {
            if (isValidDate(e.target.value)) {
              this.setState({ inputDate: e.target.value });
            } else {
              this.setState({ inputDate: 'invalid date' });
            }
          }}
        />

        <p>{this.state.inputDate}</p>
      </div>
    );
  }
}*/