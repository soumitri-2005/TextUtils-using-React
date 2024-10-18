// making a component
// In React, "props" (short for properties) are how you pass data and functions from a parent component to a child component. They are read-only inputs that a child component uses, but cannot change. Props allow for dynamic data to flow through your app and enable components to be reusable and more modular.// so here i made a property called Navbar(as file name) and i write the html code and call it in App.js
// and it is a reactFunctionalComponent
import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

// here i am passig a componet parameter(props)
export default function Navbar(props) {
  
  return (
    // so here i have written this in between `...` bcz i want access the JS from App.js
    // and ${...} bcz it is used for text
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* here i called my props */}
        <a className="navbar-brand" href="#">{props.title}</a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="#">Home</a>
              {/* <Link className="nav-a active" aria-current="page" to="/">Home</Link> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" to="/about">About</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark": "light"}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// proptypes
// synatx,
// so this is saying the props that i made (title, anouttext...) should be in string type
// to identify user's mistake
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext: PropTypes.string,
}