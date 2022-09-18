import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import IconList from './components/IconList';

export default class App extends Component{

  render() {
    return(

      <div>

       <Navbar/>

       <IconList/>
       
       <Card/>

      </div>

    )
  }
}
