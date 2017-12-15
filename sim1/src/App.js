import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


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
        <Main />
      </div>
    );
  }
}
export default App;