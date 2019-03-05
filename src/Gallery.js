import React, { Component } from "react";
import "./App.css";
import "./reset.css";

class Gallery extends Component {
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
      </section>
    );
  }
}

export default Gallery;
