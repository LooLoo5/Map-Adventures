import React from "react";
import { Jumbotron } from 'reactstrap';
import Go from "./Go.jpg";
import "./App.css";

export default class Tron extends React.Component {
render() {
    return (
<div className="container">
    <Jumbotron className="Jumbotron">
    <img src={Go} className="Go" alt="Go"></img>
    </Jumbotron>
</div>
        )
    }
}