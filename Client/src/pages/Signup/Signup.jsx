import React from "react";
import '../Signup/signup.css';

function Signup(){

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const SignedIn=()=>{
        console.log("clicked");

        
        const UserID=document.forms["signup-form"].userId.value;

        const Pass=document.forms["signup-form"].pass.value;

        const ConfirmPass= document.forms["signup-form"].confirmpass.value

        // console.log(UserID, Pass, ConfirmPass);

        var data={
            "username":UserID,
            "password":Pass
        }

        if(Pass === ConfirmPass){
            const Successfully_Register=document.getElementById('success');
            Successfully_Register.style.display="block";
        }
        else
        {
            const Error=document.getElementById("error");
            Error.style.display='block';
            setTimeout(() => {
                Error.style.display='none';
            },5000);
        }

        window.localStorage.setItem('data',JSON.stringify(data));
    }

    return(
    <div id="Register-box">
        <div id="Register">
        <form name="signup-form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    mail
                </span>
                <input type="text" name="userId" required/>
                <label>Username</label>
            </div>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    lock
                </span>
                <input type="password" name="pass" required/>
                <label>Password</label>
            </div>
            <div class="input-box">
                <span class="material-symbols-outlined icon">
                    lock
                </span>
                <input type="password" name="confirmpass" required/>
                <label>Confirm Password</label>
            </div>
            <button type="submit" onClick={SignedIn}>Register</button>
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