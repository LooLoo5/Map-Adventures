import React from "react";
import { Jumbotron } from 'reactstrap';
import Go from "../images/Go.jpg";
import "../App.css";

function Tron() {

  return (
    <div className="container">
      <Jumbotron className="Jumbotron">
        <img src={Go} className="Go" alt="Go"></img>
      </Jumbotron>
    </div>
  )

}

export default Tron;