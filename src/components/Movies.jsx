/* eslint-disable react/prop-types */

const Movies = ({movies}) => {
    return (
      <div className="trending-movies">
      <div className="pt-12">
          <h1 className="text-3xl font-bold">Searched Movies</h1>
          <p className="pt-4 pb-10">View  movies from all movie genres</p>
      </div>
      <div className="movie-list grid  md:grid-cols-4 grid-cols-[260px_minmax(900px,_1fr)_100px] gap-2">
          {movies?.map((movie,index) => (
              <div className="movie-card w-full" key={index}>
                  <img
                      className="movie-img h-56 object-cover w-full"
                      src={movie.Poster}
                      alt={movie.Title}
                  />
                  <div className="movie-info">
                      <h1 className="movie-title text-slate-900">{movie.Title}</h1>
                      <p>Released:{movie.Year}</p>
                  </div>
              </div>
          ))
          }
      </div>
  </div>
    )
  }
  
  export default Movies