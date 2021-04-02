import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* if path matches, then Route component replaces itself with its render function. exact is boolena value, means exact match, else all cases starting with path */}
        {/* <Route path="/" exact render={() => <h1>HOME</h1>} />
        <Route path="/" render={() => <h1>HOME2</h1>} /> */}
        <Route path="/" exact component={Posts} />

        {/* All routes starting with /new-post */}
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
