import React, { Children } from "react";
import useState from "react";
import style from "./modal-comments.css";

export default function Modal({ open, onClose, children, btnMessage, loga }) {
 
  return (
    <section> <div className="overlay" ></div>
     {!open ? null :
      <div className="modal-open">
        <img src={loga} className="logo" alt="loga"/>
        {children}
        <button onClick={onClose} className="close-modal-btn boka-btn">
          {btnMessage}
        </button>
      </div>}
    </section>
  );
}
