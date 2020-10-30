import React from "react";
import { LandingPage, Main } from "./page";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
