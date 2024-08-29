import React from "react";
import "./Gallery.css";

function Gallery(){

    const scrollcontaineer=React.useRef(null);

    console.log(scrollcontaineer.current);

    const srcollLeft=()=>{ 
        if(scrollcontaineer.current){
            scrollcontaineer.current.scrollBy({left :-200, behavior: 'smooth'});
        }
    }

    const scrollRight=()=>{
        if(scrollcontaineer.current){
           scrollcontaineer.current.scrollBy({left :200, behavior: 'smooth'})
        }
    }

    return(
        <>
        <button onClick={srcollLeft} id="left-btn"><span class="material-symbols-outlined">arrow_back_ios</span></button>
            <div id="crouser" ref={scrollcontaineer}>
                <div id="image-gallery">
                    <div class="info-containeer">
                        <div>
                            <img src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg"/>
                        </div>
                        <div>
                            <h4>100 Days of Code: The Complete<br/>Python Pro Bootcamp</h4>
                            <p>Dr. Angella Yu, Developer amd lead...</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>The Complete Python Pro<br/> Bootcamp</h1>
                                <p>Updated <b>July 2023</b></p>
                                <span>61.5 total hours All Levels-Subtitles</span>
                                <p>Learn python like a professional Start from the basic<br/> and go all the way to create your own App.</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>You will build games and programs that<br/>use python libraries.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Learn to use python professionally, learning<br/>both python 2 and python 3!.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Learn to use object-oriented programming<br/> with classes.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/750x422/2263832_ac7c_2.jpg"/>
                        </div>
                        <div>
                            <h4>The Complete Python Bootcamp<br/> From Zero to Hero in Python</h4>
                            <p>Jose Portila, Pierian Training</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>The Complete 2024 Python<br/> Bootcamp</h1>
                                <p>Updated <b>June 2024</b></p>
                                <span>61.5 total hours All Levels-Subtitles</span>
                                <p>Become a python Developer with just One course.</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>You will learn how to leverage the power of<br/>python to solve tasks.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Understand complex topics like a decoraters.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Create games with python,like Tic Tak Toe and<br/>BlackJack.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/750x422/2789348_065c_4.jpg"/>
                        </div>
                        <div>
                            <h4>[New]Ultimate AWS Certificate<br/> Cloud Practitioner CLF-CO2</h4>
                            <p>Stephen Maarek</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>Learn cloud computing pass<br/>the AWS Practitioner CLE-CL2</h1>
                                <p>Updated <b>August 2024</b></p>
                                <span>61.5 total hours All Levels-Subtitles</span>
                                <p>Full practice Exam includede+ Explanations. Pass the<br/> AWs Exam</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>You will learn all the AWS fundamentals.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>You will get practice with Explanations included.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>You will EC2, ELB, ASG, RDS, S3.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg"/>
                        </div>
                        <div>
                            <h4>The Complete 2024 Web<br/> Development Bootcamp</h4>
                            <p>Dr. Angella Yu, Developer amd lead...</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>The Complete 2024 Web<br/>Development Bootcamp</h1>
                                <p>Updated <b>August 2024</b></p>
                                <span>61.5 total hoursAll LevelsSubtitles</span>
                                <p>Become a Full-Stack Web Developer with<br/> just ONE course. HTML, CSS, Javascript, Node,<br/> React, PostgreSQL, Web3 and DApps</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Build 16 web development projects for<br/> your portfolio, ready to apply for<br/> junior developer jobs</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Learn the latest technologies,<br/> including Javascript, React, Node and <br/>even Web3 development.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>After the course you will be able to<br/> build ANY website you want</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg"/>
                        </div>
                        <div>
                            <h4>React the complete Guide 2024<br/> (incl. Next.js, Redux)</h4>
                            <p>Maximiliaan Schwarzmuille</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>React the complete Guide 2024<br/>including Next.js and Redux</h1>
                                <p>Updated <b>August 2024</b></p>
                                <span>68.5 total hoursAll LevelsSubtitles</span>
                                <p>Dive in and learn React.js from scrath ! Learn React<br/>Hooks, Redux, Routers Best Practice and way more.</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Learn React from the groud up and finish<br/>course as an advanced React Develeper.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Bulid multiple high-quality apps, including with<br/> fullstack app build with Next.js.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Join more than 800,000 students in<br/>this course and more than 2,500,000<br/>students taughats across this course.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/750x422/4539678_f7fc.jpg"/>
                        </div>
                        <div>
                            <h4>Machine Learning A-Z: Al Python<br/> & ChatGPT[2024]</h4>
                            <p>Dr. Angella Yu, Developer amd lead...</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>Machine Learning A-Z: Al<br/>Python & ChatGPT [2024]</h1>
                                <p>Updated <b>August 2024</b></p>
                                <span>58.3 total hoursAll LevelsSubtitles</span>
                                <p>Learn to create Machine learning Alogorithms in Python<br/>& R from two Data Science Experts.</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Handle Advance techniques like Dimentionality<br/>Reduction</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Handle Specific topics like Rainforecement<br/>learning,, NLP and deep learning.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Have a great invitation of many Machine<br/> learning models.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg"/>
                        </div>
                        <div>
                            <h4>The Complete Javascript Course<br/> 2024 from Zero to Expert</h4>
                            <p>Jonas Schmedtmann</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>The Complete Javascript<br/>Course [2024] from<br/>Zero to Expert</h1>
                                <p>Updated <b>Januvary 2024</b></p>
                                <span>66.5 total hours All Levels-Subtitles</span>
                                <p>The modern Javascript course for everyone!<br/> Master Javascript with projects,challenges<br/> and theory</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Become an Advenced and confident<br/>and Modern Javascript developers<br/>from scrath.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Build 6 Beautiful Real-world projects<br/>for your Portfolio<br/>(not boring Toy apps).</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Become job ready by understanding how<br/>Javascript really works behind the scence.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class='info-containeer'>
                        <div>
                            <img src="https://img-b.udemycdn.com/course/750x422/5270552_fef4_2.jpg"/>
                        </div>
                        <div>
                            <h4>Microsoft Power Bl Desktop For<br/> Business Intelligence</h4>
                            <p>Chris Dutton</p>
                            <p class="price">र् 399</p>
                        </div>
                        <div class="course-info">
                            <div class="details">
                                <h1>Microsoft Power Bl Desktop<br/>for Business Intelligence</h1>
                                <p>Updated <b>August 2024</b></p>
                                <span>64.8 total hoursAll LevelsSubtitles</span>
                                <p>Master Power Bl Desktop for data prep, data analysis,<br/>data visualization & amp dashboard design.</p>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Build professionally quality business<br/>intelligence report from the groud up.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Learn from a#1 best-selling instractor and<br/>profesional Power Bl developer.</p>
                                </div>
                                <div>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <p>Design and implement the same tools used<br/>by profesional data anylysts and data scientists.</p>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="btn">Show All Web Development Courses</div>
            <button onClick={scrollRight} id="right-btn"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
        </>
    )
}

export default Gallery;