import React, { Component } from "react";
import Post from "../component/Post";
import Form from "../component/Form";
import Tron from "../component/Jumbotron";
import Footer from "../component/Footer";
import axios from "axios";

class Feed extends Component {

  state = {
    posts: []
  }

  formSubmit = (formState) => {
    this.setState({ posts: [...this.state.posts, formState] });
    axios.post("/api/posts", formState)
      .then(res => console.log("post created ", res));

  }

  componentDidMount() {
    axios.get("/api/posts")
      .then(res => this.setState({ posts: res.data }));
  }


  render() {
    return (
      <div>
        <Tron />
        <Form submitHandler={this.formSubmit} />

        <div>
          {this.state.posts.map((e, i) => <Post key={i} {...e} />)}

        </div>
        <Footer />
      </div>
    );
  }

}

export default Feed;