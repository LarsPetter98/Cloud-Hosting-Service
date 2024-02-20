import Hero from "./main-components/hero.jsx";
import Features from "./main-components/features.jsx"

export default function Main () {
    return (
        <main className="main">
            <div className="container mx-auto px-4 py-5">
                <Hero></Hero>
                <Features></Features>
            </div>
        </main>
    )
};