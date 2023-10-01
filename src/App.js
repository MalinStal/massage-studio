import style from "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/main-Content/Header";
import Footer from "./components/main-Content/Footer";
import Main from "./components/main-Content/Main";

import Hem from "./pages/Hem";
import Behandling from "./pages/Behandling";
import Addminpage from "./pages/addmin-pages/addminpage";
import Klientlist from "./pages/addmin-pages/addmin-klientlist";
import Boka from "./pages/booking/Boka";
import Boka2 from "./pages/booking/Boka2";
import Boka3 from "./pages/booking/Boka3";
import Kontakt from "./pages/Kontakt";

import { ArrowCircleUp } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalIsOpen } from "./recoilstate/atoms";
import { Comments } from "./components/coments";

import { getCommentsState, getUsersState } from "./recoilstate/atoms";
import { getComments, getUsers } from "./API/fetch";

function App() {
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen)
  
  const setComments = useSetRecoilState(getCommentsState);
  const  setUsers = useSetRecoilState(getUsersState);
 
  
  const location = useLocation()

    useEffect(() => {
    getComments().then((result) => setComments(result.comments));
    getUsers().then((result) => setUsers(result.users));
  }, []);

  useEffect(() => {
    if (isOpen == true) setIsOpen(false)

  }, [location]);

  const scrollBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const boka1 = location.pathname === "/Boka";
  const boka2 = location.pathname === "/Boka2";
  const boka3 = location.pathname === "/Boka3";
  const addmin1 = location.pathname === "/addminpage";
  const addmin2 = location.pathname === "/klientlist";
  const NoShow = boka1 + boka2 + boka3 + addmin1 + addmin2;


  return (
    <>
      <Header />
      <Main/>
      <ArrowCircleUp size={32} className="Arrow-up" onClick={scrollBackTop} />
      <Routes >
        <Route index element={<Hem />} />
        <Route path="/Behandling" element={<Behandling />} />
        <Route path="/Boka" element={<Boka />} />
        <Route path="/Boka2" element={<Boka2 />} />
        <Route path="/Boka3" element={<Boka3 />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/addminpage" element={<Addminpage />} />
        <Route path="/klientlist" element={<Klientlist />} />
      </Routes>
      <section className="home-section">
      {!NoShow && <Comments />}
      </section> 
      <Footer />
    </>
  );
}

export default App;
