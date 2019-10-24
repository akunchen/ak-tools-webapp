import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {

  render() {
    return (
      <>
        <div>home</div>
        <Link to="/login">to login</Link>
      </>
    )
  }
}