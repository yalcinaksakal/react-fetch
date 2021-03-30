import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//interceptor
const constantMock = window.fetch;
window.fetch = function () {
  return new Promise((resolve, reject) => {
    constantMock
      .apply(this, arguments)
      .then(response => {
        console.log(response);
        // do something for specific conditions

        //resolve request for not interrupting fetch request. return a clone of response for not to interfer real fetch

        //or modify response as required and then resolve it
        resolve(response);
        return response.ok ? response.clone().json() : null;
      })
      .then(data => {
        //you may use data for logging purposes eg
        console.log(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
