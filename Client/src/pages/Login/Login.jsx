import React from "react";
import { useState } from "react";
import axios from "axios";
import '../Login/login.css';
import { useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [errormsg, setErrormsg]=useState('');
    const navigate=useNavigate('');


    async function handleSubmit(e){
        e.preventDefault()
        setErrormsg('');
        try {
            const response= await axios.post("http://localhost:8000/login",{
                email :username,
                password
            })

            if(response.status===200){
                navigate('/home');
            }
        }catch (error) {
            console.log(error);
            
            setErrormsg("Usename & password is wrong Please try again !");

            setTimeout(() => {
                setErrormsg('');
            }, 3000);
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
                <a href="/reset-password">Forgot password</a>
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
            {
                errormsg && (
                    <p id='error-msg'>{errormsg}</p>
                )
            }
            <div id="register-link">
                <p>Don't have an account ? <a href="/">Register</a></p>
            </div>
        </form>
    </div>
    </div>
    )
}

export default Login;