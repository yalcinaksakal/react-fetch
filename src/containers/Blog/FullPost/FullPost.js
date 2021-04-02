import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };
  async componentDidUpdate() {
    if (!this.props.id) return;
    if (
      !this.state.loadedPost ||
      (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
    )
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/" + this.props.id
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
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.id, {
      method: "DELETE",
    })
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
    if (this.props.id)
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
