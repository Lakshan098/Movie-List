import MovieCard from '../components/MovieCard';

function Home() {

    const movies = [
        {id: 1, title: "John Wick", release_date: "2023" },
        {id: 2, title: "Harry Potter", release_date: "2012" },
        {id: 3, title: "Extraction", release_date: "2019" },
    ]

    const handleSearch = () => {
        alert("Search");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input
                type='text'
                placeholder='Search movies...'
                className='search-input'
                />
                <button type='submit' className='search-button'>Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home