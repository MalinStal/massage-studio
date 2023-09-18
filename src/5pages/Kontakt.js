import React from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalIsOpen } from "../2recoilstate/atoms";
import style from "./Kontakt.css";
import Main from "../components/Main";
import Modal from "../components/modal";
import logo from "../components/pictures/massage-logo.png";

//ATT GÖRA I DENNA FIL
/* ` ev skriva ut detta i modalen 
Name: ${formData.name}, E-mail: ${formData.mail} Medelande: ${formData.text}.
`)*/

export default function Kontakt() {
  //------------state till modalen------------
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);

  // ------------state and event for the form -----------------
  const [formData, setFormData] = useState({ name: "", mail: "", text: "" });
 
  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const HandelSubmit = (event) => {
    event.preventDefault();
    
    console.log(formData);
    setFormData({ name: "", mail: "", text: "" });
    setIsOpen(true);
  };

  // ---------------------retrun ---------------------
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        loga={logo}
       
        btnMessage="Stäng"
      > <div>Hej  {formData.name}! Tack för ditt meddelande. <br></br>Vi svarar inom 24 timmar.</div> </Modal>

      <section className="form-section">
        <h3 className="headline">Kontakt Oss</h3>
        <form className="contact-form" onSubmit={HandelSubmit}>
          <label className="form-label">Namn</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handelChange}
          />

          <label className="form-label">Mail</label>
          <input
            className="form-input"
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handelChange}
          />
          <label className="form-label"> Ditt meddelande</label>

          <textarea
            id="text-area"
            className="form-input"
            cols="30"
            rows="50"
            value={formData.text}
            type="text"
            name="text"
            onChange={handelChange}
          ></textarea>
          <button className="send-btn boka-btn" type="submit">
            {" "}
            Skicka
          </button>
        </form>
      </section>
    </>
  );
}
