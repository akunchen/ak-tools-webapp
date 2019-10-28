import React, { Component } from 'react'
import { BaseComponentProps } from '../../base/BaseComponentProps';
import { RouteItem } from '../routes';
import { Menu } from 'antd';

interface RenderHeaderMenuProps extends BaseComponentProps {
  menus: Array<RouteItem>;
}

export default class RenderHeaderMenu extends Component<RenderHeaderMenuProps> {

  private clickItem({ url }: RouteItem) {
    this.props.history.push(url)
  }

  private get defaultKeys() {
    const url = this.props.history.location.pathname;
    const { name } = this.props.menus.find(r => r.url === url) || { name: 'home' }
    return [name];
  }


  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={this.defaultKeys}
        className="nav-menu"
      >
        {this.props.menus.map(r => (
          <Menu.Item key={r.name} onClick={this.clickItem.bind(this, r)}>
            {r.name}
          </Menu.Item>
        ))}
      </Menu>
    )
  }

}