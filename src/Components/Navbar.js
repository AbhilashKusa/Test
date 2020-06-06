import React from "react";
import Formvalidation from "./Formvalidation";
import { Link, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";


const Navibar = () => {
  const newHistory = createBrowserHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white " href="#">
          <b>Zetta Hotel</b>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                HOME
                <span className="sr-only"></span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                ROOM
                <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                RESTURANT
                <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                ABOUT US
                <span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navibar;
