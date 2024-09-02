import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import './navbar.css';

function Navbar(){

    const Navigate= useNavigate('');

    const Logout=()=>{
        Navigate('/login');
    }

    const Signup=()=>{
        Navigate('/');
    }

    return(
        <>
            <div id="navbar">
                <img id='img-1'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXzeImAiH1KttGE_h6Si1V2WwaiGPpBUGXQ&s"/>
                <Dropdown></Dropdown>
                <div id='img-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXzeImAiH1KttGE_h6Si1V2WwaiGPpBUGXQ&s"/>
                </div>
                <div id="searchbar">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    <input type="text" placeholder="Search for anything"/>
                </div>
                <div id="content">
                        <p>Plans & Pricing</p>
                        <p>Udemy Business</p>
                        <p>Teach on Udemy</p>
                </div>
                <span id='cart' class="material-symbols-outlined">
                    shopping_cart
                </span>
                <div id="nav-buttons">
                    <button onClick={Logout}>Logout</button>
                    <button id="signup" onClick={Signup}>SignUp</button>
                    <button>
                        <span class="material-symbols-outlined">
                        language
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;