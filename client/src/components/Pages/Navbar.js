import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
const Navbar = () => {
  return (
    <div>
      {/* Search Form Area  */}
      <div className="search-form d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search-close-btn" id="closeBtn">
                <i className="pe-7s-close-circle" aria-hidden="true" />
              </div>
              <form action="#" method="get">
                <input
                  type="search"
                  name="caviarSearch"
                  id="search"
                  placeholder="Search Your Desire Destinations or Events"
                />
                <input type="submit" className="d-none" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* 
    <!-- ***** Header Area Start ***** --> */}
      <header className="header_area" id="header">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12 h-100">
              <nav className="h-100 navbar navbar-expand-lg">
                <NavLink to="/" className="navbar-brand">
                  MO<span className="text-warning">LYK</span>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#dorneNav"
                  aria-controls="dorneNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa fa-bars" />
                </button>
                {/* <!-- Nav --> */}
                <div className="collapse navbar-collapse" id="dorneNav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <NavLink to="/" className="nav-link">
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        to="/about"
                        className="nav-link"
                        role="button"
                        aria-expanded="false"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        to="/login"
                        className="nav-link "
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contacts" className="nav-link">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  {/* Search btn  */}
                  <div className="search-btn">
                    <a id="search-btn">
                      <i className="fa fa-search" aria-hidden="true" /> Search
                    </a>
                  </div>
                  {/* Signin btn  */}
                  <div className="signin-btn">
                    <NavLink to="/signup">Sign in or Register</NavLink>
                  </div>
                  {/*Reservation btn */}
                  <div className="reservation-btn">
                    <a className="btn outline-btn">Make Reservations</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area */}
    </div>
  );
};

export default Navbar;
