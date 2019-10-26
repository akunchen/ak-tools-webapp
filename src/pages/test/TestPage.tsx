import React, { Component } from 'react'

interface CertData {
  id: number;
  name: string;
}

export default class TestPage extends Component<any, { certs: Array<CertData>, selected: Array<number>, showAdd: boolean }> {

  state = {
    certs: [
      { id: 1, name: '证书1' },
      { id: 2, name: '证书2' },
      { id: 3, name: '证书3' },
      { id: 4, name: '证书4' },
      { id: 5, name: '证书5' },
      { id: 6, name: '证书6' },
    ],
    selected: [],
    showAdd: false
  };

  onCheckboxChange(id: number) {
    // @ts-ignore
    const index = this.state.selected.indexOf(id);
    const selected = this.state.selected;
    // @ts-ignore
    index !== -1 ? selected.splice(index, 1) : selected.push(id);
    this.setState({ selected })
  }

  render() {
    // @ts-ignore
    const selectedCerts = this.state.certs.filter(({ id }) => this.state.selected.includes(id));
    console.log('selectedCerts', selectedCerts)

    return (
      <div>
        <div>
          {this.state.showAdd && this.state.certs.map(cert => (
            <div>
              <input type="checkbox" style={{ marginLeft: 10, marginRight: 10 }} key={cert.id} onChange={this.onCheckboxChange.bind(this, cert.id)} />
              {cert.id}, {cert.name}
            </div>
          ))}
        </div>
        <button onClick={() => this.setState({ showAdd: !this.state.showAdd })}>{this.state.showAdd ? '取消选择' : '选择'}</button>
        <div>
          已选择的证书
          {selectedCerts.map(cert => (<div key={cert.id}> {cert.id}, {cert.name}</div>))}
        </div>
      </div>
    );
  }

}