import React from "react";
import { useState } from "react";
import axios from "axios";
import '../Login/login.css';
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate('');

    async function handleSubmit(e){
        e.preventDefault()
        const msgDisplay=document.getElementById('error-msg');

        try {
            const response= await axios.post("http://localhost:8000/login",{
                username,password
            })

            if(response.status===200){
                navigate('/home');
            }
            else{
                msgDisplay.style.display='block';
            }

            setTimeout(() => {
                msgDisplay.style.display='none';
            }, 3000);
        }catch (error) {
            console.log(error);
        }
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