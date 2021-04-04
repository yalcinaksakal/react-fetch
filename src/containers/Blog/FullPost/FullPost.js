import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  componentDidMount() {
    console.log("full:post", this.props);
    this.loadData();
  }

  //router wont unount and mount components. So you should use didupdate method, if router is being used
  componentDidUpdate() {
    this.loadData();
  }

  async loadData() {
    if (!this.props.match.params.postId) return;
    if (
      !this.state.loadedPost ||
      (this.state.loadedPost &&
        this.state.loadedPost.id !== +this.props.match.params.postId)
    )
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/" +
            this.props.match.params.postId
        );
        const data = await response.json();
        this.setState({ loadedPost: data });
      } catch (err) {
        this.setState({
          loadedPost: { body: "❌ " + err.message },
        });
      }
  }
  deletePostHandler = () => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" +
        this.props.match.params.postId,
      {
        method: "DELETE",
      }
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error("Error:", error);
      });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.postId)
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    if (this.state.loadedPost)
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    return post;
  }
}

export default FullPost;
