import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { choiceOfTreatment } from "../contexts/atoms";

import {style} from './booking-schedule-style.css'
import malin from './malin.jpg';
import BookingSchedule from '../utils/booking-schedule';


//ATT GÖRA I DENNA FIL 
//här ska det finnas en lista på alla lediga tider samt en knapp för att boka/välja den tid du ser.
//kommer behöva skapa en lista med alla bokningsbara tider som finns på en dag..... samt vilka dagar 
// behöver på något sätt gemföra alla tider med dagar på en vecka samt om alla 
//
//
export default function Boka2() {

const bookingInfo = useRecoilValue(choiceOfTreatment);

  const navigate = useNavigate();
const handelClick = e => {navigate("/Boka3")}


   
     const style = {
       width: "20px",
       hight: "25px",
       borderRadius: "50px",
     };
   
     return (
       <div className="div-booking-schedule">
         <section>
           <h3 className="booking-date-headline">Bokningsbara tider: {JSON.stringify(bookingInfo.date)} </h3>
           <ul className="render-booking-ul">
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
           
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li><li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
           
           </ul>
         </section>
         <section>
           <h3 className="booking-date-headline">Bokningsbara tider: {JSON.stringify(bookingInfo.date)}</h3>
           <ul className="render-booking-ul">
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
           
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
             <li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li><li className="render-booking-li">
               <span>17:00 </span>
               <span>{JSON.stringify(bookingInfo.treatment)}</span>
               <span>{JSON.stringify(bookingInfo.time)}</span>
               <span>
                 Malin S <img src={malin} style={style} />
               </span>
               <button className="render-booking-btn" onClick={handelClick}> Boka</button>
             </li>
           
           </ul>
         </section>
        
   
         
       </div>
     );
  
}
