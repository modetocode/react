import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let fn = 'Sunny';
    let names = ['Dare', 'Maree'];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld fullName="Cruel"/>
        <HelloWorld fullName="Darkness my old friend"/>
        <HelloWorld fullName={fn}/>
        {
          names.map((n, i) => <HelloWorld fullName={n} key={i}/>)
        }
      </div>
    );
  }
}

export default App;
