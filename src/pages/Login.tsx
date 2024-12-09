import { Link } from "react-router-dom"; // Corrected import path

function Login() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string | null;
        const password = formData.get("password") as string | null;

        if (!email || !password) {
            alert("Email and password are required.");
            return;
        }

        console.log({ email, password });
        // Add your authentication logic here
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email" // Standardized autocomplete
                                placeholder="Email" // Capitalized placeholder
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
                                name="password" // Lowercased to match conventions
                                placeholder="Password" // Capitalized placeholder
                                autoComplete="current-password" // Standardized autocomplete
                                className="input input-bordered"
                                required
                            />
                            <label className="label gap-3">
                                Don't have an account?{" "}
                                <Link className="underline font-semibold" to={"/register"}>
                                    Register
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
