
// const för att skapa rulllista för boknings alternativ
export const treatments = [
    "Djup Klassisk Massage",
    "Triggerpunkt Massage",
    "Avslappnande Massage",
  ];
 export const timeOption = ["30 minuter", "60 minuter", "90 minuter"];

  export const chooseTreatment = treatments.map((option, key) => {
    return (
      <option value={option} key={key}>
        {option}
      </option>
    );
  });

  export const chooseTime = timeOption.map((option, key) => {
    return (
      <option value={option} key={key}>
        {option}
      </option>
    );
  });


  //const för att ändra utskriften av date i boka 2 och 3 
  export const changeDateOutput = (date) => {
    const numberString = date.split("");
    let day1= numberString[8];
    let day2 = numberString[9];
    let month1 = numberString[6]
    let month2 = numberString[5];

  if(day1 === "0") {
   if(month2 === "0") { 
     return day2 + "/" + month1;
  }else{
   return day2 + "/" +  month2  + month1
  }} 
  else {
     if(month1 !== "0") { 
       return day1 + day2 + "/" + month1;
    }else if(month1 === "0"){
     return day1 + day2 + "/" + month2  + month1 
  }}
}