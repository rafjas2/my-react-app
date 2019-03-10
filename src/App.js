import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import Search from "./Search";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <header id="nav">
          <h1>PixFinder</h1>
        </header>
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
