import React, { Children } from "react";
import useState from "react";
import style from "./modal.css";

export default function Modal({ open, onClose, children, btnMessage, loga }) {
  if (!open) return null;
  
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-open">
        <img src={loga} className="logo" alt="loga"/>
        {children}

        <button onClick={onClose} className="close-modal-btn boka-btn">
          {btnMessage}
        </button>
      </div>
    </>
  );
}
