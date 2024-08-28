import React from "react";
import "./section_2.css";

const Section_2=()=>{
    return(
        <>
        <div id="section-2">
            <h1>Learning focused on your goals</h1>
            <div id="goals">
                <div>
                    <div class="criteria" id="active">
                        <div>
                            <h1>Hands-on training</h1>
                        </div>
                        <p>Upskills effectively with Al-powered coding exercises, practise tests, and quizess.</p>
                    </div>
                    <div class="criteria">
                        <div>
                            <h1>Certification prep</h1>
                        </div>
                        <p>Prep for industry-recognized certifications to solving real-world challeges and earn badges along the way.</p>
                    </div>
                    <div class="criteria">
                        <div>
                            <h1>Inside an analytics</h1>
                            <button>Enterprise plan</button>
                        </div>
                        <p>Fast-tracks golas with advanced insights plus dedicated customer success team to help drive effective learning.</p>
                        <div class="more">
                            <p>Find out more</p>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                    <div class="criteria">
                        <div>
                            <h1>Customizable content</h1>
                            <button>Enterprise plan</button>
                        </div>
                        <p>Create tailored learning paths for team and organization goals and even host your own content and resourses.</p>
                        <div class="more">
                            <p>Find out more</p>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="score-card">
                        <div id="colours-circle">
                            <span id="orange"></span>
                            <span id="yellow"></span>
                            <span id="green"></span>
                        </div>
                        <div id="questions">
                            <h1>Containerization</h1>
                            <div>
                                <span class="material-symbols-outlined">
                                    help
                                </span>
                                <p>30 questions</p>
                            </div>
                        </div>
                        <div id="score">
                            <h1>Your score: 159</h1>
                            <p>What do these numbers mean ?</p>
                        </div>
                        <div id="chart">
                            <div class="active">
                                <h2 class="active">Superior</h2>
                                <p class="active">150-200</p>
                            </div>
                            <div>
                                <span id="high-score"></span>
                            </div>
                        </div>
                        <div id="chart">
                            <div>
                                <h2>Established</h2>
                                <p>100-149</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div id="chart">
                            <div>
                                <h2>Developing</h2>
                                <p>50-99</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div id="chart">
                            <div>
                                <h2>Limited</h2>
                                <p>0-49</p>
                            </div>
                            <div>
                                <span id="below-score"></span>
                            </div>
                        </div>
                        <div id="performance">
                            <span class="material-symbols-outlined">
                                model_training
                            </span>
                            <p>Your Performence was better than <b>88% </b>of Udemy learners who have completed this assessment.</p>
                        </div>
                        <div id="answers">
                            <h2>Your Answers</h2>
                            <p>Review your answers, Learn from this explanation of correct and incorrect responce option.</p>
                            <div id="answer-score">
                                <div class="ans">
                                    <p>All Domains</p>
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </div>
                                <div class="ans">
                                    <p>All Answers</p>
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </div>
                                <div>23 Correct</div>
                                <div>7 Incorrect</div>
                                <div> 0 Skipped</div>
                            </div>
                        </div>
                        <div id="ans-box">
                            <div id="checkbox">
                                <span class="material-symbols-outlined">
                                    check
                                </span>
                            </div>
                            <div>
                                <div id="ques-no">
                                    <h2>Question 1</h2>
                                    <p>Correct</p>
                                </div>
                                <p>Which of the following senarious is benefit most from a managed Kubernetes service, such as AWS'EKS or Google cloud's GKE ?</p>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">
                                    keyboard_arrow_down
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
    )
}

export default Section_2;