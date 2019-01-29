import React, { Component } from "react";
import Post from "../component/Post";
import Form from "../component/Form";
import Tron from "../component/Jumbotron";

class Feed extends Component {

  state = {
    posts: []
  }

  formSubmit = (formState) => {
    this.setState({ posts: [...this.state.posts, formState] });
  }


  render() {
    return (
      <div>
        <Tron />
        <Form submitHandler={this.formSubmit} />
        
        <div>
          {this.state.posts.map((e, i) => <Post key={i} {...e} />)}

        </div>
      </div>
    );
  }

}

export default Feed;