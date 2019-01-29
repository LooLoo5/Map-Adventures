import React, {Component} from "react";



export default class Post extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            posts: [],
            comments: []
        };
    }
render() {
    return(
        <div>
        <Post
          Post={this.state.posts}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Post results={this.state.results} />
      </div>


        )
    }

}

