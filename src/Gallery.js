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

  //   showImg = () => {
  //     let imgSrc = document.querySelector(".gallery-img").getAttribute("src");
  //     let modalSrc = document.querySelector(".modal-img").src;
  //     modalSrc.src = imgSrc.src;
  //   };

  render() {
    const { images } = this.props;

    return (
      <section>
        <div id="bg-img">
          <h2>Stunning Images</h2>
          <h3>Photos shared by our generous community</h3>
        </div>

        <div className="gallery">
          <figure className="gallery-item" onClick={this.showImg}>
            {images
              ? images.map(image => {
                  return (
                    <img
                      onClick={this.showModal}
                      className="gallery-img"
                      src={image.image}
                      key={image.id}
                      alt={image.tags}
                    />
                  );
                })
              : ""}
          </figure>
        </div>
        <Modal isOpen={this.state.isOpen} onClose={this.hideModal} />
      </section>
    );
  }
}

export default Gallery;
