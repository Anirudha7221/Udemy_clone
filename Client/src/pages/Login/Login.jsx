import React from "react";
import { useState } from "react";
import axios from "axios";
import '../Login/login.css';
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate('');

    var email,pass;

    async function handleSubmit(e){
        e.preventDefault()

        try {
            await axios.get("http://localhost:8000/",{
                email,pass
            })
            console.log(email, pass);
        }catch (error) {
            console.log(error);
        }

        const msgDisplay=document.getElementById('error-msg');
        if(pass===password){
            navigate('./home');
        }
        else{
            msgDisplay.style.display='block';
        }

        setTimeout(() => {
            msgDisplay.style.display='none';
        }, 3000);
    }

    return(
    <div id="login-box">
    <   div id="login">
        <form name="login-form">
            <h1>Login</h1>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    mail
                </span>
                <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
                <label>Username</label>
            </div>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    lock
                </span>
                <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <label>Password</label>
            </div>
            <div id="forgot">
                <label><input type="checkbox"/> Remember me </label>
                <a href="#">Forgot password</a>
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
            <p id="error-msg">Usename & password is wrong Please try again !</p>
            <div id="register-link">
                <p>Don't have an account ? <a href="/">Register</a></p>
            </div>
        </form>
    </div>
    </div>
    )
}

export default Login;