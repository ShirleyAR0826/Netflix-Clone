import React from 'react';
import axios from './axios';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState(initialState)

    useEffect(() => {
        async function fetchData = () => {
            await
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}   
                    className={`row__poster && {isLargeRow}`}
                    src={`${baseUrl}${movie.poster_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
