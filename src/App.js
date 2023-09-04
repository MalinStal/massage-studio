import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hem from "./pages/Hem";
import Behandling from "./pages/Behandling";
import Boka from "./pages/Boka";
import Kontakt from "./pages/Kontakt";

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
 this app is working
 </>
  );
}

export default App;
