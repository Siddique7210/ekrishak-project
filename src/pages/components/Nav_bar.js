import React from 'react'
import { Link } from 'react-router-dom'

function Nav_bar() {
  return (
    <>
    <div>
      <nav className="navbar  bg-warning navbar-expand-lg"  data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Team Work</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/about"}>About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-disabled="true">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success active" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Nav_bar
