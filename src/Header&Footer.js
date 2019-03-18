import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import heroku from "./heroku2.svg";
import github from "./github.svg";

class HeaderAndFooter extends Component {
  render() {
    return (
      <div>
        <header id="nav">
          <h1>PixFinder</h1>
        </header>
        <footer id="footer">
          <div className="icons">
            <a href="https://github.com/rafjas2/my-react-app">
              <img src={github} alt="GitHub Logo" />
            </a>
          </div>
          <div className="icons">
            <a href="https://raf-react-app.herokuapp.com/">
              <img src={heroku} alt="Heroku Logo" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default HeaderAndFooter;
