import React from "react";
import './navbar.css';

function Navbar(){
    return(
        <>
            <div id="navbar">
            <span id="menu" class="material-symbols-outlined">
                    menu
                </span> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXzeImAiH1KttGE_h6Si1V2WwaiGPpBUGXQ&s"/>
                <div id='dropdown'>
                    <p>Categories</p>
                    <div id="dropdown-list">
                    <div>
                        <p>Developement</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                     <div>
                        <p>Busniess</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                     <div>
                        <p>IT Software</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                     <div>
                        <p>Design</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                     <div>
                        <p>Marketing</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                     <div>
                        <p>Lifestyle</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                     <div>
                        <p>Finance & Accounting</p>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                     </div>
                    </div>
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