import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  async componentDidMount() {
    console.log("posts props: ", this.props);
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
    // you may navigate programaticaly, wwithout using Link, remove Link component, push new pathname. react router will navigate to it
    // this.props.history.push("/" + id);
    // //this.props.history.push({pathname:"/" + id});
  }

  render() {
    
    const posts = this.state.posts.map(post => {
      return (
        // <Link to={"/posts/" + post.id} key={post.id}>
        <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            // {...this.props}

            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        {/* <Route path="/posts/:postId" exact component={FullPost} /> */}
        <Route path={this.props.match.url+"/:postId"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
