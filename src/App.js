import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Trending from "./Trending";
import Movies from "./Movies";
import Tv_Series from "./Tv_Series";
import Search from "./Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/trending" exact element={<Trending />} />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/tv_series" exact element={<Tv_Series />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
      <ul className="navigation">
        <li>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/trending"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Trending
          </Link>
        </li>

        <li>
          <Link
            to={"/movies"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Movies
          </Link>
        </li>

        <li>
          <Link
            to={"/tv_series"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Tv Series
          </Link>
        </li>

        <li>
          <Link
            to={"/search"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Search
          </Link>
        </li>
      </ul>
    </Router>
  );
}

export default App;
