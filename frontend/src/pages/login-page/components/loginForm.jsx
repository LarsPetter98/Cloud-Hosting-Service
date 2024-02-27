import {Outlet, Link} from "react-router-dom";
import React, {useState} from "react";

export default function LoginForm () {

    //Post request at form submit
    const handleLogin = async (event) => {
        const email = document.querySelector(".email").value;
        const password = document.querySelector(".password").value;
        event.preventDefault();
        const url = "http://localhost:3000/login";
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        try {
            const response = await fetch(url, requestOptions);
            if(response.ok) {
                // Handle successful login
                console.log("Successful login")
            }
            else {
                //Handle login failure
                console.error("Login failed");
            }
        }
        catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <>
        <div className="flex justify-center mt-6">
            <form className="mt-16">
                <div className="text-2xl mb-2">Login</div>
                <hr className="mb-6" />
                <div>
                    <input className="py-3 pl-2 pr-8 rounded shadow mb-3 email" type="email" placeholder="Enter email"/>
                </div>
                <div>
                    <input className="py-3 pl-2 pr-8 rounded shadow mb-4 password" type="password" placeholder="Enter password"/>
                </div>
                <div>
                    <button className="bg-green-500 text-white text-sm py-2 px-4 rounded mt-1 hover:opacity-70 text-center" onClick={handleLogin}>Continue</button>
                    <span className="text-blue-500 cursor-pointer hover:underline ml-10 text-sm"><Link to="/signup">New user?</Link></span>
                </div>
            </form>
        </div>
        <Outlet/>
        </>
    )
};