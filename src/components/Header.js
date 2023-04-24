import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { AiOutlineUser } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const menuItems = (
    <>
      <li className="md:mx-2 my-2 ">
        <NavLink to="/add-item">Add Items</NavLink>
      </li>
      <li className="md:mx-2 my-2">
        <NavLink to="/manage-items">Manage Items</NavLink>
      </li>
      <li className="md:mx-2 my-2">
        <NavLink to="/items">Items</NavLink>
      </li>
      {user ? (
        <>
          <li className="md:mx-2 my-2">
            <span className="">
              {user?.displayName ? (
                <span className="border border-primary p-2 rounded-lg">
                  {user?.displayName?.slice(0, 2)}
                </span>
              ) : (
                <AiOutlineUser />
              )}
            </span>
            
          </li>
          <li>
            <label onClick={signOut} className="text-secondary font-bold">
              Logout
            </label>
          </li>
        </>
      ) : (
        <li className="md:mx-2 my-2">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-base-300 text-primary">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            Reminder App
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
