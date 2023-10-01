import React from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  choiceOfTreatment,
  bookingInformationPerson,
  modalIsOpen,
  createIdState,
} from "../../recoilstate/atoms";
import { saveBooking } from "../../storage/local-storage";
import Modal from "../../components/modal";
import logo from "../../pictures/massage-logo.png";
import { changeDateOutput } from "../../utils/constants";

export default function Boka3() {
  const [data, setData] = useRecoilState(bookingInformationPerson);
  const [bookingInfo, setBookingInfo] = useRecoilState(choiceOfTreatment);
  const [id,setId] = useRecoilState(createIdState)
 
 
  const handelChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));

     const namn = data.namn;
    const efternamn = data.efternamn;
    const mail = data.mail;
    const telefon = data.telefon;
    const adress = data.adress;
    const postnummer = data.postnummer;
    const stad = data.stad;
       setBookingInfo((data) => ({
      ...data,
      namn,
      efternamn,
      mail,
      telefon,
      adress,
      postnummer,
      stad,
    }));

  
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setId((prevId) => prevId + 1);
    saveBooking(id, bookingInfo);
    setIsOpen(true);
    console.log(id)
  };
console.log(id)
  // ------------------------ modal ----------------------------------
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
  //----------------------- return ---------------------------------
  return (
    <main>
      <Modal open={isOpen} onClose={closeModal} loga={logo} btnMessage="Stäng">
        <div className="modal-text">
          Tack {bookingInfo.namn} för din bokning! <br></br>
          {`${bookingInfo.length} ${bookingInfo.treatment}  
          ${changeDateOutput(bookingInfo.date)} klockan:  ${bookingInfo.time}`}
          <br></br>
          Bekräftelse skickas till din mail {bookingInfo.mail}
        </div>
      </Modal>

      <form className="boknings-form" onSubmit={handelSubmit}>
        <section className="booking-info-section">
          <h3 className="booking-info-h3">Din valda bokning: </h3>
          <span className="booking-info-span">
            {`${bookingInfo.length} ${bookingInfo.treatment}`}{" "}
          </span>
          <span className="booking-info-span">{` ${bookingInfo.day}
            ${changeDateOutput(bookingInfo.date)} klockan : ${bookingInfo.time}`}
          </span>

          <span className="booking-info-span">hos: Malin S</span>
        </section>
        <label className="form-label">Namn</label>
        <input
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
        <button className="boka-btn serch-btn">Boka</button>
      </form>
    </main>
  );
}
