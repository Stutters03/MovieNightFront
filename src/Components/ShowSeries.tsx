import type { SeriesType } from './interface'
import { Link } from 'react-router'

const ShowSeries = ({ series, mode }: { series: SeriesType, mode: boolean }) => {


const handleAddFave = () => { 

        // console.log("Add To Faves", transData.account_id)
        const addFaveReq = new Request(
            `http://localhost:3000/faves/add/${series._id}`,
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
        <div key={series._id} className={mode ? "my-3 pl-9 p-3 border w-1/3" : "my-1 pl-9 p-3 border-2 w-75"}>
            {/* mode && will render the elements on the right, only if mode is true */}
            {mode && <div>Type: {series.type}</div>}
            { <div>Title: {series.title}</div> }
            {mode && <div>Genres: {series.genres.join(", ")}</div>}
            {mode && <div>Poster: <img src={series.poster} alt="" />
            </div>}
            <div>Release Year: {series.year}</div>
            {mode && <div className="py-3 flex flex-wrap">Length:
                {/* {series.genre.map((runtime: number) => {
                    
                    return (
                        <Link className="m-2 p-2 border w-18" to={`/time/${runtime}`} key={runtime}>{runtime}</Link>
                    )
                })} */}
            </div>}

         <button
                onClick={handleAddFave}
                className="border p-2 mt-3"
            >
                Add To Faves
            </button>

        </div>

    )
}


export default ShowSeries