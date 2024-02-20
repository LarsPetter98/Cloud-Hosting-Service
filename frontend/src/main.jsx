import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";

function RenderPage () {
    return (
        <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </>
    )
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RenderPage />
    </React.StrictMode>,
);

