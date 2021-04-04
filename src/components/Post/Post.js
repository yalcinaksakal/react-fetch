import React from "react";
import { withRouter } from "react-router-dom";

import "./Post.css";

const post = props => {
  //props caoming from react router do not pass to children
  //if you want history,location,match props pass them to here from parent component {...this.props}
  //or wrap it up with hoc withRouter
  console.log("post props:", props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

//withRouter passes nearest loaded route's route props
export default withRouter(post);
