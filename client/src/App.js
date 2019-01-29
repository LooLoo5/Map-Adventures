import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Jumbotron from "./component/Jumbotron";
import Form from "./component/Form";
import Post from "./component/Post";
// import About from "./About";
// import Map from "./Map";


class App extends Component {

  state = {
    posts: []
  }

  formSubmit = formState => {
    this.setState({ posts: [...this.state.posts, formState] })
  }

  render() {
    return (

      <div className="App">
        <Nav />
        {/* <Switch>
            <Route exact path="/" />
            <Route exact path="/About" component={About} />
            <Route exact path="/Map" component={Map} />
            </Switch> */}
        <Jumbotron />
        <Form submitHandler={this.formSubmit} />

        {this.state.posts.map(e => <Post data={e} />)}

      </div>

    );
  }
}

export default App;
