import {Outlet, Link} from "react-router-dom";

export default function SignupForm () {
        //Post request at form submit
        const handleSignup = async (event) => {
            const name = document.querySelector(".name").value;
            const email = document.querySelector(".email").value;
            const password = document.querySelector(".password").value;
            event.preventDefault();
            const url = "http://localhost:3000/signup";
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            };
            try {
                const response = await fetch(url, requestOptions);
                if(response.ok) {
                    // Handle successful login
                    console.log("Successful login")
                }
                else {
                    //Handle login failure
                    console.error("Login failed");
                }
            }
            catch (error) {
                console.error("Error during login:", error);
            }
        };
    return (
        <>
        <div className="flex justify-center mt-6">
            <form className="mt-16">
                <div className="text-2xl mb-2">Signup</div>
                <hr className="mb-6" />
                <div>
                    <input className="py-3 pl-2 pr-8 rounded shadow mb-4 name" type="text" placeholder="Enter name"/>
                </div>
                <div>
                    <input className="py-3 pl-2 pr-8 rounded shadow mb-3 email" type="email" placeholder="Enter email"/>
                </div>
                <div>
                    <input className="py-3 pl-2 pr-8 rounded shadow mb-4 password" type="password" placeholder="Enter password"/>
                </div>
                <div>
                    <button className="bg-green-500 text-white text-sm py-2 px-4 rounded mt-1 hover:opacity-70 text-center" onClick={handleSignup}>Continue</button>
                    <span className="text-blue-500 cursor-pointer hover:underline ml-10 text-sm"><Link to="/login">Already a user?</Link></span>
                </div>
            </form>
        </div>
        <Outlet/>
        </>
    )
};