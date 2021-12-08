import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ponsavon from "./pages/Ponsavon";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="multimedia-film-project/" element={<Home/>} />
            <Route path="/ponsavon" element={<Ponsavon/>} />
          </Routes>
          {/* <Home/> */}
          {/* <Detail/> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
