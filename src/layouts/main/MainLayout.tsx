import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { BaseComponentProps } from "../../base/BaseComponentProps";
import { RouteItem, routes, RouteLayoutType } from "../routes";

import './MainLayout.less'
import RenderHeaderMenu from "./RenderHeaderMenu";

interface MainLayoutState {
  routes: Array<RouteItem>;
  clientHeight: number;
}

export default class MainLayout extends Component<BaseComponentProps, MainLayoutState> {

  state = {
    routes: routes.filter(({ layout }) => layout === RouteLayoutType.MAIN),
    clientHeight: document.body.clientHeight,
  };

  render() {
    return (
      <Layout className="main-layout">
        <Layout.Header className="main-layout-header">
          <RenderHeaderMenu {...this.props} menus={this.state.routes} />
        </Layout.Header>
        <Layout.Content className="main-layout-content" style={{ height: this.state.clientHeight }}>
          <Switch >
            {this.state.routes.map(r => <Route exact key={r.name} path={r.url} component={r.component} />)}
          </Switch >
        </Layout.Content>
      </Layout>
    )
  }
}