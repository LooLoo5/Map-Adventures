import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import  Jumbotron from "./component/Jumbotron";
import Form from "./component/Form";
import Post from "./component/Post";
import About from "./component/About";
import Map from "./component/Map";


class App extends Component {
  render() {

    return (
      <div className="App">
      <Router/>
      <Route path="/" exact component={App} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Map} />
      <About/>
      <Map/>
      <Jumbotron/>
      <Form/>
      <Post/>
      </div>
    );
  }
}

export default App;
