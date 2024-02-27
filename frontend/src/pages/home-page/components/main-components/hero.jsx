import {Outlet, Link} from "react-router-dom";

export default function Hero () {

    return (
        <>
        <section className="text-center">
            <div className="text-4xl">Welcome to Cloud Storage</div>
            <div className="py-3">Store, share, and access your files from anywhere.</div>
            <div>
                <button className="bg-green-500 text-white text-sm py-2 px-4 rounded mt-1 hover:opacity-70 w-2/6 text-center"><Link to="/login">Login</Link></button>
                <span className="px-2"></span>
                <button className="bg-green-500 text-white text-sm py-2 px-4 rounded mt-1 hover:opacity-70 w-2/6 text-center"><Link to="/signup">Signup</Link></button>
            </div>
        </section>
        <Outlet />
        </>
    )
};