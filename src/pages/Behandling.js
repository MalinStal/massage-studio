import React from "react";
import style from "./Hem-Behandling.css";

export default function Behandling() {
  return (
    <main className="behandling-priser">
      <h3 className="">Behandling och Priser</h3>
      <section className="home-section">
        <table className="table-pricelist">
          <tr>
            <th>Behandling</th>
            <th>tid</th>
            <th>pris</th>
          </tr>
          <tr>
            <td> Djup Klassisk Massage</td>
            <td>30 min</td>
            <td>590 kr</td>
          </tr>
          <tr>
            <td> Djup Klassisk Massage</td>
            <td>60 min</td>
            <td>960 kr</td>
          </tr>
          <tr>
            <td>Djup Klassisk Massage </td>
            <td>90 min</td>
            <td>1350 kr</td>
          </tr>
          <tr>
            <td> Triggerpunkt Massage</td>
            <td>30 min</td>
            <td>590 kr</td>
          </tr>
          <tr>
            <td> Triggerpunkt Massage</td>
            <td>60 min</td>
            <td>960 kr</td>
          </tr>
          <tr>
            <td>Triggerpunkt Massage </td>
            <td>90 min</td>
            <td>1350 kr</td>
          </tr>
          <tr>
            <td> Avslappnande Massage </td>
            <td>30 min</td>
            <td>590 kr</td>
          </tr>
          <tr>
            <td>Avslappnande Massage </td>
            <td>60 min</td>
            <td>960 kr</td>
          </tr>
          <tr>
            <td>Avslappnande Massage </td>
            <td>90 min</td>
            <td>1350 kr</td>
          </tr>
        </table>
      </section>

      <section className="home-section">
        <article className="home-artical">
          <h3>Djup Klassisk Massage</h3>
          <p>
          
            Den svenska klassiska massagen mjukar upp dina spända muskler och
            tänjer din bindväv. Den ökar blodcirkulationen och även
            välbefinnandet. Den klassiska massagen är djupgående och läkande.
            Musklerna bearbetas genom strykningar och knådningar. Detta minskar
            spänningar och värk i muskler och leder samt även svullnader
            orsakade av dålig lymfcirkulation. Massagen verkar också
            avslappnande och lugnande för sinnet genom att beröringen frigör
            lugn och ro-hormoner. Massagen används både i friskvårdande syfte
            och för rehabiliterande behandling av specifika skador och besvär i
            muskler och leder. Massage har en avslappnande effekt på kroppen,
            stärker immunförsvaret och motverkar stress, vilket också ökar din
            prestationsförmåga. Du får en djupare och lugnare andning vilket
            motverkar spänningar vid smärttillstånd Naturligtvis väljer du själv
            hur kraftfull du önskar din behandling.
          </p>
        </article>
        <article className="home-artical">
          <h3>Triggerpunkt Massage</h3>
          <p>
            En djupgående sportmassage hjälper till att mjuka upp och slappna av
            muskelknutor. Denna terapi fungerar genom att utöva tryck på dina
            triggerpunkter. En skicklig utövare kommer att sätta press på
            muskelknuten tills den mjuknar och släpper. I allvarligare fall av
            muskelknutar kan sjukgymnastik rekommenderas.
          </p>
        </article>
        <article className="home-artical">
          <h3>Avslappnande Massage</h3>
          <p>
            En mjuk, avslappnande och lyxig massage på en uppvärmd massagebänk.
            Denna behandling är utformad för sig som behöver avslappning i både
            sinne och kropp och hjälper dig till djup avslappning och
            välbefinnande. Jag utgår från den svenska klassiska massagen och
            anpassar sedan behandlingen efter dina behov. Till skillnad från den
            klassiska massagen som har sin huvudfokus i muskulära besvär så är
            avslappningsmassagen en mjukare inriktning med fokus på nedvarvning,
            vila och mental återhämtning. 
            <br></br>I 30 min behandlingen ingår massage på
            rygg, nacke och skalp.
            <br></br> I 60 min behandlingen ingår helkroppsmassage
            <br></br>I 90 min behandlingen ingår; 50 min helkroppsmassage 20
            min handmassage 20 min ansikts-, nack- & skalpmassage En helt
            ljuvlig stund
          </p>
        </article>
      </section>
    </main>
  );
}
