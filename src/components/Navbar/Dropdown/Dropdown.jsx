import React from "react";
import './Dropdown.css';

function Dropdown(){
    return(
        <>
            <div id='dropdown'>
                    <p>Categories</p>
                    <span id="menu" class="material-symbols-outlined">
                         menu
                    </span> 
                    <div id="dropdown-list">
                        <div class='Dropdown-list'>
                            <p>Developement</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Office Productivity</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Music</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Health & Fitness</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Photography & Video</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Personal Developement</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Busniess</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
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
                        <div class='dropdown'>
                            <p>Marketing</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Lifestyle</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        <div class='dropdown'>
                            <p>Finance & Accounting</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dropdown;