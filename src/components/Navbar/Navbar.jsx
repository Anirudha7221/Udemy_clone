import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import './navbar.css';

function Navbar(){
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
                    <button>Login</button>
                    <button id="signup">SignUp</button>
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