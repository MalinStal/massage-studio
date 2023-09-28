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