import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="nav">

<h2>Moment Maker</h2>

<div>

<Link to="/">Home</Link>

<Link to="/events">Events</Link>

<Link to="/booking">Booking</Link>

<Link to="/gallery">Gallery</Link>

<Link to="/about">About</Link>

<Link to="/contact">Contact</Link>

<Link to="/login">Login</Link>

</div>

</nav>

)

}

export default Navbar