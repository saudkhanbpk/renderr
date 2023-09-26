import React from "react";
import logo from '../../logo.png'
import './Header.css'
const Header=()=> {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
      <a className="navbar-brand" href="#">
      <img src={logo}alt="Logo" /> {/* Replace with your logo */}
      </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="nev-pages">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
            Find Telent 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Inspiration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Learn Design
            </a>
          </li>
          
          
        </ul>
        </div>
      <div className="collapse navbar-collapse search_btnnnn" id="navbarSupportedContent">
        <div className="search_bar">
        
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
        </form>
        </div>
        <div className="btn_section">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary">Primary</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
