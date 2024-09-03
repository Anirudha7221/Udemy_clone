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
                        <a href="https://www.udemy.com/pricing/"><p>Plans & Pricing</p></a>
                        <a href="https://www.udemy.com/business/request-demo/?locale=en_US&mx_pg=httpcachecontextsme-list&path=request-demo-in-mx%2F&ref=ufb_header&user_type=visitor"><p>Udemy Business</p></a>
                        <a href="https://www.udemy.com/teaching/?ref=teach_header"><p>Teach on Udemy</p></a>
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