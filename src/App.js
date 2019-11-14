import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import Page404 from "./pages/Page404";
import './css/App.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={HomePage} exact/>
          <Route path={'/counter'} component={CounterPage}/>
          <Route component={Page404}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}