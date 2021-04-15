import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      // basename is important, by default it is /. but if app is served in a subirectory make sure to set basename
      // on server side all requests have to be routed to index.html. Our app will handle routing
      <BrowserRouter basename="/">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
