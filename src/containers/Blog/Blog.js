import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

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
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
