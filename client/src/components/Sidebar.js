// SideBar.js

import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <br />
          <br />

          <ul className="sidebar-menu" data-widget="tree">
            <li className="treeview ">
              <NavLink to="/dashboard" activeclassname="active">
                <i className="fa fa-dashboard" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li className="treeview">
              <NavLink to="/institution" activeclassname="active">
                <i className="fa fa-bank" />
                <span>Institution</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/users" activeClassName="active">
                <i className="fa fa-user" />
                <span>Users</span>
                <span className="pull-right-container" />
              </NavLink>
            </li>

            <li className="treeview">
              <NavLink to="/transactions" activeClassName="active">
                <i className="fa fa-money" />
                <span>Transactions</span>
              </NavLink>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
