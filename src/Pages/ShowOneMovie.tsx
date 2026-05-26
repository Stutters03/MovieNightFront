
import { useNavigate, useParams } from 'react-router'
import type { MoviesType } from '../Components/interface'
import ShowMovie from '../Components/ShowMovie'
import { useEffect, useState } from 'react'

// declare React component
const ShowOneMovie = () => {
  const { uname } = useParams()
  // declare state variable to store the array of customers
  const [movieUno, setMovieUno] = useState<MoviesType | undefined>()

  // function to fetch movie data by the specified page number
  const fetchMovie = (_id: string | undefined) => {
    // construct the URL and header for fetching the data from the API (backend)
    const getMovieURL = `http://localhost:3000/info/${_id}`
    const getMovieReq = new Request(getMovieURL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    // fetch the customer data
    fetch(getMovieReq)
      .then((res) => res.json())
      .then((data) => {
        // store the retrieved data into the state variable
        setMovieUno(data)
      })
  }

  // use effect is used to allow React to fetch data from an external source
  useEffect(() => {
    fetchMovie(uname)
  }, [uname]); // the square brackets is for dependecies of the useEffect() method
  // and it will automatically re-render the useEffect whenever the dependcy changes

  // useNaviagte hook from React router allows the programatic control of navigation
  const navigate = useNavigate()
  const handleGoBack = () => {
    // Go back one page
    navigate(-1)
  }

  // JSX components to be rendered
  return (
    
    // fragment to hold JSX elements because a component can only render a single JSX element
    <>
      {/* <div className=" text-2xl">Customer List</div> */}
      <div className="w-full">
        {/* check if the filteredCustomers state variable is null or has zero indexes */}
        {movieUno && <ShowMovie movie={movieUno} mode={true} />}
      </div>
      <div><button className="p-2 border rounded bg-teal-200 hover:bg-teal-600" onClick={handleGoBack}>Go Back</button></div>
    </>
  )
}

export default ShowOneMovie