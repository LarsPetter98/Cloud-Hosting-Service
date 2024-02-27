import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/homePage.jsx"
import LoginPage from "./pages/login-page/loginPage.jsx";
import SignupPage from "./pages/signup-page/signupPage.jsx"

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);