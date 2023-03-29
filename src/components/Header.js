const Header = (props) => {
 
    return (
        <>
          <div>
            <h1>Habitude</h1>
          </div>
          <div>
            <nav>
              <ul>
                  <a href="#">about</a>
                  <a href="#">articles</a>
                  <a href="#">add</a>
                  <a href="#">contact</a>
                <input type="text" placeholder="Search..."/>
              </ul>
            </nav>
          </div>
        </>
    )
}

export default Header