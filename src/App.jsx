
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"; 
import Favs from "./Routes/Favs"
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";
import "./App.css"

function App() {
  const { state } = useContext(ContextGlobal);

  // Lógica para cambiar el tema


  return (
    <BrowserRouter>
      <div className={state.theme === 'light' ? 'light' : 'dark'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentista/:id" element={<Detail />}/> 
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


