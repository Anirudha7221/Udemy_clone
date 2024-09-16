import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Signup/Signup";
import Home from "./pages/Home";
import Reset_pass from "./pages/Reset_pass/Reset_pass";

function App(){

    return(
      <>
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Register/>}></Route>
             <Route path="/login" element={<Login/>}></Route>
             <Route path="/reset-password" element={<Reset_pass/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
         </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;