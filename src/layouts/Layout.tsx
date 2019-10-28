import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { BaseComponentProps } from '../base/BaseComponentProps'
import { routes, RouteLayoutType } from './routes'

import MainLayout from './main/MainLayout'

class Layout extends Component<BaseComponentProps> {

  state = {
    noLayouts: routes.filter(({ layout }) => layout === RouteLayoutType.NONE)
  }

  render() {
    return (
      <Switch>
        {this.state.noLayouts.map(r => <Route exact key={r.url} path={r.url} component={r.component} />)}
        <Route path="/" component={MainLayout} />
      </Switch>
    )
  }

}

export default withRouter(Layout)