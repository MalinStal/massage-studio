import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue, useRecoilState } from "recoil";
import { choiceOfTreatment, bookingInformationPerson, bookingInformation } from "../2recoilstate/atoms";
import { saveBooking } from "../1storage/local-storage";

//ATT GÖRA I DENNA FIL
//skapa ett formulär för den valda tiden att boka med kontakt uppgifter
//gör den funktionel och spara kunden i lokalstorage elelr spara bara den bokade tiden i local storge. det viktga är att den bokade tiden försvinner från kaländenr.
export default function Boka3() {
  const [data, setData] = useRecoilState(bookingInformationPerson)

  const [boking, setBoking] = useState([]);

  const [bookInfo, setBookinfo] = useRecoilState(choiceOfTreatment)
 
  
  const handelChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };
 // ger ut ett id random för att kunna spara bokningen i lokal storage
  const id = Math.floor(Math.random() * 100);


 //för att kunna spara alla värden från bokningen så måste vi få in alla värdena från bokningen in i en objekt lista 
  const handelSubmit = (event) => {
    event.preventDefault();
    const namn = data.namn;
    const efternamn = data.efternamn;
    const mail = data.mail;
    const telefon= data.telefon;
    const adress = data.adress;
    const postnummer = data.postnummer;
    const stad = data.stad;

    setBookinfo((data) => ({ ...data, namn, efternamn, mail, telefon, adress, postnummer, stad}));
    
    saveBooking(id, bookInfo)
    setData({
      namn: "",
      efternamn: "",
      mail: "",
      telefon: "",
      adress: "",
      postnummer: "",
      stad: "",
    });
    
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
      <button onClick={()=>{navigate("/addminpage")}}>Addminpage</button>
      <form className="boknings-form" onSubmit={handelSubmit}>
        <section>
          <h3>
            
            Du har just nu valt att boka: <br></br>
            <span>
             {`${bookingInfo.time}
              ${bookingInfo.treatment}
             `} </span>
             <br></br>
             <span>{` den: 
            ${bookingInfo.date} klockan : 13:00`}</span>
            <br></br>
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
