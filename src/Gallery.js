import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import "./Search.js";

class Gallery extends Component {
  render() {
    return (
      <section>
        <div id="bg-img" />
        <div className="gallery">
          <form className="gallery-item">
            <img className="gallery-img" src="#" alt="img" />
          </form>
        </div>
      </section>
    );
  }
}

export default Gallery;
