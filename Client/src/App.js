import React from "react";
import { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Signup/Signup";
import Home from "./pages/Home";

function App(){
    // useEffect(()=>{

    //   const fetchData=async()=>{
    //     const res=await fetch('https://localhost:3000');
    //     const data=await res.json();
    //     console.log(data);
    //   }

    //   // fetchData();
    // },[]);

    return(
      <>
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Register/>}></Route>
             <Route path="/login" element={<Login/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
         </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;