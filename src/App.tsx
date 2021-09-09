import { inject, observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import AppStore from "./Store";
import Header from './components/header/Header';
import SingleCountry from './pages/singleCountry/SingleCountry';

@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: AppStore;
}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/countries/:alpha3Code" component={SingleCountry} />
        </Switch>
      </BrowserRouter>
    );
  }
}
