import React from "react";

export default function Button({ onclick, btnClassName, title }) {
  return (
    <button onClick={onclick} className={btnClassName}>
      {title}
    </button>
  );
}
