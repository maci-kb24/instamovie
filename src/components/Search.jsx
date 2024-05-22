import PropTypes from 'prop-types'

const Search = ({search, setSearch}) => {
    return (
        <div className="flex-1">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search a Movie" className="input w-full py-2 px-2" />
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func
}

export default Search