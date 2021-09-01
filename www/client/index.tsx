import React from "react";
import ReactDOM from "react-dom";

const App = () => {
const test="hallo";
const test2="test"
 return ( <h1>My React and TypeSdasdasdcrsipt App!{test}{test2}</h1>)
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);