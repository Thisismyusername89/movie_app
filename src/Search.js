import React, { Component } from "react";
import axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_result: [],
      search_name: "",
    };
    this.search_data = this.search_data.bind(this);
  }
  search_data(e) {
    e.preventDefault();

    let to_search = this.state.search_name;
    axios
      .get(
        "https://api.themoviedb.org/3/search/multi?api_key=87de158088758a08dee0cd1cde059be7&language=en-US&query=" +
          to_search +
          "&page=1&include_adult=false"
      )
      .then((res) => {
        console.log(res);

        this.setState({
          search_result: res.data.results,
        });
      });
  }

  render() {
    return (
      <div className="seach_result">
        <h1>search</h1>

        <form method="post">
          <input
            type="text"
            name="nam"
            className="search_input"
            onChange={(e) => {
              this.setState({ search_name: e.target.value });
            }}
          />
          <button
            type="submit"
            className="search_btn"
            onClick={this.search_data}
          >
            search
          </button>
        </form>
        <div className="cards">
          {this.state.search_result.map((ele) => {
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
export default Search;
