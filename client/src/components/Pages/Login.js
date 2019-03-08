import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

const initialState = {
  email: "",
  password: "",
  remeberMe: "",
  emailError: "",
  passwordError: ""
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleChange = event => {
    const isCheckbox = event.targer.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  validate = () => {
    let emailError = "";
    let passwordError = "";
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    if (this.state.email.includes("@")) {
      emailError = "Invalid Email, Email should include an @ sign";
    }

    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }
    if (this.state.password.length > 6) {
      passwordError = "Password must be at least 6 characters";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear the form
      this.setState({ initialState });
    } else {
    }
  };
  render() {
    let { email, password, emailError, passwordError } = this.state;
    return (
      <div>
        <div className="form-box">
          <div className="row">
            <div className="col-md-5">
              <div className="left">
                <div className="overlay">
                  <h1>Hello Again.</h1>
                  <div className="social-btns">
                    <p>login with social media</p>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                      Login with Facebook
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" /> Login
                      with Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="right">
                <h5>Login</h5>
                <p>
                  Don't have an account?{" "}
                  <NavLink to="/signup">CreateYour Account</NavLink> it takes
                  less than a minute
                </p>
                <form onSubmit={this.handleSubmit}>
                  <div className="inputs">
                    <label htmlFor="email">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </label>
                    <div className="text-primary text-small">
                      {this.emailError}
                    </div>
                    <br />
                    <label htmlFor="password">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </label>
                    <div className="text-primary text-small">
                      {this.passwordError}
                    </div>
                  </div>

                  <br />
                  <br />

                  <div className="remember-me">
                    <label>
                      <input
                        type="checkbox"
                        name="remeberMe"
                        checked={this.state.rememberMe}
                        onChange={event => this.handleChange}
                      />
                      <span className="text-checkbox">Remember me</span>
                    </label>
                    <p>Forgt password?</p>
                  </div>

                  <br />
                  <button>Login</button>
                </form>
              </div>

              <NavLink to="/">Go Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
