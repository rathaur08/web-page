import React, { Component } from 'react'
import CardItem from './CardItem'

export class Card extends Component {


  render() {
    return (
      <div className="container my-4">
        <div className="row my-4">
          <div className="col-md-3">
            <CardItem/>
          </div>
          <div className="col-md-3">
            <CardItem/>
          </div>
          <div className="col-md-3">
            <CardItem/>
          </div>
          <div className="col-md-3">
            <CardItem/>
          </div>
        </div>       

        <div className="row my-4 ">
          <div className="col-md-3">
            <CardItem/>
          </div>
          <div className="col-md-3">
            <CardItem/>
          </div>
          <div className="col-md-3">
            <CardItem/>
          </div>
          <div className="col-md-3">
            <CardItem/>
          </div>
        </div>  

      </div>
    )
  }
}

export default Card