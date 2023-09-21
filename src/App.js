import style from "./App.css";
import { Route, Routes } from "react-router-dom";

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


function App() {
  return (
    <>
      <Header />
      <Main />

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
