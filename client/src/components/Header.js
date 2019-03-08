import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    // let user = Parse.User.current().get("name");
    return (
      <header className="main-header">
        <Link to="/" className="logo">
          <span className="logo-mini">
            <b>MEAL</b>
          </span>
          <span className="logo-lg">
            <img src="" alt="logo" className="mb-2" />
          </span>
        </Link>
        <nav className="navbar navbar-static-top">
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="main-head-title" />
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav  pull-right ">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell" />
                  {/* <span>{`Hello ${user}`}</span> */}
                  <span>Hello Admin</span>
                  {/* <span className="label label-success">4</span> */}
                </a>
                <ul className="dropdown-menu">
                  {/* <li className="header">You have 4 messages</li> */}
                  <li className="menu">
                    <a>Logout</a>
                  </li>
                  <li className="divider" />
                  <Link to="/recoverpassword">
                    <li className="menu">Reset Password</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.defaultProps = {
  title: " "
};
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default withRouter(Header);
