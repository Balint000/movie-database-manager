import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Sandbox from "./pages/Sandbox";
import Login from "./pages/Login";
import "./styles/App.css";

function App() {
  return (
    // 1. BrowserRouter a routing bekapcsolásához
    <BrowserRouter>
      {/* 2. A Navbar minden oldalon látszódni fog */}
      <AppNavbar />

      <div>
        <Routes>
          {/* Alapértelmezett (default) útvonal: átirányítjuk a /movies-ra*/}
          <Route path="/" element={<Navigate to="/movies" />} />

          {/* Movies útvonal, amit a 5. feladatban Movies komponensre cserélünk */}
          <Route path="/movies" element={<Movies />} />

          {/* Sandbox útvonal [cite: 37] */}
          <Route path="/sandbox" element={<Sandbox />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
