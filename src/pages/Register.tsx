import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"; // Fixed import path

function Register() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const checkbox = formData.get("checkbox") === "on";
        if (!checkbox) {
            alert("Please check the checkbox.");
            return;
        }
    
        const email = formData.get("email") as string | null;
        const password = formData.get("password") as string | null; // Fixed name to "password"
    
        if (!email || !password) {
            alert("Email and password are required.");
            return;
        }
    
        console.log({ email, password, checkbox });
    
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed up successfully
                const user = userCredential.user;
                console.log("User created:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error:", errorCode, errorMessage);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Register now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="email" // Corrected autocomplete
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password" // Corrected name to lowercase
                                placeholder="Password"
                                autoComplete="current-password" // Corrected autocomplete
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                Already have an account?{" "}
                                <Link className="underline font-semibold" to={"/login"}>
                                    Login
                                </Link>
                            </label>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-3">
                                    <input name="checkbox" type="checkbox" className="checkbox" />
                                    <span className="label-text">Do you agree with our privacy policy?</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
