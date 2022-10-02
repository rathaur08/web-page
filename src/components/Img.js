import React, { Component } from 'react'
import "./Img.css";

import { FaGreaterThan } from "react-icons/fa";

export default class Img extends Component {
  render() {
    return (
      <div>
          <h3 style={{margin:"40px 0 0 170px" }}>Runner's Workout</h3>
        <div className='container'>

            <div className="box a1">
              <div className="text">
                <h6>Ted Dexter</h6>
                <div className="text1"> 
                <FaGreaterThan style={{marginLeft: "87%",backgroundColor:"white", borderRadius:"20px", fontSize:"20px"}}/>
                </div>
              </div>
            </div>

            <div className="box a2">
              <div className="text">
                <h6>Cricket</h6>
                <div className="text1">
                <FaGreaterThan style={{marginLeft: "87%",backgroundColor:"white", borderRadius:"20px", fontSize:"20px"}}/>
                </div>

              </div>
            </div>

            <div className="box a3">
              <div className="text">
                <h6>World Cup final</h6>
                <div className="text1">
                <FaGreaterThan style={{marginLeft: "87%",backgroundColor:"white", borderRadius:"20px", fontSize:"20px"}}/>
                </div>
               </div>
            </div>

            
            
        </div>
        
      </div>
    )
  }
}
