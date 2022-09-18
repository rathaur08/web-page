
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';

export default class App extends Component{

  render() {
    return(

      <div>

       <Navbar/>
        <Card/>

      </div>

    )
  }
}
