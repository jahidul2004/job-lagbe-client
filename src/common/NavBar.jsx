import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import logo from "../assets/logo.png";
import profile from "../assets/man.png";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const links = (
        <>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Find a Job</Link>
            </li>
            <li>
                <Link>Post a Job</Link>
            </li>

            {user ? (
                <li>
                    <button
                        onClick={handleSignOut}
                        className="md:hidden btn btn-error text-white"
                    >
                        Sign Out
                    </button>
                </li>
            ) : (
                <li className="md:hidden">
                    <Link
                        to={"/register"}
                        className="btn bg-[#008854] text-white font-bold"
                    >
                        Register
                    </Link>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[#008854] text-2xl font-bold">
                    <img className="w-[40px] h-[40px]" src={logo} alt="" />
                    Job Lagbe?
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            {user ? (
                <div className="navbar-end">
                    <div
                        title={user.displayName}
                        className="border mr-3 border-[#008854] p-1 w-[50px] h-[50px] rounded-full"
                    >
                        <img
                            className="rounded-full"
                            src={user?.photoURL ?? profile}
                        />
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="hidden md:block btn btn-error text-white"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="navbar-end gap-8">
                    <Link
                        to={"/register"}
                        className="hidden md:block hover:text-[#008854]"
                    >
                        Register
                    </Link>
                    <Link
                        to={"/signIn"}
                        className="btn bg-[#008854] text-white border-none font-bold"
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
