import React from 'react'

export default function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="#">
            ChatApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav  ms-3">
              <li className="nav-item ms-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#">
                  LogIn
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#">
                  SignUp
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
