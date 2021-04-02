import React, { Component } from "react";

import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Could not get response from server.");
      const data = await response.json();
      const updatedPosts = data.slice(0, 4).map(post => {
        return { ...post, author: "YA" };
      });
      this.setState({ posts: updatedPosts });
    } catch (err) {
      this.setState({
        posts: [{ title: "❌ " + err.message, id: "error" }],
      });
    }
  }
  postSelectedHandler(id) {
    this.setState({ selectedPostId: id });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;

// import FullPost from "../FullPost/FullPost";
// import NewPost from "../NewPost/NewPost";

// <section>
// <FullPost id={this.state.selectedPostId} />
// </section>
// <section>
// <NewPost />
// </section>
