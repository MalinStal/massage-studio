import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { choiceOfTreatment } from "../2recoilstate/atoms";
import { saveBooking } from "../1storage/local-storage";

//ATT GÖRA I DENNA FIL
//skapa ett formulär för den valda tiden att boka med kontakt uppgifter
//gör den funktionel och spara kunden i lokalstorage elelr spara bara den bokade tiden i local storge. det viktga är att den bokade tiden försvinner från kaländenr.
export default function Boka3() {
  const [data, setData] = useState({
    namn: "",
    efternamn: "",
    mail: "",
    telefon: "",
    adress: "",
    postnummer: "",
    stad: "",
  });
  const [boking, setBoking] = useState([]);

  const bookInfo = useRecoilValue(choiceOfTreatment)
  console.log(bookInfo)
  const handelChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const HandelSubmit = (event) => {
    event.preventDefault();
    saveBooking(bookInfo)

    setData({
      namn: "",
      efternamn: "",
      mail: "",
      telefon: "",
      adress: "",
      postnummer: "",
      stad: "",
    });
    console.log(boking);
  };
  //--------------- conected to the data from bookingInformation ----------
  const bookingInfo = useRecoilValue(choiceOfTreatment);

  const navigate = useNavigate();
  const handelClick = (e) => {
    navigate("/");
  };

  //-------return ---------------------------------
  return (
    <main>
      <form className="boknings-form">
        <section>
          <h3>
            {" "}
            Du har just nu valt att boka :
            <span>
              {bookingInfo.time}{" "}
              {bookingInfo.treatment}
            </span>
            <span>{bookingInfo.date}</span>
            <span>hos: Malin S</span>
          </h3>
          <p></p>
        </section>
        <label className="form-label">Namn</label>
        <input
          className="form-input"
          name="namn"
          value={data.namn}
          onChange={handelChange}
        />
        <label className="form-label">Efternamn</label>
        <input
          className="form-input"
          name="efternamn"
          value={data.efternamn}
          onChange={handelChange}
        />
        <label className="form-label">E-mail</label>
        <input
          className="form-input"
          name="mail"
          value={data.mail}
          onChange={handelChange}
        />
        <label className="form-label">Adress</label>
        <input
          className="form-input"
          name="adress"
          value={data.adress}
          onChange={handelChange}
        />
        <label className="form-label">Postnummer</label>
        <input
          className="form-input"
          name="postnummer"
          value={data.postnummer}
          onChange={handelChange}
        />
        <label className="form-label">Stad</label>
        <input
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
