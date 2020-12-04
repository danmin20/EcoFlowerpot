import React from "react";
import { LandingPage, Main, List } from "./page";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/list" component={List} />
        <Route path="/list/:id" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
