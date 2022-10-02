import React, { Component } from 'react'
import { FaRegCreditCard,FaUserAlt } from "react-icons/fa";
import { RiLiveLine,RiRunFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

export default class Navbar2 extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="/" style={{backgroundColor: "black",color:"white",width: "33px",borderRadius: "35px",textAlign:"center" }}>HF</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft: "40%"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item me-1">
                <RiLiveLine style={{marginLeft: "20px"}}/>
                <a className="nav-link active" aria-current="page" href="/">LIVE</a>
            </li>
            <li className="nav-item me-1">
                <FaRegCreditCard style={{marginLeft: "53px"}}/>
                <a className="nav-link active" aria-current="page" href="/">MEMBERSHIPS</a>
            </li>
            <li className="nav-item me-1">
                <RiRunFill style={{marginLeft: "20px"}}/>
                <a className="nav-link active" aria-current="page" href="/">PLANS</a>
            </li>
            <li className="nav-item me-1">
                <CgMenuGridR style={{marginLeft: "20px"}}/>
                <a className="nav-link active" aria-current="page" href="/">MORE</a>
            </li>

            </ul>
            </div>
        </div>
          <div class="d-grid gap-1 d-md-flex justify-content-md-end" style={{width: "18rem"}}>
            <FaUserAlt style={{width: "3rem",height:"18px" , margin:"10px -25px"}}/>
            <a className="nav-link active" href="/" tabIndex="-1" aria-disabled="true" style={{color: "black"}}>Login</a>
          
          </div>
        </nav>
      </div>
    )
  }
}
