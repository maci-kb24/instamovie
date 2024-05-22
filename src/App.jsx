import "./App.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Search from "./components/Search";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import FeaturedMovies from "./components/FeaturedMovies";
import TrendingMovies from "./components/TrendingMovies";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";

const trendingMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 3,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
];

const featuredMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 3,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 5,
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    duration: "2h 16m",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "The Wachowskis",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [trending, setTrending] = useState(trendingMovies);
  // const [featured, setFeatured] = useState(featuredMovies);
  // const query = 'matrix';

  const KEY = "48eb5390";

  useEffect(() => {

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${search}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie not found");
        }

        setMovies(data.Search);
        console.log(data.Search);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [search]);

  return (
    <div className="App">
      <Header>
        <Logo />
        <Search search={search} setSearch={setSearch} />
        <Menu>
          <Navbar />
          <SignIn />
        </Menu>
      </Header>
      <Main>
        {isLoading ? <p>Loading...</p> : <Movies movies={movies} />}
        {error && <p>{error}</p>}
        {!isLoading && !error && <Movies movies={movies} />}
        <TrendingMovies trendingMovies={trendingMovies} />
        <FeaturedMovies featuredMovies={featuredMovies} />
      </Main>
    </div>
  );
}

export default App;
