/* eslint-disable react/prop-types */

const TrendingMovies = ({trendingMovies}) => {
  return (
    <div className="trending-movies">
    <div className="pt-12">
        <h1 className="text-3xl font-bold">TrendingMovies</h1>
        <p className="pt-4 pb-10">View trending movies from all movie genres</p>
    </div>
    <div className="movie-list grid  md:grid-cols-4 grid-cols-[260px_minmax(900px,_1fr)_100px] gap-2">
        {trendingMovies?.map(movie => (
            <div className="movie-card w-full" key={movie.id}>
                <img
                    className="movie-img h-56 object-cover w-full"
                    src={movie.imageUrl}
                    alt={movie.id}
                />
                <div className="movie-info">
                    <p> Rating: {movie.rating}</p>
                    <h1 className="movie-title text-slate-900">{movie.title}</h1>
                    <p>Released:{movie.year}</p>
                </div>
            </div>
        ))
        }
    </div>
</div>
  )
}

export default TrendingMovies