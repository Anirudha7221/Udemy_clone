import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero_containeer from './components/Hero-cotaineer/Hero_cotaineer';
import Section_1 from './components/Section_1/Section_1';
import Section_2 from './components/Section_2/Section_2';
import Section_3 from './components/Section_3/Section_3';
import Section_6 from './components/Section_6/Section_6';
import Section_4 from './components/Section_4/Section_4';
import './App.css';

function App() {
  
  return (
     <div className="App">
        <Navbar></Navbar>
        <Hero_containeer></Hero_containeer>
        <Section_1></Section_1>
        <Section_2></Section_2>
        <Section_3></Section_3>
        <Section_4></Section_4>
        <Section_6></Section_6>
        <Footer></Footer>
    </div> 
  );
}

export default App;