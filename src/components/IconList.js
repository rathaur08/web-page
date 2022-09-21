import React, { Component } from 'react'
// import { CgGym, MdPets, TbToolsKitchen2,FaRegUserCircle,FaMusic } from "@react-icons/all-files/fa/FaBeer";

import { CgGym, CgShoppingBag } from "react-icons/cg";
import { MdPets,MdTravelExplore,MdLocalMovies } from "react-icons/md";
import { TbToolsKitchen2,TbGrowth,TbBabyCarriage } from "react-icons/tb";
import { FaMusic,FaFan } from "react-icons/fa";
import { GiElectric,GiCrystalShine } from "react-icons/gi";


export default class IconList extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
            <a className="navbar-brand mb-0" href="/"> </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item me-1">
                    <CgShoppingBag style={{marginLeft: "66px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Clothing & Shoes</a>
                </li>

                <li className="nav-item me-1">
                <MdLocalMovies style={{marginLeft: "52px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Entertainment</a>
                </li>

                <li className="nav-item me-1">
                <FaMusic style={{marginLeft: "20px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Music</a>
                </li>

                <li className="nav-item me-1">
                    <CgGym style={{marginLeft: "66px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Sport & Lifestyle</a>
                </li>

                <li className="nav-item me-1">
                    <MdPets style={{marginLeft: "15px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Pets</a>
                </li>

                <li className="nav-item me-1">
                    <TbToolsKitchen2 style={{marginLeft: "66px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Kitchen Accessories</a>
                </li>

                <li className="nav-item me-1">
                    <MdTravelExplore style={{marginLeft: "58px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Travel Equipment</a>
                </li>

                <li className="nav-item me-1">
                    <TbGrowth style={{marginLeft: "66px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Growing & Garden</a>
                </li>

                <li className="nav-item me-1">
                    <GiElectric style={{marginLeft: "50px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Electrical Tools</a>
                </li>

                <li className="nav-item me-1">
                    <TbBabyCarriage style={{marginLeft: "45px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Mother Care</a>
                </li>

                <li className="nav-item me-1">
                    <FaFan style={{marginLeft: "69px"}}/>
                <a className="nav-link active" aria-current="page" href="/">Toys & Entertainment</a>
                </li>

                <li className="nav-item me-1">
                    <GiCrystalShine style={{marginLeft: "25px"}}/>
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
