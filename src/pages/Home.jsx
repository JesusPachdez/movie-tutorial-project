import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "Jhone Wick",
      release_date: "2014",
    },
    {
      id: 2,
      title: "spider man no way home",
      release_date: "2021",
    },
    {
      id: 3,
      title: "avengers: endgame",
      release_date: "2019",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
