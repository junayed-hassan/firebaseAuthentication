import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <ul className="flex gap-4 ms-7 xl:hidden ">
            <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./login"}>Login</Link>
            </li>
            <li>
              <Link to={"./register"}>Register</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4  ">
            <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./login"}>Login</Link>
            </li>
            <li>
              <Link to={"./register"}>Register</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-10">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}
