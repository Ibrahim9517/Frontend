import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='position-sticky top-0'>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white ">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" aria-current="page" to="#">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="musicplay">
              MusicPlay
            </NavLink>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Header