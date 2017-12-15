// 37E-1
import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';


class App extends Component {

  // 36C
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0
    }
  }

  render() {
    return (
      <div>
        
        <Header />
        <Home />
      </div>
    );
  }
}
export default App;