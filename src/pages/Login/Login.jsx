import React from "react";
import '../Login/login.css';
import { useNavigate } from "react-router-dom";

function Login(){

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const Navigate=useNavigate('');

    const LogedIn=()=>{
        console.log("clicked");

        const Username=document.forms["login-form"].username.value;

        const Password=document.forms["login-form"].password.value;

        // console.log(Username, Password);

        const Data=window.localStorage.getItem("data");

        const Data1=Object.values(JSON.parse(Data));

        // console.log(Data1);

        const UserName=Data1[0];

        const Pass=Data1[1];

        console.log(UserName, Pass);

        if(Password===Pass){
            Navigate('/home');
        }

        else
        {
            const Displayerror=document.getElementById('error-msg');
            Displayerror.style.display='block';
            setTimeout(() => {
                Displayerror.style.display="none";
            }, 5000);
        }
    }

    return(
    <div id="login-box">
    <   div id="login">
        <form name="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    mail
                </span>
                <input type="text" name="username" required/>
                <label>Username</label>
            </div>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    lock
                </span>
                <input type="password" name="password" required/>
                <label>Password</label>
            </div>
            <div id="forgot">
                <label><input type="checkbox"/> Remember me </label>
                <a href="#">Forgot password</a>
            </div>
            <button type="submit" onClick={LogedIn}>Login</button>
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