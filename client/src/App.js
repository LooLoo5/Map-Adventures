import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
<<<<<<< HEAD
import Jumbotron from "./component/Jumbotron";
import Form from "./component/Form";
import Post from "./component/Post";
// import About from "./About";
// import Map from "./Map";
=======
>>>>>>> master

import Navbar from "./component/Navbar"
import Feed from "./pages/Feed";
import About from "./pages/About";
import Map from "./pages/Map";

<<<<<<< HEAD
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
=======

function App() {

  return (

    
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
        </Switch>
      </div>
    </Router>
  );

>>>>>>> master
}

export default App;
