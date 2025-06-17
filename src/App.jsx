import "./App.css";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <>
      <MovieCard
        movie={{
          title: "The Dark Knight",
          release_date: "2008",
        }}
      />
      <MovieCard
        movie={{
          title: "spider man no way home",
          release_date: "2021",
        }}
      />
    </>
  );
}
