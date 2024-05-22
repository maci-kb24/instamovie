/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'


const FeaturedMovies = ({featuredMovies}) => {
  return (
    <div className="featured-movies">
    <div>
        <h1 className="text-3xl font-bold">Watched</h1>
        <p className="pt-4 pb-10">View watched movies</p>
    </div>
    {featuredMovies?.map(watch => (
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
  )
}

FeaturedMovies.proptypes = {
  featuredMovies: PropTypes.array,
}

export default FeaturedMovies