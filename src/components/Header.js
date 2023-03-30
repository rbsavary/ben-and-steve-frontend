const Header = (props) => {

  return (
    <div className="app-header">
      <h1><a href="/">Habitude</a></h1>
      <nav>
        <ul className="nav-bar">
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/add">add</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
          <input type="text" placeholder="Search..." />
        </ul>
      </nav>
    </div>
  )
}

export default Header