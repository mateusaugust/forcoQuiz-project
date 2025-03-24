
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { MenuInitial } from "./assets/MenuInitial";
import { About } from "./assets/About";
import { Points } from "./assets/Points";
import { TypePlay } from "./assets/TypePlay";
import { Games } from "./assets/Games";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MenuInitial/>} />
          <Route path="/jogar" element={<TypePlay/>}/>
          <Route path="/pontuacao" element={<Points/>}/>
          <Route path="/sobre" element={<About/>}/>
          <Route path="/game/:tipo" element={<Games/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
