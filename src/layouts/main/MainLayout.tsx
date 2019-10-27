import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, Menu } from "antd";

import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import MobxPage from "../../pages/mobx/MobxPage";
import { BaseComponentProps } from "../../base/BaseComponentProps";

import './MainLayout.less'

interface RouteItem {
  name: string;
  url: string;
  component: typeof Component;
}

interface MainLayoutState {
  routes: Array<RouteItem>;
  clientHeight: number;
}

export default class MainLayout extends Component<BaseComponentProps, MainLayoutState> {

  state = {
    routes: [
      { name: 'mobx', url: '/mobx', component: MobxPage },
      { name: 'about', url: '/about', component: AboutPage },
      { name: 'home', url: '/', component: HomePage },
    ],
    get clientHeight() {
      return document.body.clientHeight;
    }
  };

  private clickNavItem({ url }: RouteItem) {
    this.props.history.push(url)
  }

  private renderMenuItem(r: RouteItem) {
    return (
      <Menu.Item key={r.name} onClick={this.clickNavItem.bind(this, r)}>
        {r.name}
      </Menu.Item>
    )
  }

  private renderMenus() {
    const url = this.props.history.location.pathname;
    const { name } = this.state.routes.find(r => r.url === url) || { name: 'home' }

    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[name]}
        style={{ lineHeight: '64px' }}
      >
        {this.state.routes.map(this.renderMenuItem.bind(this))}
      </Menu>
    )
  }

  private renderRoutes() {
    return (
      <Switch >
        {this.state.routes.map(r => <Route exact key={r.name} path={r.url} component={r.component} />)}
      </Switch >
    )
  }

  render() {
    return (
      <Layout className="main-layout">
        <Layout.Header className="main-layout-header">
          {this.renderMenus()}
        </Layout.Header>
        <Layout.Content className="main-layout-content" style={{ height: this.state.clientHeight }}>
          <Layout>
            {/* <Layout.Sider>Sider</Layout.Sider> */}
            <Layout.Content className="">
              {this.renderRoutes()}
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    )
  }
}