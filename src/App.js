import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" component={<Home/>} />
            <Route path="/detail" component={<Detail/>} />
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
