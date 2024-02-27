import React, {useState} from "react";
import {Outlet, Link} from "react-router-dom";

export default function Header() {
    const [navMenu, toggleNavMenu] = useState("Click me");
    const handleClick = (event) => {
        const navbarMenu = document.querySelector(".navbarMenu");
        const body = document.getElementById("root");
        navbarMenu.classList.toggle("hidden");
        navbarMenu.classList.toggle("absolute");
        body.classList.toggle("opacity-50");
        navbarMenu.classList.toggle("bg-sky-500");
    }
    return (
        <>
        <header className="py-6 bg-green-500 px-4 text-white flex items-center justify-between header">
        <div className="text-2xl cursor-pointer"><Link to="/Cloud-Hosting-Service/frontend/index.html">Cloud Storage</Link></div>
        <div className="navbar-container">
            <div className="xl:hidden lg:hidden md:hidden sm:block cursor-pointer absolute right-3 top-7" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
            <nav className="xl:flex lg:flex md:flex hidden right-3 top-3 bg-white sm:bg-transparent pt-2 pr-20 pb-6 pl-3 sm:p-0 text-black sm:text-white rounded sm:shadow-none shadow navbarMenu">
                <div className="xl:hidden lg:hidden md:hidden sm:block cursor-pointer absolute right-2 top-2 text-red" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </div>
                <div className="py-2 px-4 hover:bg-blue-500 rounded cursor-pointer">
                    <a href="">Home</a>
                </div>
                <div className="py-2 px-4 hover:bg-blue-500 rounded cursor-pointer">
                    <a href="">Files</a>
                </div>
                <div className="py-2 px-4 hover:bg-blue-500 rounded cursor-pointer">
                    <a href="">Settings</a>
                </div>
                <div className="py-2 px-4 hover:bg-blue-500 rounded cursor-pointer">
                    <a href="">Help</a>
                </div>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
    )
}
