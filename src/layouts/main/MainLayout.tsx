import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";

export default class MainLayout extends Component {

  render() {
    return (
      <>
        <h1>main layout</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </>
    )
  }
}