import React, {Component} from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';

import './App.css';

const data = {
  name: '홍길동!!',
  number: '32483294'
};

class App extends Component {
  render(){
    return (
      <div className="gray-background">
        <h2>관리 프로그램</h2>
        <Customer
          name={data.name}
          number={data.number}
        ></Customer>
      </div>
    )
  }
}

export default App;
