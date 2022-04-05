import { NavLink } from 'react-router-dom'

function Header(){
    return(
      <header>
          <h1>Advice</h1>
          <ul>
              <NavLink to="/">
              <li>Home</li>
              </NavLink>

              <NavLink to="/random">
              <li>Random Advice</li>
              </NavLink>

              <NavLink to="/search">
              <li>Search</li>
              </NavLink>

              <NavLink to="/about">
              <li>About Us</li>
              </NavLink>
          </ul>
      </header>
    )
}

export default Header