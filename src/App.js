import React from "react";
import { StartPage } from "./page";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
