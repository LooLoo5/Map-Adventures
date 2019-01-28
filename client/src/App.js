import React, { Component } from 'react';
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import  Jumbotron from "./Jumbotron";
import Form from "./Form";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <Jumbotron/>
      <Form/>
      </div>
    );
  }
}

export default App;
