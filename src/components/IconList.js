import React, { Component } from 'react'
// import { CgGym, MdPets, TbToolsKitchen2,FaRegUserCircle,FaMusic } from "@react-icons/all-files/fa/FaBeer";

import { CgGym } from "react-icons/cg";
import { MdPets } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaRegUserCircle,FaMusic } from "react-icons/fa";


export default class IconList extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand mb-0" href="/"> </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item">
                    <FaRegUserCircle/>
                <a className="nav-link active" aria-current="page" href="/">Clothing & Shoes</a>
                </li>

                <li className="nav-item">
                <FaRegUserCircle/>
                <a className="nav-link active" aria-current="page" href="/">Entertainment</a>
                </li>

                <li className="nav-item">
                <FaMusic/>
                <a className="nav-link active" aria-current="page" href="/">Music</a>
                </li>

                <li className="nav-item">
                    <CgGym/>
                <a className="nav-link active" aria-current="page" href="/">Sport & Lifestyle</a>
                </li>

                <li className="nav-item">
                    <MdPets/>
                <a className="nav-link active" aria-current="page" href="/">Pets</a>
                </li>

                <li className="nav-item">
                    <TbToolsKitchen2/>
                <a className="nav-link active" aria-current="page" href="/">Kitchen Accessories</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Travel Equipment</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Growing & Garden</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Electrical Tools</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Mother Care</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Toys & Entertainment</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Vintage</a>
                </li>
            </ul>
            </div>
        </div>
          
        </nav>
      </div>
    )
  }
}
