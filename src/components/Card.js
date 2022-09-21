import React, { Component } from 'react'
import CardItem from './CardItem'

export class Card extends Component {


  render() {
    return (
      <div className="container my-4">
        <div className="row my-4">
          <div className="col-md-3">
            <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
        </div>       

        <div className="row my-4 ">
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
          <div className="col-md-3">
          <CardItem Image="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg"/>
          </div>
        </div>  

      </div>
    )
  }
}

export default Card