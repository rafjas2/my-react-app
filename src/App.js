import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import heroku from "./heroku2.svg";
import github from "./github.svg";
//let headerColor = "red";
class Header extends React.Component {
  render() {
    return (
      <header id="nav">
        <ul>
          <li>
            <h1>PixSher</h1>
          </li>
          <li>
            <input
              id="search-box-one"
              type="search"
              velue=""
              placeholder="Search for Image"
            />
          </li>
        </ul>
      </header>
    );
  }
}

class Section extends React.Component {
  render() {
    return (
      <section id="section">
        <input
          id="search-box-two"
          type="search"
          velue=""
          placeholder="Search for Image"
        />
      </section>
    );
  }
}

class PhotoGallery extends React.Component {
  render() {
    return (
      <section id="photo-gallery">
        <img src="https://images.pexels.com/photos/1524620/pexels-photo-1524620.jpeg?cs=srgb&dl=action-animal-athlete-1524620.jpg&fm=jpg" />
      </section>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="icons">
          <a href="https://github.com/rafjas2/my-react-app">
            <img src={github} alt="Heroku Logo" />
          </a>
        </div>
        <div className="icons">
          <a href="https://raf-react-app.herokuapp.com/">
            <img src={heroku} alt="Heroku Logo" />
          </a>
        </div>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Header />
        <Section />

        <Footer />
      </div>
    );
  }
}

export default App;
