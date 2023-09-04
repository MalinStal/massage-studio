import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Hem from "./pages/Hem";
import Behandling from "./pages/Behandling";
import Boka from "./pages/Boka";
import Kontakt from "./pages/Kontakt";
import Aside from "./components/Aside";
import Main from './components/Main'


function App() {
  return (
 <>
<Header/>
<Routes>
  <Route path="/Hem" element={<Hem/>}/>
  <Route path="/Behandling" element={<Behandling/>}/>
  <Route path="/Boka" element={<Boka/>}/>
  <Route path="/Kontakt" element={<Kontakt/>}/>
</Routes>


<Footer/>
 </>
  );
}

export default App;
