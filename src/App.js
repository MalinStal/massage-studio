import style from "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/main-Content/Header";
import Footer from "./components/main-Content/Footer";
import Main from "./components/main-Content/Main";

import Hem from "./pages/Hem";
import Behandling from "./pages/Behandling";
import Addminpage from "./pages/addmin-pages/addminpage";
import Boka from "./pages/booking/Boka";
import Boka2 from "./pages/booking/Boka2";
import Boka3 from "./pages/booking/Boka3";
import Kontakt from "./pages/Kontakt";

import { ArrowCircleUp } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

function App() {
  const arrowup = useRef(null)
  
  
   const handelScrollEvent = () => {
  if( arrowup.current && window.screen.width >= 480) {
    if (window.scrollY >= 70){
      arrowup.current.classList.add('arrowup-scroll')
    } else {
      arrowup.current.classList.remove('arrowup-scroll')
    }
  }
}

const scrollBackTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


 const location=useLocation()
  const b1= location.pathname === "/Boka";
  const b2= location.pathname === "/Boka2";
  const b3= location.pathname === "/Boka3";
const showMain =b1 + b2 + b3;
 
 
  useEffect(() => {
    window.addEventListener('scroll', handelScrollEvent)
    return () => window.removeEventListener('scroll',handelScrollEvent)
  }, [])
  return (
    <>
      <Header />
      {!showMain && (<Main />)}
      <ArrowCircleUp size={32} className="Arrow-up" ref={arrowup} onClick={scrollBackTop}/>
      <Routes>
        <Route index element={<Hem />} />
        <Route path="/Behandling" element={<Behandling />} />
        <Route path="/Boka" element={<Boka />} />
        <Route path="/Boka2" element={<Boka2 />} />
        <Route path="/Boka3" element={<Boka3 />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/addminpage" element={<Addminpage />} />
      </Routes>
     
      <Footer />
    </>
  );
  }

export default App;
