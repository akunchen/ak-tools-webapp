import { observable, action } from 'mobx';

export class TestStore {
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

export default new TestStore();