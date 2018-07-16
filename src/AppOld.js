import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import Paragraph from './Paragraph';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import ToDo from './ToDo';
import {Switch, Route} from 'react-router';

class App extends Component {
  render() {
    let fn = 'Sunny';
    let names = ['Dare', 'Maree'];
    let par = [
      {content: "Content 1", numbers: "123"},
      {content: "Content 2", numbers: "423"},
      {content: "Content 3", numbers: "523"},
    ]
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <HelloWorld fullName="Cruel"/>
        <HelloWorld fullName="Darkness my old friend"/>
        <HelloWorld fullName={fn}/>
        {
          names.map((n, i) => <HelloWorld fullName={n} key={i}/>)
        }
        <Paragraph someContent="Hi" someNumbers="123" />
        <Paragraph someContent="Hi"/> */}
        {/* <Calculator/> */}
        <ToDo/>
        <Switch>
          <Route path="/football" component={Brazil}/>
        </Switch>
        {/* {par.map((n, i) => <Paragraph someContent={n.content} someNumbers={n.numbers} key={i} />)} */}
      </div>
    );
  }
}

class Brazil extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Majka brazilija
        </h1>
        <Switch>
          <Route exact path="/football/:team" component={Team}/>
        </Switch>
      </div>
    );
  }
};

class Team extends React.Component {
  render() {
    return (
      <div> Hi {this.props.match.params.team}
      </div>
    )
  }
};



export default App;
