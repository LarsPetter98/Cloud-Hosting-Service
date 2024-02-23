import Hero from "./main-components/hero.jsx";
import Features from "./main-components/features.jsx"

export default function Main () {
    return (
        <main className="main">
            <div className="hero flex justify-center py-16 flex-col items-center">
                <Hero></Hero>
                <Features></Features>
            </div>
        </main>
    )
};