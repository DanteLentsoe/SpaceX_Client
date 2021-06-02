import React from "react";
import "./App.css";
import HomePage from "./containers/home";
import ErrorPage from "./containers/errorPage";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
