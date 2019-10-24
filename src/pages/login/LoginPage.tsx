import React, { Component } from "react";
import { BaseComponentProps } from "../../base/BaseComponentProps";

export default class LoginPage extends Component<BaseComponentProps> {

  private toHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <div>login</div>
        <button onClick={this.toHome}>to home</button>
      </>
    )
  }
}