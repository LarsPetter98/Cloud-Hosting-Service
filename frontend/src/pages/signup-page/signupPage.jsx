import React from "react";
import Header from "../login-page/components/header.jsx"
import Footer from "../home-page/components/footer.jsx";
import SignupForm from "./components/signupForm.jsx";

export default function SignupPage () {
    return (
        <>
        <Header></Header>
        <SignupForm></SignupForm>
        <Footer></Footer>
        </>
    )
};

