import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import {
  choiceOfTreatment,
  bookingInformationPerson,
  modalIsOpen,
  createIdState
} from "../../recoilstate/atoms";
import { saveBooking } from "../../storage/local-storage";
import Modal from "../../components/modal";
import logo from "../../pictures/massage-logo.png";
//import { Formtest } from "../../components/formtest";
//ATT GÖRA I DENNA FIL
//skapa ett formulär för den valda tiden att boka med kontakt uppgifter
//gör den funktionel och spara kunden i lokalstorage elelr spara bara den bokade tiden i local storge. det viktga är att den bokade tiden försvinner från kaländenr.
export default function Boka3() {
  const [data, setData] = useRecoilState(bookingInformationPerson);

  const [boking, setBoking] = useState([]);
  const [id,setId] = useRecoilState(createIdState)
  const [bookInfo, setBookinfo] = useRecoilState(choiceOfTreatment);

  const handelChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };
  // ger ut ett id random för att kunna spara bokningen i lokal storage
  //const id = "booking" + Math.floor(Math.random() * 100);

  //för att kunna spara alla värden från bokningen så måste vi få in alla värdena från bokningen in i en objekt lista
  const handelSubmit = (e) => {
    e.preventDefault();
    const namn = data.namn;
    const efternamn = data.efternamn;
    const mail = data.mail;
    const telefon = data.telefon;
    const adress = data.adress;
    const postnummer = data.postnummer;
    const stad = data.stad;

      setId(id + 1);
    setBookinfo((data) => ({
      ...data,
      namn,
      efternamn,
      mail,
      telefon,
      adress,
      postnummer,
      stad,
    }));

    saveBooking(id, bookInfo);

    setIsOpen(true);
  };
  //--------------- conected to the data from bookingInformation ----------
  const bookingInfo = useRecoilValue(choiceOfTreatment);

  // --------------modal ----------------------------------
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);
  const navigate = useNavigate();
  const closeModal = () => {
    setData({
      namn: "",
      efternamn: "",
      mail: "",
      telefon: "",
      adress: "",
      postnummer: "",
      stad: "",
    });
    setIsOpen(false);
    navigate("/");
  };
  //-------return ---------------------------------
  return (
    <main>
      <Modal open={isOpen} onClose={closeModal} loga={logo} btnMessage="Stäng">
        <div className="modal-text">
          Tack {bookingInfo.namn} för din bokning! <br></br>
          {`${bookingInfo.length} ${bookingInfo.treatment}  
      ${bookingInfo.date} klockan:  ${bookingInfo.time}`}
          <br></br>
          Bekräftelse skickas till din mail {bookingInfo.mail}
        </div>
      </Modal>

      <form className="boknings-form" onSubmit={handelSubmit}>
        <section className="booking-info-section">
          <h3 className="booking-info-h3">Din valda bokning: </h3>
          <span className="booking-info-span">
            {`${bookingInfo.length}
              ${bookingInfo.treatment}
             `}{" "}
          </span>

          <span className="booking-info-span">{` 
            ${bookingInfo.date} klockan : ${bookingInfo.time}`}</span>

          <span className="booking-info-span">hos: Malin S</span>
        </section>
        <label className="form-label">Namn</label>
        <input
          autoFocus
          required
          type="text"
          className="form-input"
          name="namn"
          value={data.namn}
          onChange={handelChange}
        />
        <label className="form-label">Efternamn</label>
        <input
          type="text"
          required
          className="form-input"
          name="efternamn"
          value={data.efternamn}
          onChange={handelChange}
        />
        <label className="form-label">E-mail</label>
        <input
          type="email"
          required
          className="form-input"
          name="mail"
          value={data.mail}
          onChange={handelChange}
        />
        <label className="form-label">Telefon nummer:</label>
        <input
          type="number"
          required
          minlength="10"
          className="form-input"
          name="telefon"
          value={data.telefon}
          onChange={handelChange}
        />
        <label className="form-label">Adress</label>
        <input
          type="text"
          required
          className="form-input"
          name="adress"
          value={data.adress}
          onChange={handelChange}
        />
        <label className="form-label">Postnummer</label>
        <input
          type="number"
          required
          minlength="5"
          className="form-input"
          name="postnummer"
          value={data.postnummer}
          onChange={handelChange}
        />
        <label className="form-label">Stad</label>
        <input
          required
          className="form-input"
          name="stad"
          value={data.stad}
          onChange={handelChange}
        />
        <select className="form-label">
          <option> Välj betalmetod</option>
          <option>Kontokort</option>
          <option>Swish</option>
          <option>Epassi</option>
          <option>Rabattkort</option>
        </select>
        <button className="boka-btn serch-btn">boka</button>
      </form>
    </main>
  );
}
