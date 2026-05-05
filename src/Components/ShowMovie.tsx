
import { format } from 'date-and-time'
import type { MoviesType } from './interface'
import { Link } from 'react-router'




const ShowMovie = ({ movie, mode }: { movie: MoviesType, mode: boolean }) => {
    return (
        <div key={movie._id} className={mode ? "my-3 pl-9 p-3 border w-1/3" : "my-1 pl-9 p-3 border-2 w-75"}>
            {/* mode && will render the elements on the right, only if mode is true */}
            {mode && <div>Type: {movie.type}</div>}
            { <div>Title: {movie.title}</div> }
            {mode && <div>Genres: {movie.genres}</div>}
            {mode && <div>Poster:<p>{movie.poster}</p>
            </div>}
            <div>Release Year: {movie.year}</div>
            {mode && <div className="py-3 flex flex-wrap">Length:
                {movie.runtime.map((runtime: number) => {
                    
                    return (
                        <Link className="m-2 p-2 border w-18" to={`/time/${runtime}`} key={runtime}>{runtime}</Link>
                    )
                })}
            </div>}.
        </div>
    )
}



export default ShowMovie