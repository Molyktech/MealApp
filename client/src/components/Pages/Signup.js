import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      errors: {}
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  // validate = ({ firstName, lastName }) => {
  //   return {
  //     firstName: !firstName || firstName.trim().length === 0
  //       ? "First Name is required"
  //       : false,
  //     lastName:
  //       !lastName || lastName.trim().length === 0
  //         ? "Last Name is required"
  //         : false
  //    };
  // {errors.firstName &&
  //   <span className="error">{errors.firstName}</span>
  // }
  // };
  formGroupClass = field => {
    let className = "input-field ";
    if (field) {
      className += " has-warning";
    }
    return className;
  };

  validateForm = () => {
    let errors = {};
    if (this.state.firstName === "") {
      errors.firstname = "First Name is required";
    }
    if (this.state.lastName === "") {
      errors.lastname = "Last Name is required";
    }
    if (this.state.password === "") {
      errors.username = "Username is required";
    }
    if (this.state.email === "") {
      errors.email = "Email is required";
    }
    if (this.state.confirmPassword === "") {
      errors.password = "Please retype password";
    }
    this.setState({ errors });
    return errors;
  };

  clearform = () => {
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      errors: {}
    });
  };

  render() {
    let {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      gender
    } = this.state;
    return (
      <div>
        <Navbar />
        <section className="top_banner_bg secondary-bg">
          <div className="container">
            <div className="header-text mt-4">
              <div className="form-wrapper">
                <div className="form-title">
                  <h2>Signup</h2>
                  <div className="row">
                    <div className="col-md-6 buttons">
                      <div className="social-signup-btn">
                        <a className="media-btn btn btn-icon btn-facebook ">
                          <i className="fa fa-facebook" />
                          <span>Facebook</span>
                        </a>
                        <a className="media-btn btn btn-icon btn-twitter ">
                          <i className="fa fa-twitter" />
                          <span>Twitter</span>
                        </a>
                        <a className="media-btn btn btn-icon btn-googleplus ">
                          <i className="fa fa-google-plus" />
                          <span>Google+</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row clearfix">
                        <div className="">
                          <form>
                            <div className="col_half">
                              {/* <div
                                className={this.formGroupClass(
                                  this.state.errors.lastName
                                )}
                              > */}

                              <div className="input-field">
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-user"
                                  />
                                </span>
                                <input
                                  type="text"
                                  name="firstname"
                                  placeholder="First Name"
                                  value={firstname}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            <div className="col_half">
                              {/* <div
                                className={this.formGroupClass(
                                  this.state.errors.lastName
                                )}
                              > */}
                              <div className="input-field">
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-user"
                                  />
                                </span>
                                <input
                                  type="text"
                                  name="lastname"
                                  placeholder="Last Name"
                                  required
                                  value={lastname}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </div>
                            {/* <div className={this.formGroupClass(this.state.errors.lastName)}>> */}
                            <div className="input-field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-envelope"
                                />
                              </span>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div
                              className={this.formGroupClass(
                                this.state.errors.lastName
                              )}
                            >
                              >
                              <span>
                                <i aria-hidden="true" className="fa fa-lock" />
                              </span>
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div
                              className={this.formGroupClass(
                                this.state.errors.lastName
                              )}
                            >
                              >
                              <span>
                                <i aria-hidden="true" className="fa fa-lock" />
                              </span>
                              <input
                                type="password"
                                name="confirm-password"
                                placeholder="Re-type Password"
                                required
                                value={confirmPassword}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="row clearfix" />

                            <div className="input-field select_option">
                              <select
                                name="gender"
                                value={gender}
                                onChange={this.handleChange}
                              >
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                              <div className="select_arrow" />
                            </div>

                            <input
                              className="button"
                              type="submit"
                              value="Register"
                            />
                            <p>
                              Already have an account?
                              <span>
                                <NavLink to="/login"> Click Here</NavLink>
                              </span>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
