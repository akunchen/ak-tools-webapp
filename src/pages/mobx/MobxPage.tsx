import React, { Component } from "react";
import { inject, observer } from 'mobx-react'
import { Button } from "antd";
import { BaseComponentProps } from "../../base/BaseComponentProps";
import { TestStore } from "../../stores/modules/TestStore";
import { observable, action } from "mobx";

interface MobxPageProps extends BaseComponentProps {
  test: TestStore;
}

export class MobxStorePageState {
  @observable name: string;
  @observable age: number;

  @action
  changeAge = (i: number) => {
    this.age = this.age + i;
  }

  constructor() {
    this.name = 'asd'
    this.age = 25
  }

}

@inject('test')
@observer
export default class MobxPage extends Component<MobxPageProps, MobxStorePageState> {

  state = new MobxStorePageState();

  render() {
    return (
      <div>
        <h1>from store</h1>
        <div >
          i am {this.props.test.name}, and {this.props.test.age} years old;
  
        <Button type="primary" onClick={() => this.props.test.changeAge(1)}>add age</Button>
        </div>
        <br />
        <br />
        <br />
        <h1>from state</h1>
        <div >
          i am {this.state.name}, and {this.state.age} years old;
  
        <Button type="primary" onClick={() => this.state.changeAge(1)}>add age</Button>
        </div>
      </div>
    )
  }
}