import React, { Component } from "react";
import "./App.css";
import "./reset.css";

class Modal extends Component {
  render() {
    let modal = this.newModal();

    if (!this.props.isOpen) {
      modal = null;
    }

    return <div>{modal}</div>;
  }

  newModal() {
    return (
      <section className="bg-modal">
        <div className="modal-box">
          <span className="close" onClick={this.props.onClose}>
            +
          </span>
          <img className="modal-img" src={Image.Image} alt={Image.tags} />
          <div className="user-data">
            <img className="user-img" alt={Image.user} />
            <h1>Restretto</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Modal;