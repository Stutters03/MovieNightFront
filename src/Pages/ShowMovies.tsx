import React, { useEffect, useState } from 'react'
import type { MoviesType } from '../Components/interface'
import ShowMovie from '../Components/ShowMovie'
import { Link } from 'react-router'

const ShowMovies = () => {

  // declare state variable to store the array of customers
  const [allMovies, setAllMovies] = useState<MoviesType[] | undefined>()
  // declare state variable to store the array of customers based on user input
  const [filteredMovies, setFilteredMovies] = useState<MoviesType[] | undefined>()
  // declare state variable to track the page number. Default value is set to 1
  const [pageNum, setPageNum] = useState<number>(1)

  // function to fetch customer data by the specified page number
  const fetchMovie = (pgNum: number) => {
    // construct the URL and header for fetching the data from the API (backend)
    const getMovieURL = `http://localhost:3000/movie/p${pgNum}`
    const getMovieReq = new Request(getMovieURL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    // fetch the movie data
    fetch(getMovieReq)
      .then((res) => res.json())
      .then((data) => {
        // store the retrieved data into the state variables
        setAllMovies(data)
        setFilteredMovies(data)
      })
  }
  // use effect is used to allow React to fetch data from an external source
  useEffect(() => {
    fetchMovie(pageNum)
  }, [pageNum]); // the square brackets is for dependecies of the useEffect() method
  // and it will automatically re-render the useEffect whenever the dependcy changes


  const handlePageNext = () => {
    setPageNum(pg => pg + 1)
  }
  const handlePagePrev = () => {
    setPageNum(pg => pg - 1 <= 0 ? 1 : pg - 1)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    setFilteredMovies(
      // use the array filter function to create a new array containing only matching elements
      allMovies?.filter(movie => {
        // truthy condition for adding elements to the new array
        if (movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
          return movie
      })
    )
  }

  // JSX components to be rendered
  return (
    // fragment to hold JSX elements because a component can only render a single JSX element
    <>
      <div className=" text-2xl"> Movies List</div>
      <div className="flex justify-end px-19 w-full">
        <h3 className="text-2xl p-2">Search</h3>
        {/* trigger the handleSearch function every time a change event is detected on the input element */}
        <input onChange={handleSearch} className="border m-2 p-1 w-50" type="text" id="search" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* check if the filteredCustomers state variable is null or has zero indexes */}
        {filteredMovies && filteredMovies.length > 0 ? (
          // the array method map creates a new array by executing a specified transformation function
          // Here the usage is to convert the data in each index into a JSX element
          filteredMovies.map((movies: MoviesType) => {
            // Since each element has a consistent look, we use a component
            // a unique key must be specified for each copy and each index is passed to it
            return (
              <Link to={"/show/" + movies.title} key={movies._id} >
                <ShowMovie movie= {movies} mode={false} />
              </Link>
            )
          })
        ) : (
          // else component for the ternary operator
          <p>No Movies Found.</p>
        )}
      </div>
      <div className="flex justify-around mt-3">
        <div className="border rounded p-2 w-24 cursor-pointer justify-center flex hover:bg-slate-300" onClick={handlePagePrev}>Prev</div>
        <div className="border rounded p-2 w-24 cursor-pointer justify-center flex hover:bg-slate-300" onClick={handlePageNext}>Next</div>
      </div>
    </>
  )
}


export default ShowMovies