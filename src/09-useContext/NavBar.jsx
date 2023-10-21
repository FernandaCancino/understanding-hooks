import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <nav className="navbar bg-dark border-bottom border-body">
    <nav className="navbar navbar-expand-sm bg-dark rounded-3">
      <div className="container-fluid">
        <Link className='navbar-brand text-light' to='/'>useContext</Link>
        {/* <a className="navbar-brand" href="#">Navbar</a> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({isActive}) => `nav-link ${isActive ? 'text-light' : 'text-light-emphasis'}`}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) => `nav-link ${isActive ? 'text-light' : 'text-light-emphasis'}`}
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={({isActive}) => `nav-link ${isActive ? 'text-light' : 'text-light-emphasis'}`}
              to='/login'
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
