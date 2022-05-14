import axios from "axios";
import React, { Component } from "react";
class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=87de158088758a08dee0cd1cde059be7"
      )
      .then((res) => {
        this.setState({
          trending: res.data.results,
        });
      });
  }

  render() {
    return (
      <div className="trending">
        <h1>Trending</h1>

        <div className="cards">
          {this.state.trending.map((ele) => {
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
export default Trending;
