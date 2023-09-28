import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

import style from "./Kontakt.css";

import { modalIsOpen } from "../recoilstate/atoms";
import Modal from "../components/modal";
import logo from "../pictures/massage-logo.png";


export default function Kontakt() {
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);

  const [formData, setFormData] = useState({ name: "", mail: "", text: "" });

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const HandelSubmit = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => {
          setFormData({ name: "", mail: "", text: "" });
          setIsOpen(false);
        }}
        loga={logo}
        btnMessage="Stäng"
      >
        {" "}
        <div>
          Hej {formData.name}! Tack för ditt meddelande. <br></br>Vi svarar inom
          24 timmar.
        </div>{" "}
      </Modal>

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
