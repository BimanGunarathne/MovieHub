import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg';
// 84a77a1d

const API_URL = 'http://www.omdbapi.com?apikey=84a77a1d';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchterm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`)
        const data = await responce.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return (
        <div className="app">
            <h1>Movie Hub</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchterm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchterm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
            }


        </div>
    );
}
export default App;