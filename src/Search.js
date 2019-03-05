import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import "./Gallery.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "",
      perPage: 24,
      apiUrl: "https://pixabay.com/api",
      apiToken: "11779217-a9b30eeba040492648696ebe5",
      images: [],
      img: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchData: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    fetch(
      `${this.state.apiUrl}/?key=${this.state.apiToken}&q=${
        this.state.searchData
      }&image_type=photo&per_page=${this.state.perPage}&safesearch=true`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ images: data.hits, img: data.hits.largeImageURL })
      )
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.images);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="search-box-center"
          name="searchData"
          value={this.state.searchData}
          onChange={this.handleChange}
          placeholder="Search for Image"
        />
      </form>
    );
  }
}

export default Search;
