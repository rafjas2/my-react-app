import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import HeaderAndFooter from "./Header&Footer";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Search />
        <HeaderAndFooter />
      </div>
    );
  }
}

export default App;
