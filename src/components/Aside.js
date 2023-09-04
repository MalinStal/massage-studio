import React from "react";
import style from "./Aside.css";
import Form from "./Form";
import logo from './pictures/massage-logo.png'

export default function Aside() {
  return (
    <aside className="aside">
        <img src={logo} className="logo-aside" />
      <section className="section , search-section">

        <label>SÖK</label>
        <input />
      </section>
      <section className="section , open-hours">
        <h3>Öppetider:</h3>

        <ul >
          <li >Måndag: 10-19</li>
          <li>Tisdag: 8-18</li>
          <li>Onsdag: 8-18</li>
          <li>Torsdag: 10-19</li>
          <li>Fredag: 8-17</li>
          <li>Lördag: 10-17</li>
          <li>Söndag: stängt</li>
        </ul>
      </section>
      <section className="section , news-letter">
        <Form 
        titel1={"Namn:"} 
        titel2={"E-mail:"} 
        btntitel={"Prenumerera"}
        btnClassName={"news-letter-btn"}
        className="news-letter-form"/>
      </section>
    </aside>
  );
}
