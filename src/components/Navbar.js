import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            ShopDigi
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Register</a>
                </li>

            </ul>
            <form className="d-flex">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" href="/" tabIndex="-1" aria-disabled="true">Consumer Electronics</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>


      </div>
    )
  }
}

export default Navbar