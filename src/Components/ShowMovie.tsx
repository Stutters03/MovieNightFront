
import { format } from 'date-and-time'
import type { MoviesType } from './interface'
import { Link } from 'react-router'




const ShowMovie = ({ movie, mode }: { movie: MoviesType, mode: boolean }) => {

    
    const handleAddFave = () => { 

        // console.log("Add To Faves", transData.account_id)
        const addFaveReq = new Request(
            `http://localhost:3000/faves/add/${movie._id}`,
            {
                method: 'POST'
            }
       )
        fetch(addFaveReq)
        .then(res => res.json())
        .then(msg =>{
            console.log(msg)
        })

    }

    
    return (
        <div key={movie._id} className={mode ? "my-3 pl-9 p-3 border w-1/3" : "my-1 pl-9 p-3 border-2 w-75"}>
            {/* mode && will render the elements on the right, only if mode is true */}
            { <div>Type: {movie.type}</div>}
            { <div>Title: {movie.title}</div> }
            {mode && <div>Genres: {movie.genres.join(", ")}</div>}
            { mode && <div>Poster:<img src={movie.poster} alt="" />
            </div>}
            <div>Release Year: {movie.year}</div>
            {mode && <div className="py-3 flex flex-wrap">Length:
               
            </div>}

            <button
                onClick={handleAddFave}
                className="border p-2 mt-3"
            >
                Add To Faves
            </button>

        </div>
    )}

 


export default ShowMovie