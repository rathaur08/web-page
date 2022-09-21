import React, { Component } from 'react'
import { FaRegUserCircle,FaStripeS } from "react-icons/fa";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="/">
            <FaStripeS style={{backgroundColor: "blue",color:"white",width: "2rem",height: "2rem"}}/> ShopDigi
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{margin: "0 0 0 239px"}}>Register</a>
                </li>
            </ul>

            <form className="d-flex">
            
            
                <input className="form-control me-1 rounded-pill" type="search" placeholder="Search" style={{width: "25rem", padding: "6px"}}  aria-label="Search Item"/>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" href="/" tabIndex="-1" aria-disabled="true">Consumer Electronics</a>
                </li>
            </ul>
            </div>
        </div>
          <div class="d-grid gap-1 d-md-flex justify-content-md-end" style={{width: "18rem"}}>
            <button class="btn btn-light me-md-2" type="button" style={{border: "1px solid"}}>Sign in</button>
            <button class="btn btn-light" type="button" style={{border: "1px solid"}}>My cart</button>
            <FaRegUserCircle style={{width: "3rem",height:"39px"}}/>
          
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar