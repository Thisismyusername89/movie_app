import axios from "axios";
import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search_name: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=87de158088758a08dee0cd1cde059be7&language=en-US&page=1"
      )
      .then((res) => {
        this.setState({
          movies: res.data.results,
        });
      });
  }
  handleSelect(e) {
    e.preventDefault();
    let selected = e.target.id;

    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=87de158088758a08dee0cd1cde059be7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
          selected +
          "&with_watch_monetization_types=flatrate"
      )
      .then((res) => {
        this.setState({
          movies: res.data.results,
        });
      });
  }

  render() {
    return (
      <div className="movies">
        <h1>Movies</h1>
        <form className="tags">
          <input
            type="button"
            id="28"
            value="action"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="12"
            value="adventure"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="16"
            value="animation"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="35"
            value="comedy"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="80"
            value="crime"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="18"
            value="drama"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="10751"
            value="family"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="14"
            value="fantasy"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="9648"
            value="mystery"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="10749"
            value="romance"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="878"
            value="sci fi"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="53"
            value="thriller"
            onClick={this.handleSelect}
          />
        </form>
        <br />
        <br />
        <div className="cards">
          {this.state.movies.map((ele) => {
            return (
              <div className="card" key={ele.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}
                  alt={ele.media_type}
                />
                <div>{ele.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Movies;
