import axios from "axios";
import React, { Component } from "react";

class Tv_Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tv_Series: [],
      sliceFrom: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=87de158088758a08dee0cd1cde059be7&language=en-US&page=1"
      )
      .then((res) => {
        this.setState({
          Tv_Series: res.data.results,
        });
      });
  }
  handleSelect(e) {
    e.preventDefault();
    let selected = e.target.id;

    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=87de158088758a08dee0cd1cde059be7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
          selected +
          "&with_watch_monetization_types=flatrate"
      )
      .then((res) => {
        this.setState({
          Tv_Series: res.data.results,
        });
      });
  }

  render() {
    return (
      <div className="seach_result">
        <h1>Tv shows</h1>
        <form className="tags">
          <input
            type="button"
            id="10759"
            value="action"
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
            id="10762"
            value="kids"
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
            id="10764"
            value="reality"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="10765"
            value="sci fi"
            onClick={this.handleSelect}
          />
          <input
            type="button"
            id="37"
            value="western"
            onClick={this.handleSelect}
          />
        </form>
        <br />
        <br />
        <div className="cards">
          {this.state.Tv_Series.map((ele) => {
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
export default Tv_Series;
