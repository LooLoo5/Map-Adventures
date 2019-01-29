import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Navbar from "./component/Navbar"
import Feed from "./pages/Feed";
import About from "./pages/About";
import Map from "./pages/Map";


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

}

export default App;
