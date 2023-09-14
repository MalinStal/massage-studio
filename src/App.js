
import style from './App.css'
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';
import Hem from "./5pages/Hem";
import Behandling from "./5pages/Behandling";

import Boka from "./5pages/Boka";
import Boka2 from "./5pages/Boka2";
import Boka3 from "./5pages/Boka3";
import Kontakt from "./5pages/Kontakt";
import Main from './components/Main'



function App() {

  return (
 <>

<Header/>
<Main/>
<Routes>
  <Route index element={<Hem/>} />
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
//prova läga in index istället för path="/"
export default App;
