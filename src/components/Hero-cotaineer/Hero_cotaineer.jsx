import React from "react";
import "./hero-containeer.css";

const Hero_containeer=()=>{
    return(
        <div>
            <div id="hero-containeer">
                <div id="sales-box">
                    <div id="sales-info">
                        <h1>Learn more & save</h1>
                        <p>With courses from ₹399 you can learn skills for your workweek & your weekends. Sale ends August 29.</p>
                    </div>
                </div>
                <div id="culture">
                    <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image_responsive/094efac5-7053-4eed-9a5d-5720cdb0cf62.png"/>
                </div>
                <div id="newSales-info">
                    <h1>Learn more & save</h1>
                    <p>With courses from ₹399 you can learn skills for your workweek & your weekends. Sale ends August 29.</p>
                </div>
           </div>
            <div id="skills-info">
                <h1>All the skilles you need in one place</h1>
                <p>From critical skills to technical topics, Udemy supports your professional development.</p>
            </div>
        </div>
    )
}

export default Hero_containeer ;