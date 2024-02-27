import {Outlet, Link} from "react-router-dom";

export default function Header () {
    return (
        <>
        <header className="py-6 bg-green-500 px-4 text-white flex items-center">
            <div className="text-2xl cursor-pointer"><Link to="/Cloud-Hosting-Service/frontend/index.html">Cloud Storage</Link></div>
        </header>
        <Outlet/>
        </>
    )
};