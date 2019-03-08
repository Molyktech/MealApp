import React, { Component } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    );
  }
}
