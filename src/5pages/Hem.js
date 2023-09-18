import React, { useEffect } from "react";
import Main from "../components/Main";
import style from "./Hem-Behandling.css";
import Modal from "../components/modal";
import Form from "../components/Form";
import { modalIsOpen } from "../2recoilstate/atoms";
import { useRecoilState } from "recoil";
import logo from '../components/pictures/massage-logo.png'

//ATT GÖRA I DENNA FIL
//ska något basik innehåll frö utfullnad
//skapa en fetch på comentarer att använda som kund recentioner
//ev fixa ett bild spel
//skapa socialamedier bilder till sidan
export default function Hem() {

  //detta är till moddalen på 
  //const [isOpen, setIsOpen] = useRecoilState(modalIsOpen)
 // setIsOpen(true)

  //const closeModal = (() => {
 // })
  useEffect(() => {}, []);
  return (
    <div>
    
    {/*  
    får inte denna modal att fungera verkar bli någon sort infinit loop ....
    <Modal 
     open={isOpen} 
     loga={logo} 
     meddelade={"Hej där! Varmt välkommen till Anahata massage studio" } 
    meddelade2={"prenumerera gärna på vårt nyhetsbrev"}
     meddelade3={
     <Form 
        titel1={"Namn:"} 
        titel2={"E-mail:"} 
        btn={"Prenumerera"}
        btnClassName={"news-letter-btn"}
        className="news-letter-form"
        />} 
        btnmeddelande={"stäng"} 
      
        />*/}
    
      <section className="home-section">
        <article className="home-artical">
          <h3 className="h3-headline">Varför djup klassisk massage?</h3>
          <p>
            Spänningar i nacke och skuldror strålar i de flesta fall ut från
            triggerpunkter som gömmer sig djupt i muskulaturen. Därför räcker
            det inte med mjuk massage på ytan för att lösa upp ömma knutar som
            bildats under lång tid. Det är anledningen till att våra massörer
            tar i ordentligt och jobbar djupt nere i musklerna. Bara så kan man
            få igång cirkulationen som hjälper muskelfibrerna att slappna av och
            återhämta sig.
          </p>
          <p>
            Det finns flera olika former av massage där man på olika vis
            förebygger eller mjukar upp spända muskler. För att öka ditt
            välbefinnande anpassas därför varje behandling individuellt till den
            form av massage som passar just din kropp. Den djupgående massagen
            hjälper dina muskler att slappna av i hela kroppen. Genom att ge sig
            själv en professionell massage minskar man trötthet, värk i rygg och
            nacke samt axlar
          </p>
        </article>

        <article className="home-artical">
          {" "}
          <h3 className="h3-headline">Muskelknutar – Triggerpunkter</h3>
          Muskelknutar/triggerpunkter är ett vanligt problem för våra ryggar och
          är oerhört jobbigt att drabbas av. Dessa knutar har ofta byggts upp
          under lång tid utav repetitiva beteenden. Orsaken kan vara allt ifrån
          att sitta fel, fel gångsätt och mycket mycket mera. Här ska vi gå
          igenom hur du kan få bort dina ​​muskelknutor. Vad är
          muskelknutor/Triggerpunkt för något? En muskelknut är egentligen stela
          muskelband som har en hård knut i mitten. Dess smärtan dyker antingen
          upp spontant (aktiv) eller när man trycker på triggerpunkten (latent).
          Muskelknutor hårda, känsliga områden av muskler som stramar och drar
          ihop sig även när muskeln är i vila. Dessa spända muskelfibrer kan
          orsaka smärta i andra delar av kroppen vid beröring. Dom finns
          vanligtvis i ryggen, axlarna och nacken, men det finns en risk att de
          dyker upp i dina gluteus muskler också.
          <h4 className="h4-headline">Muskelknutor kan orsakas av:</h4>
          <ul className="home-ul">
            <li className="home-li">En stillasittande livsstil</li>
            <li className="home-li">Överanvändning eller skada dina muskler</li>
            <li className="home-li">Dålig hållning</li>
            <li className="home-li">Uttorkning, ohälsosamma matvanor</li>
            <li className="home-li">
              Stress och ångest kan också bidra till muskelknutor
            </li>
            <li className="home-li">Kronisk stress</li>
          </ul>
          Muskelknutar rygg Muskelknutor kan orsaka värkande känslor och smärta
          i dina muskler och leder. När du rör vid en muskelknut kan den kännas
          svullen, spänd eller ojämn. Det kan också kännas tätt och
          sammandraget, även när du försöker koppla av, och de är ofta känsliga
          för beröring. Det drabbade området kan till och med bli inflammerat
          eller svullet.
        </article>
      </section>
      <section></section>
    </div>
  );
}
