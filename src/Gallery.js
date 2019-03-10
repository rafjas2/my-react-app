import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import Modal from "./Modal.js";

class Gallery extends Component {
  state = {
    isOpen: false
  };

  showModal = () => {
    this.setState({ isOpen: true });
  };

  hideModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { images } = this.props;

    return (
      <section>
        <div id="bg-img" />
        <div className="gallery">
          <figure className="gallery-item">
            {images
              ? images.map(image => {
                  return (
                    <img
                      onClick={this.showModal}
                      className="gallery-img"
                      src={image.largeImageURL}
                      key={image.id}
                      alt={image.tags}
                    />
                  );
                })
              : ""}
          </figure>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onClose={this.hideModal}
          imiges={this.props}
        />
      </section>
    );
  }
}

export default Gallery;
