import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <div className="container" >
           <h1> {this.props.Name} </h1>,
           <h2> {this.props.Team}</h2>,
           <h3> {this.props.Message}</h3>
      </div>
    )
  }
}