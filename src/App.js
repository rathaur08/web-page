import './App.css';
import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import Card from './components/Card';
// import IconList from './components/IconList';

import Navbar2 from './components/Navbar2';
import Img from './components/Img';

export default class App extends Component{

  render() {
    return(

      <div>
        <Navbar2/>
        <Img/>

        {/* ecommerce website */}

       {/* <Navbar/> */}
       {/* <IconList/> */}
       {/* <Card/> */}

      </div>

    )
  }
}
