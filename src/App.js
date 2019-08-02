import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>관리 프로그램</h2>
      </div>
    )
  }
}

export default App;
