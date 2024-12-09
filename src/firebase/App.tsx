import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { auth } from "./Firebase.init";
import { useState } from "react";


function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = (provider: GoogleAuthProvider | GithubAuthProvider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setError(null);
      })
      .catch((err) => setError(err.message));
  };

  const handleLogOut = () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      signOut(auth)
        .then(() => setUser(null))
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <button className="bg-rose-600 py-2 px-3 text-green-100" onClick={handleLogOut}>Log Out</button>
      ) : (
        <>
          <button className="bg-rose-600 py-2 px-3 text-green-100" onClick={() => handleLogin(googleProvider)}>Log in with Google</button>
          <br />
          <br />
          <button className="bg-rose-600 py-2 px-3 text-green-100" onClick={() => handleLogin(githubProvider)}>Log in with GitHub</button>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div style={{ marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Welcome, {user?.displayName || "User"}!</h1>
          <p>Email: {user?.email}</p>
          <img
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            referrerPolicy="no-referrer"
            src={user?.photoURL || ""}
            alt="User"
          />
        </div>
      )}
    </div>
  );
}

export default App;
