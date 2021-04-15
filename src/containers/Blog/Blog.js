import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";

import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComp from "../../hoc/asyncComponent/asyncComp";
const AsyncNewPost = asyncComp(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "dodgerblue",
                    textDecoration: "underline",
                  }}
                >
                  POSTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    //  absolute or relative path. if u dont mention it is treated as absolute path.
                    // pathname:this.props.match.url + "/new-post",
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* if path matches, then Route component replaces itself with its render function. exact is boolena value, means exact match, else all cases starting with path */}
        {/* <Route path="/" exact render={() => <h1>HOME</h1>} />
        <Route path="/" render={() => <h1>HOME2</h1>} /> */}

        <Switch>
          {/* only first matched route will be rendered 
          So the order is important */}

          {/* All routes starting with /new-post */}
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* 404 unknowm */}
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
