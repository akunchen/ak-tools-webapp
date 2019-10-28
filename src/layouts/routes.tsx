import React, { Component } from "react";

import AboutPage from "../pages/about/AboutPage";
import MobxPage from "../pages/mobx/MobxPage";
import HomePage from "../pages/home/HomePage";
import TestPage from "../pages/test/TestPage";
import LoginPage from "../pages/login/LoginPage";

export enum RouteLayoutType {
  NONE,
  MAIN
}

export interface RouteItem {
  name: string;
  url: string;
  component: typeof Component;
  layout: RouteLayoutType
}

export const routes: Array<RouteItem> = [
  { name: 'test', url: '/test', component: TestPage, layout: RouteLayoutType.NONE },
  { name: 'login', url: '/login', component: LoginPage, layout: RouteLayoutType.NONE },
  { name: 'mobx', url: '/mobx', component: MobxPage, layout: RouteLayoutType.MAIN },
  { name: 'about', url: '/about', component: AboutPage, layout: RouteLayoutType.MAIN },
  { name: 'home', url: '/', component: HomePage, layout: RouteLayoutType.MAIN },
];