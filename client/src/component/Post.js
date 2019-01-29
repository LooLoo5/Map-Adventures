import React, { Component } from "react";



export default class Post extends Component {

  state = {
    comments: []
  }

  render() {
    return (
      <div>
        {this.props}
      </div>


    )
  }

}

