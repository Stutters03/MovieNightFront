
import './App.css'
import NavBar from './Components/NavBar'
import ShowMovies from './Pages/ShowMovies'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import { Route, Routes } from 'react-router'
import SeriesShow from './Pages/SeriesShow'
import ShowOneMovie from './Pages/ShowOneMovie'
import ShowFaves from './Pages/ShowFaves'

function App() {

  return (
    <>
      <div className="bg-slate-50 h-dvh mx-9">
        <NavBar /> {/* reusuable navbar component */}
        <Routes>
          {/* Define the URL routes and the pages they will load */}
          {/* Routes are processed in the order they  are listed */}

          {/* index is a child route that renders at the exact URL of its parent, in this case path="/" */}
          <Route index element={<HomePage />} />
          <Route path="/show" element={<ShowMovies />} />
         <Route path="/show/series" element={<SeriesShow />} />
          <Route path="/show/one" element={<ShowOneMovie />} />
          <Route path="/show/faves" element={<ShowFaves />} />

          {/* The asterisk matches all routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App