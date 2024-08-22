import React from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Hero_containeer from './components/Hero-cotaineer/Hero_cotaineer';
import Section_1 from './components/Section_1/Section_1';
import Section_2 from './components/Section_2/Section_2';
import './App.css';

function App() {
  return (
     <div className="App">
        <Navbar></Navbar>
        <Hero_containeer></Hero_containeer>
        <Section_1></Section_1>
        <Section_2></Section_2>
        <Footer></Footer>
    </div> 
  );
}

export default App;