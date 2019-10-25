import React, { Component } from "react";
import { Button } from 'antd';
import { BaseComponentProps } from "../../base/BaseComponentProps";

export default class LoginPage extends Component<BaseComponentProps> {

  private toHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <div>login</div>
        <Button onClick={this.toHome} type="primary">to home</Button>
      </>
    )
  }
}