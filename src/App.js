import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import Footer from "./Footer";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <div id="nav">
          <h1>PixFinder</h1>
        </div>
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
