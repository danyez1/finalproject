import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from '../../img/logo.png';

import { getAuth, signOut } from "firebase/auth";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory()
  const logOut = () => {
    signOut(getAuth());
  };
  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="nav-logo">
          <img src={logo}/>
        </div>
        <div className="nav-menu">
      {store.user ? (
        <div className="container-fluid">
          <button
            className="btn btn-secondary"
            onClick={() => {
              actions.logOut();
              logOut();
            }}
          >
            Log Out
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  to="/contactus"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Contact us
                </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Recipes by Category
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <button
            className="btn btn-secondary"
            onClick={() => {
              history.push('/')
            }}
          >
            Sign Up
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              history.push('/login')
            }}
          >
            Log In
          </button>
        </>
      )}
      </div>
      </div>  
    </nav>
  );
};