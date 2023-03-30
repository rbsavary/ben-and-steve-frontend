import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <div className="app-header">
      <Link className="hero" to="/"><h1>Habitude</h1></Link>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/add">add</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <input type="text" placeholder="Search..." />
        </ul>
      </nav>
    </div>
  )
}

export default Header