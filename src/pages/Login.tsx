import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useRef } from "react";

function Login() {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();

    // Extract email and password from form
    const email = (e.currentTarget.email as HTMLInputElement).value;
    const password = (e.currentTarget.password as HTMLInputElement).value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        if (user.emailVerified) {
          console.log(user);
        }
        form.reset();
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const forgetRef = useRef<HTMLInputElement>(null);
  const handleForget = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
   

     // Access the input value using the ref
     const email = forgetRef.current?.value;

   if (email) {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Password reset email sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      console.log("Email field is empty");
    }
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
                ref={forgetRef}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                aria-label="Email"
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
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                aria-label="Password"
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
            <button type="button" onClick={handleForget} className="underline font-bold">
              Forget password
            </button>
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
