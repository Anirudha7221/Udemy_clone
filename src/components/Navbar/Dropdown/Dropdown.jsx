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
                        <div id="login-content">
                            <p>Login</p>
                            <p>SignUp</p>
                            <p>Plans & Pricing</p>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Developement</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>Web Developement</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Data Science</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Mobile Developement</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Progrmamming Language</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Game Developement</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Database Design & Development</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Software Testing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Software Engineering</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>No-Code Development</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Business</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class="submenu">
                                <div class='dropdown-item'>
                                    <p>Enterperships</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Comunication</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Mangement</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Sales</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Business Strtergy</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Operations</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Project Mangement</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Business Anlyatics & Intelligence</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Business Law</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Human Resource</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Industry</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>E-commurace</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Media</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Real Estate</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Other Businesses</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Finace & Accounting</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class="submenu">
                                <div class='dropdown-item'>
                                    <p>Accounting & Bookkping</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Compalince</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Crypto currency & Block-chain</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Economics</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Finace</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Finace cert & Exam prep</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Finacial Modelling & Anlysis</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Investing & Trading</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Money Mangement Tools</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Taxes</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>IT & Software</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>IT Certification</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Network & Security</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Hardware</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Operating System & services</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Other IT & Software</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Office & Productivity</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>Microsoft</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Apple</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Google</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>SAP</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Oracle</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Other office Productivity</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Personal Developement</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                 <div class='dropdown-item'>
                                    <p>Personal Transformation</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Personal Productivity</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Leadership</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Cariear Development</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Parenting & Relationship</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Happiness</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Estoric Practices</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Personal Brand Bulding</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Crieativity</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Influace</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Self Estam & Confidence</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Stress Mangement</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Memory & Study-skills</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Motivation</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Design</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>Web Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Graphic Design & Illustration</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Design Tools</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>User Experieance Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Game Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>3D & Animation</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Fasion Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Architeacher Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Interior Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Other Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div> 
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Marketing</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                 <div class='dropdown-item'>
                                    <p>Digital Marketing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Product Marketings</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Search Engine Optimization</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Social-media Marketing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Branding</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Marketing Fundamentals</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Marketing Analyatics & Automation</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Public Relations</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Paid Advertising</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Video & Mobile Marketing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Content Marketing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Growth Hacking</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Affiliate Marketing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Other Marketing</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Liftstyle</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>Arts & Crafts</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Beauty & Makeup</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Esoteric Practices</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Food & Bevarege</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Gaming</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Home Improvment & Gardening</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Pet care & Traning</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Travel</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Photography & Video</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                 <div class='dropdown-item'>
                                    <p>Digital Photography</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Photography</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Portrait Photography</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Photography Tools</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Commerial Photography</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Video Design</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Health & Fitness</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>Fitness</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Sports</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Nutrition Diest</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Yoga</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Mental Health</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>MartialArts & Self-defence</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Safety & FirstAid</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Dance</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Meditation</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                        <div class='dropdown-item has-sublist'>
                            <p>Music</p>
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                            <div class='submenu'>
                                <div class='dropdown-item'>
                                    <p>Instruments</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Music Production</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Music Fundamentals</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Vocal</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Music Techniques</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                                 <div class='dropdown-item'>
                                    <p>Music Software</p>
                                    <span class="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dropdown;