import React from "react";
import axios  from 'axios';
import { useState } from "react";
import '../Signup/signup.css';

function Signup(){

    const [email, setEmail]=useState('');
    const [pass, setPass]=useState();
    const [confirmPass, setConfirmPass]=useState();

    async function handleSubmit(e) {
        e.preventDefault();

        const Error = document.getElementById("error");
        const success = document.getElementById("success");

        if(pass===confirmPass){
            success.style.display='block';
        }
        else{
            Error.style.display='block';
        }

        setTimeout(() => {
            Error.style.display='none';
        },3000);

        
        try {
            await axios.post("http://localhost:8000/",{
                email,
                password : pass
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
    <div id="Register-box">
        <div id="Register">
        <form action='submit' name="signup-form">
            <h1>Register</h1>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    mail
                </span>
                <input type="email" name="userId" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                <label>Username</label>
            </div>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    lock
                </span>
                <input type="password" name="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} required/>
                <label>Password</label>
            </div>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    lock
                </span>
                <input type="password" name="confirmpass" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}} required/>
                <label>Confirm Password</label>
            </div>
            <button type="submit" onClick={handleSubmit}>Register</button>
            <p id="success">Registration Sucessfull...!</p>
            <p id="error">Password & Confirm Password Didn't Match</p>
            <div id="login-link">
                <p>Already have an account ? <a href="/login">Login</a></p>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Signup;