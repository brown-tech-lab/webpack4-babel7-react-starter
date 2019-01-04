import React, { Component } from "react";
import ReactDOM from "react-dom";

class HelloContainer extends Component {
  render() {
    return (
      <div>Webpack4: Hello React! Have you ever seen Babel7?</div>
    );
  }
}
export default HelloContainer;

const wrapper = document.getElementById("hello");
wrapper ? ReactDOM.render(<HelloContainer />, wrapper) : false;