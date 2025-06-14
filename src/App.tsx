import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
