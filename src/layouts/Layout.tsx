import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { BaseComponentProps } from '../base/BaseComponentProps'

import LoginPage from '../pages/login/LoginPage'
import MainLayout from './main/MainLayout'
import TestPage from '../pages/test/TestPage'

class Layout extends Component<BaseComponentProps> {

  render() {
    return (
      <Switch>
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/" component={MainLayout} />
      </Switch>
    )
  }

}

export default withRouter(Layout)