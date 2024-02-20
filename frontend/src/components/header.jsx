import React, {useState} from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header bg-green-500 text-white">
            <div className="container mx-auto px-4 py-4 lg:py-8 flex lg:flex-row justify-between items-center">
                <h1 className="header-title text-2xl lg:text-3xl ml-4 lg:ml-0">Cloud Storage</h1>
                <nav className="nav mt-4 lg:mt-0">
                    <input type="checkbox" className="hidden" id="menu-toggle" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <div className={`lg:hidden ${menuOpen ? '' : 'hidden'}`} id="mobile-menu">
                        <div className="menu bg-green-500 text-white">
                            <a href="#" className="block text-lg lg:text-xl text-white my-2">Home</a>
                            <a href="#" className="block text-lg lg:text-xl text-white my-2">Files</a>
                            <a href="#" className="block text-lg lg:text-xl text-white my-2">Settings</a>
                            <a href="#" className="block text-lg lg:text-xl text-white my-2">Help</a>
                        </div>
                    </div>
                    <div className={`hidden lg:flex lg:items-center ${menuOpen ? '': 'hidden'}`}>
                        <a href="#" className="nav-link active text-lg lg:text-xl text-white mr-4">Home</a>
                        <a href="#" className="nav-link text-lg lg:text-xl text-white mr-4">Files</a>
                        <a href="#" className="nav-link text-lg lg:text-xl text-white mr-4">Settings</a>
                        <a href="#" className="nav-link text-lg lg:text-xl text-white">Help</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
