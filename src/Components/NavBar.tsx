
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <>
            <div>Navigation Bar</div>
            <Link className="mx-3 underline" to="/">Home</Link>
            <Link className="mx-3 underline" to="/show">Show Movies</Link>
            <Link className="mx-3 underline" to="/show/series">Show Series</Link>
             <Link className="mx-3 underline" to="/show/faves">Show Favoraites</Link>
             <Link className="mx-3 underline" to="/show/one">Show One Movie</Link>
        </>
    )
}

export default NavBar