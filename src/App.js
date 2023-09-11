
import style from './App.css'
import { Route, Routes, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';
import Hem from "./pages/Hem";
import Behandling from "./pages/Behandling";

import Boka from "./pages/Boka";
import Boka2 from "./pages/Boka2";
import Boka3 from "./pages/Boka3";
import Kontakt from "./pages/Kontakt";
import Aside from "./components/Aside";
import Main from './components/Main'


function App() {
  return (
 <>

<Header/>
<Main/>
<Routes>
  <Route path="/"element={<Hem/>} />
  <Route path="/Behandling" element={<Behandling/>}/>
  
  <Route path="/Boka" element={<Boka/>}/>
  <Route path="/Boka2" element= {<Boka2/>}/>
  <Route path="/Boka3" element= {<Boka3/>}/>
  <Route path="/Kontakt" element={<Kontakt/>}/>
  
 
</Routes>


<Footer/>

 </>
  );
}

export default App;
