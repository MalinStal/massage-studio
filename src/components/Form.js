import React from "react";

export default function Form({
  titel1,
  inputType,
  titel2,
  inputType2,
  btn,
  btnClassName,
}) {
  return (
    <form>
      <label > {titel1}</label>
      <input type={inputType} /> <br></br>
      <label> {titel2}</label>
      <input type={inputType2} />
      <br></br>
      <button className={btnClassName}>{btn}</button>
    </form>
  );
}
