import Hero from "./main-components/hero.jsx";
import Features from "./main-components/features.jsx"

export default function Main ({ onLogin }) {
    return (
        <main className="main">
            <div className="hero flex justify-center py-16 flex-col items-center">
                <Hero onLogin={onLogin}></Hero>
                <Features></Features>
            </div>
        </main>
    )
};