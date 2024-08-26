import React from "react";
import './navbar.css';
import {usestate} from 'react';

function Dropdown(){
    const [isDropdownVisible, setIsDropdownVisible]= usestate(false);
    const [dropdownValue, setDropdownValue]=usestate('');

    const toggleDropdown=()=>{
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleChange=(event)=>{
          setDropdownValue(event.target.value);
    }
}

function Navbar(){

    return(
        <div id="navbar">
           <span id="menu" class="material-symbols-outlined">
                menu
            </span> 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXzeImAiH1KttGE_h6Si1V2WwaiGPpBUGXQ&s"/>
       <p>Categories</p>
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
       <span id="active" class="material-symbols-outlined">
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
    )
}

export default Navbar;