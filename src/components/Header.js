import { Link } from "react-router-dom";

const Header = (props) => {

    const [input, setInput] = useState("") 

    const fetchData = (value) => {
      fetch('http://127.0.0.1:3000/posts/').then((response) => response.json())
        .then((json) => {
          console.log(json)
        })
    

  return (
    <div className="app-header">
      <Link className="hero" id="title" to="/"><h1>Habitude</h1></Link>
      <nav class="nav d-flex justify-content-around" >
          <a>
            <Link to="/">home</Link>
          </a>
          <a>
            <Link to="/about">about</Link>
          </a>
          <a>
            <Link to="/add">add</Link>
          </a>
          <a>
            <Link to="/contact">contact</Link>
          </a>
          <form class="form-inline">
          <input type="text" placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
          <input type="submit"/>
          </form> 
      </nav>
    </div>
  )
}
}

export default Header