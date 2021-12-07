import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProfileSm from './components/ProfileSm/ProfileSm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <Footer/>
     
    </div>
  );
}

export default App;
