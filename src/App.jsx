import "./App.css";
import { useState } from "react";

const watchedmovies = [
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

const movies = [
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
  const [watched, setWatched] = useState(watchedmovies);
  const [searchMovies, setSearchMovies] = useState(movies);

  return (
    <div className="App">
      <header className="bg-slate-900 text-white ">
        <div className="navbar  container flex items-center justify-between px-10 py-4 gap-6">
          <div className="logo">
            <p>InstaMovie</p>
          </div>
          <div className="flex-1"> 
            <input type="text" placeholder="Search a Movie" className="input w-full py-2 px-2" />
          </div>
          <div className="menu flex items-center">
            <nav>
              <ul className="flex gap-4">
                <li >Home</li>
                <li>
                  My List{" "}
                  <span className="text-slate-900 inline-block bg-lime-50 border-blue-50 border-solid border-2">
                    0
                  </span>
                </li>
              </ul>
            </nav>
            <div className="pl-4">
              <button className="btn bg-yellow-400 text-black py-2 px-4">
                Sign In
              </button>
            </div>
          </div>
        </div>

      </header>
      <main>
        <div className="movie-box">
          <div>
            <h1>Latest Movies</h1>
          </div>
          <div className="movie-list grid  md:grid-cols-4 grid-cols-[260px_minmax(900px,_1fr)_100px] gap-2">
              {searchMovies?.map(movie => (
              <div className="movie-card w-full" key={movie.id}>
                <img
                  className="movie-img h-56 object-cover w-full"
                  src={movie.imageUrl}
                  alt={movie.id}
                />
                <div className="movie-info">
                  <h1 className="movie-title text-slate-900">{movie.title}</h1>
                  <p>{movie.rating}</p>
                  <p>Released:{movie.year}</p>
                </div>
            </div>
              ))
              }
          </div>
        </div>
        <div className="watched-box">
          <div className="watched-list">
          {watched?.map(watch => (
              <div className="watched-card w-full" key={watch.id}>
                <img
                  className="movie-img h-56 object-cover w-full"
                  src={watch.imageUrl}
                  alt={watch.id}
                />
                <div className="watched-info">
                  <h1 className="watched-title text-slate-900">{watch.title}</h1>
                  <p>{watch.rating}</p>
                  <p>Released:{watch.year}</p>
                  <p>Description: {watch.description}</p>
                </div>
            </div>
              ))
              }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
