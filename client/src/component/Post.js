import React, { Component } from "react";


export default class Post extends Component {

  state = {}


  render() {
    return (
      <div className="container" id="post" >
        <p>{this.props.Name}</p>
        <p>{this.props.Team}</p>
        <p>{this.props.Message}</p>
      </div>
    );
  }

}

